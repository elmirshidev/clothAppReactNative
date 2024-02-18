//@ts-nocheck
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import GoBack from './goBack.tsx';
function Navbar({navigation}: {navigation: any}): React.JSX.Element {
  const route = useRoute();
  const routeName = route.name;
  return (
    <View className={'flex-row justify-between items-center mb-5'}>
      {routeName !== 'MainPage' ? (
        <GoBack navigation={navigation} />
      ) : (
        <TouchableOpacity>
          <Image source={require('../assets/menu.png')} />
        </TouchableOpacity>
      )}

      <TouchableOpacity className={'bg-[#DDDDDD] rounded-full'}>
        <Image source={require('../assets/profile.png')} />
      </TouchableOpacity>
    </View>
  );
}
export default Navbar;
