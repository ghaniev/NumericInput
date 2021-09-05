import {StackScreenProps} from '@react-navigation/stack';
import {AccountType} from '../store/Store';

type RootStackParamList = {
  MyAccounts: undefined;
  Details: {account: AccountType};
  NewAccount: undefined;
};

export type HomeScreenProps = StackScreenProps<
  RootStackParamList,
  'MyAccounts'
>;

export type DetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'Details'
>;
export type CreateAccountScreenProps = StackScreenProps<
  RootStackParamList,
  'NewAccount'
>;
