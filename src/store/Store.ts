import AsyncStorage from '@react-native-async-storage/async-storage';

import {flow, Instance, SnapshotOut, types} from 'mobx-state-tree';

export const Account = types.model('Account', {
  id: types.string,
  name: types.string,
  balance: types.number,
});
const Transaction = types.model('Transaction', {
  accountId: types.string,
  sum: types.number,
  comment: types.string,
  date: types.number,
  isSended: types.boolean,
});

export const AccountStore = types
  .model({
    accounts: types.array(Account),
  })
  .views(self => ({
    get listAccounts() {
      return self.accounts.map(item => item);
    },
  }))
  .actions(self => {
    const createAccount = flow(function* createAccount(account: AccountType) {
      self.accounts.push(account);
      if (AsyncStorage.getItem('accounts')) {
        const data = yield AsyncStorage.getItem('accounts');
        let arr = data !== null ? JSON.parse(data) : [];
        arr.push(account);
        AsyncStorage.setItem('accounts', JSON.stringify(arr));
      } else {
        const arr = [];
        arr.push(account);
        AsyncStorage.setItem('accounts', JSON.stringify(arr));
      }
    });

    const updateAccount = (account: AccountType) => {
      self.accounts.forEach(acc => {
        if (acc.id === account.id) {
          acc.balance = account.balance;
        }
      });
    };

    const loadAccounts = flow(function* () {
      const accounts = yield AsyncStorage.getItem('accounts');
      const accountArr: AccountType[] = accounts ? JSON.parse(accounts) : [];
      self.accounts.push(...accountArr);
    });
    return {
      createAccount,
      loadAccounts,
      updateAccount,
      afterCreate() {
        createAccount;
        loadAccounts;
      },
    };
  })
  .create({
    accounts: [],
  });

export const TransactionStore = types
  .model({
    transactions: types.array(Transaction),
  })
  .views(self => ({
    getCurrentAccountTransactions(accountId: string) {
      return currentAccountTransactions(self.transactions, accountId);
    },
  }))
  .actions(self => {
    const createTransaction = flow(function* createTransaction(
      transaction: TransactionType,
    ) {
      self.transactions.push(transaction);
      const accountsInLocalStorage = JSON.parse(
        (yield AsyncStorage.getItem('accounts')) || '[]',
      );
      const transactionsInLocalStorage = JSON.parse(
        (yield AsyncStorage.getItem('transactions')) || '[]',
      );
      let currentAccount: AccountType = accountsInLocalStorage.find(
        (account: AccountType) => account.id === transaction.accountId,
      );
      transactionsInLocalStorage.push(transaction);
      yield AsyncStorage.setItem(
        'transactions',
        JSON.stringify(transactionsInLocalStorage),
      );
      if (transaction.isSended) {
        currentAccount.balance -= transaction.sum;
      } else {
        currentAccount.balance += transaction.sum;
      }
      accountsInLocalStorage.concat(currentAccount);
      yield AsyncStorage.setItem(
        'accounts',
        JSON.stringify(accountsInLocalStorage),
      );
      AccountStore.updateAccount(currentAccount);
    });

    const loadTransactions = flow(function* loadTransactions() {
      const transactionsInLocalStorage = yield AsyncStorage.getItem(
        'transactions',
      );
      const transactions: TransactionType[] = transactionsInLocalStorage
        ? JSON.parse(transactionsInLocalStorage)
        : [];
      self.transactions.push(...transactions);
    });
    return {
      createTransaction,
      loadTransactions,
      afterCreate() {
        createTransaction;
        loadTransactions;
      },
    };
  })
  .create({
    transactions: [],
  });

function currentAccountTransactions(
  transactions: TransactionType[],
  accountId: string,
) {
  const currentTransactions = transactions.filter(
    transaction => transaction.accountId === accountId,
  );
  return currentTransactions.sort((a, b) => b.date - a.date);
}
export interface AccountType extends Instance<typeof Account> {}
export interface TransactionType extends SnapshotOut<typeof Transaction> {}
