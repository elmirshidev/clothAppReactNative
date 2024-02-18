//@ts-nocheck
import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {MagnifyingGlassIcon as SearchIcon} from 'react-native-heroicons/outline';

function SearchFilter(): React.JSX.Element {
  return (
    <View className={'mt-5 h-[40px] flex-row gap-x-2 items-center'}>
      <View className={'relative flex-1'}>
        <TextInput
          className={'bg-[#F3F4F5] flex-1 rounded-[30px] text-[12px] pl-14'}
          placeholder={'Search...'}
        />
        <View className={'absolute top-2 left-4'}>
          <SearchIcon color={'black'} />
        </View>
      </View>
      <TouchableOpacity>
        <Image source={require('../assets/menu.png')} />
      </TouchableOpacity>
    </View>
  );
}
export default SearchFilter;
