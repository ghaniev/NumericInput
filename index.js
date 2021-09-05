import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {AccountStore, TransactionStore} from './src/store/Store';

AccountStore.loadAccounts().then();
TransactionStore.loadTransactions().then();

AppRegistry.registerComponent(appName, () => App);
