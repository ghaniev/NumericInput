import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import {NumericInputStyles} from './NumericInputStyles';

export const NumericInput = ({sum}: {sum: (sum: number) => void}) => {
  const [value, setValue] = useState('100');

  useEffect(() => {
    sum(Number(parseFloat(value).toFixed(2)));
  }, [value]);

  const IncAndDec = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setValue((parseFloat(value) + 100).toString());
    } else {
      if (parseFloat(value) > 99) {
        setValue((parseFloat(value) - 100).toString());
      }
    }
  };

  const onChangeText = (text: string) => {
    if (parseFloat(text) > 999999.99) {
      setValue('999999.99'.replace(',', '.'));
    } else if (parseFloat(text) < 1) {
      setValue('1'.replace(',', '.'));
    } else {
      setValue(text.replace(',', '.'));
    }
    if (Number.isNaN(parseInt(text))) {
      setValue('0');
    }
  };

  return (
    <>
      <View style={NumericInputStyles.container}>
        <View style={NumericInputStyles.btnContainer}>
          <Button onPress={() => IncAndDec('inc')} title="▲" color={'black'} />
        </View>
        <TextInput
          value={value}
          maxLength={9}
          keyboardType={'decimal-pad'}
          onChangeText={onChangeText}
          style={NumericInputStyles.numericInput}
        />
        <View style={NumericInputStyles.btnContainer}>
          <Button onPress={() => IncAndDec('dec')} title="▼" color={'black'} />
        </View>
      </View>
      <Text>min: 1.00 - max: 999999.99 </Text>
    </>
  );
};
