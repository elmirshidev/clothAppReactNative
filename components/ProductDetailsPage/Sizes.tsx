// @ts-nocheck
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
function ReviewStars({size, setSize}): React.JSX.Element {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  return (
    <View className={'flex-row items-center gap-x-3'}>
      {sizes.map((s, i) => (
        <TouchableOpacity
          onPress={() => setSize(s)}
          className={`${
            s === size ? 'bg-black' : 'bg-white'
          } justify-center items-center w-[40px] h-[40px] rounded-full border-[1px] border-[#DDDDDD]`}
          key={i}>
          <Text
            className={`${
              s === size && 'text-white'
            } font-semibold text-[14px]`}>
            {s}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
export default ReviewStars;
