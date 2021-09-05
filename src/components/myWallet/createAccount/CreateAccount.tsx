import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {CreateAccountScreenProps} from '../../../navigation/MainNavigatorType';
import {AccountStore, AccountType} from '../../../store/Store';
import {CreateAccountStyles} from './CreateAccountStyles';

export const CreateAccount = ({navigation}: CreateAccountScreenProps) => {
  const generatedUuid = uuidv4();
  var accountObj: AccountType = {
    id: generatedUuid,
    name: '',
    balance: 0,
  };
  const createNewAccount = () => {
    AccountStore.createAccount(accountObj);
    navigation.goBack();
  };

  return (
    <View style={CreateAccountStyles.container}>
      <Text style={CreateAccountStyles.inputHeaderText}>Auto-generated ID</Text>
      <View style={CreateAccountStyles.textInputContainer}>
        <Text style={{fontSize: 15}}>{generatedUuid}</Text>
      </View>
      <Text style={CreateAccountStyles.inputHeaderText}>Account name</Text>
      <TextInput
        style={CreateAccountStyles.textInputContainer}
        placeholder="Write a name of Account"
        onChangeText={name => (accountObj.name = name)}
      />
      <View style={CreateAccountStyles.btnContainer}>
        <Button
          title={'Create new account'}
          onPress={createNewAccount}
          color="white"
        />
      </View>
    </View>
  );
};
