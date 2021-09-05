import {useIsFocused} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {HomeScreenProps} from '../../../navigation/MainNavigatorType';
import {AccountStore, AccountType} from '../../../store/Store';
import {HomeScreenStyles} from './HomeScreenStyles';

export const HomeScreen = observer(({navigation}: HomeScreenProps) => {
  const {listAccounts} = AccountStore;
  useIsFocused();

  const renderAccounts = ({item: account}: {item: AccountType}) => {
    return (
      <Pressable
        style={HomeScreenStyles.accountItemContainer}
        onPress={() => navigation.navigate('Details', {account: account})}>
        <Text style={HomeScreenStyles.accountItemName}>{account.name}</Text>
        <Text style={{color: account.balance < 0 ? 'red' : '#14c926'}}>
          {account.balance}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={HomeScreenStyles.container}>
      <FlatList
        data={listAccounts}
        renderItem={renderAccounts}
        keyExtractor={account => account.id}
      />
      <View style={HomeScreenStyles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('NewAccount')}
          title="New account"
          color="white"
        />
      </View>
      <SafeAreaView />
    </View>
  );
});
