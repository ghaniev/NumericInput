import {observer} from 'mobx-react-lite';
import React, {useMemo, useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {DetailsScreenProps} from '../../../navigation/MainNavigatorType';
import {TransactionType, TransactionStore} from '../../../store/Store';
import {DetailsScreenStyles} from './DetailsScreenStyles';
import {DetailsTransactionModal} from './DetailsTransactionModal';

export const DetailsScreen = observer(({route}: DetailsScreenProps) => {
  const {getCurrentAccountTransactions} = TransactionStore;
  const [visible, setVisible] = useState(false);
  const [transactionType, setTransactionType] = useState<'send' | 'receive'>(
    'send',
  );
  const account = route.params.account;
  const transactions = getCurrentAccountTransactions(route.params.account.id);

  const renderTransactionItems = useMemo(
    () =>
      ({item: transaction}: {item: TransactionType}) => {
        const date = new Date(transaction.date);
        return (
          <View style={DetailsScreenStyles.itemContainer}>
            <View
              style={[
                DetailsScreenStyles.markerContainer,
                {
                  backgroundColor: transaction.isSended
                    ? 'rgba(255, 0, 0, 0.2)'
                    : 'rgba(0,255, 0, 0.2)',
                },
              ]}>
              <Text
                style={{
                  color: transaction.isSended ? 'red' : '#14c926',
                  fontSize: 25,
                }}>
                {transaction.isSended ? '▲' : '▼'}
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                marginRight: 30,
                justifyContent: 'center',
              }}>
              <Text style={DetailsScreenStyles.sumText}>{transaction.sum}</Text>
              <Text style={DetailsScreenStyles.commentText}>
                {transaction.comment} |{' '}
                {date.getDate() +
                  '.' +
                  (date.getMonth() + 1) +
                  '.' +
                  date.getFullYear()}{' '}
              </Text>
            </View>
          </View>
        );
      },
    [transactions],
  );

  return (
    <View style={DetailsScreenStyles.container}>
      <DetailsTransactionModal
        visible={visible}
        onModalClose={() => setVisible(false)}
        accountId={account.id}
        transactionType={transactionType}
      />
      <View style={DetailsScreenStyles.accountDetails}>
        <Text style={DetailsScreenStyles.accountName}>{account.name}</Text>
        <Text style={DetailsScreenStyles.accountBalance}>
          {account.balance}
        </Text>
      </View>
      <Text style={DetailsScreenStyles.transactionListHeader}>
        transactions
      </Text>
      <FlatList
        data={transactions}
        contentContainerStyle={{marginHorizontal: 20}}
        renderItem={renderTransactionItems}
        keyExtractor={index => index.toString()}
      />
      <View style={DetailsScreenStyles.btnContainer}>
        <Button
          title={'▲ send'}
          color="white"
          onPress={() => {
            setVisible(true);
            setTransactionType('send');
          }}
        />
        <Button
          title={'▼ receive'}
          color="white"
          onPress={() => {
            setVisible(true);
            setTransactionType('receive');
          }}
        />
      </View>
      <SafeAreaView />
    </View>
  );
});
