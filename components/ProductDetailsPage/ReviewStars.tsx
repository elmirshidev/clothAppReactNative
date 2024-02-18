// @ts-nocheck
import {Text, View} from 'react-native';
import React from 'react';
import {StarIcon} from 'react-native-heroicons/solid';
function ReviewStars({reviews}: {reviews: number}): React.JSX.Element {
  return (
    <View className={'mt-2 flex-row items-center'}>
      <View className={'flex-row gap-x-1'}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color={'#FFAB07'} size={15} />
        ))}
      </View>
      <Text className={'ml-3 text-xs text-black'}>({reviews} Reviews)</Text>
    </View>
  );
}
export default ReviewStars;
