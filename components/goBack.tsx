import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {TouchableOpacity} from 'react-native';
import React from 'react';

function GoBack({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className={
        'bg-black rounded-full w-[40px] h-[40px] justify-center items-center'
      }>
      <ChevronLeftIcon color={'white'} />
    </TouchableOpacity>
  );
}

export default GoBack;
