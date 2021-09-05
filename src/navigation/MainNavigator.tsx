import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../components/myWallet/home/HomeScreen';
import {DetailsScreen} from '../components/myWallet/details/DetailsScreen';
import {CreateAccount} from '../components/myWallet/createAccount/CreateAccount';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyAccounts"
          component={HomeScreen}
          options={{
            title: 'My accounts',
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="NewAccount"
          component={CreateAccount}
          options={{
            title: 'New account',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
