// @ts-nocheck
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

function Counter({value, onChange}): React.JSX.Element {
  return (
    <View
      className={
        'w-[100px] h-[30px] bg-[#EEEEEE] flex-row items-center justify-between rounded-[30px]'
      }>
      <TouchableOpacity
        className={'w-[30px] h-[30px] justify-center items-center'}
        onPress={() => {
          value >= 2 && onChange(value - 1);
        }}>
        <Text className={'text-black text-base'}>-</Text>
      </TouchableOpacity>
      <Text className={'text-black text-base'}>{value}</Text>
      <TouchableOpacity
        className={'w-[30px] h-[30px] justify-center items-center'}
        onPress={() => onChange(value + 1)}>
        <Text className={'text-black text-base'}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Counter;
