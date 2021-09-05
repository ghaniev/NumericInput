import React, {useState} from 'react';
import {Button, Modal, SafeAreaView, Text, TextInput, View} from 'react-native';
import {TransactionStore, TransactionType} from '../../../store/Store';
import {NumericInput} from '../../numericInput/NumericInput';
import {DetailsTransactionModalStyles} from './DetailsScreenStyles';

export const DetailsTransactionModal = ({
  visible,
  onModalClose,
  accountId,
  transactionType,
}: {
  visible: boolean;
  onModalClose: () => void;
  accountId: string;
  transactionType: 'send' | 'receive';
}) => {
  const [sum, setSum] = useState(0);
  const transaction: TransactionType = {
    accountId,
    sum,
    comment: '',
    date: Date.now(),
    isSended: transactionType === 'send' ? true : false,
  };

  const transactionCreated = () => {
    TransactionStore.createTransaction(transaction);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onModalClose}>
      <SafeAreaView style={DetailsTransactionModalStyles.safeArea}>
        <View style={DetailsTransactionModalStyles.header}>
          <Text style={DetailsTransactionModalStyles.headerText}>
            {transactionType === 'send' ? 'Send' : 'Receive'}
          </Text>
          <Button title={'X'} color="black" onPress={onModalClose} />
        </View>
        <View style={DetailsTransactionModalStyles.container}>
          <Text style={DetailsTransactionModalStyles.inputHeaderText}>Sum</Text>
          <NumericInput sum={sum => setSum(sum)} />

          <Text style={DetailsTransactionModalStyles.inputHeaderText}>
            Comment
          </Text>
          <TextInput
            placeholder="Details comment"
            onChangeText={text => (transaction.comment = text)}
            multiline={true}
            style={DetailsTransactionModalStyles.commentInput}
          />
          <View style={DetailsTransactionModalStyles.btnContainer}>
            <Button
              title={transactionType === 'send' ? 'Send' : 'Receive'}
              color={'white'}
              onPress={() => {
                onModalClose();
                transactionCreated();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
