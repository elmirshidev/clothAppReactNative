//@ts-nocheck
import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
import {
  HomeIcon as Home,
  ShoppingCartIcon as Basket,
  BellIcon as Bell,
  UserIcon as User,
} from 'react-native-heroicons/solid';
import {useRoute} from '@react-navigation/native';
function Footer(): React.JSX.Element {
  const route = useRoute();
  const routeName = route.name;
  const icons = [
    {
      id: 1,
      icon: (
        <Home color={routeName === 'MainPage' ? 'white' : 'black'} size={20} />
      ),
      name: 'Home',
      page: 'MainPage',
    },
    {
      id: 2,
      icon: <Basket color={'#000000'} size={20} />,
      name: 'Basket',
      page: 'BasketPage',
    },
    {
      id: 3,
      icon: <Bell color={'#000000'} size={20} />,
      name: 'Notification',
      page: 'NotificationPage',
    },
    {
      id: 4,
      icon: <User color={'#000000'} size={20} />,
      name: 'Profile',
      page: 'ProfilePage',
    },
  ];
  return (
    <View
      style={styles.container}
      className={
        'absolute justify-center h-[70px] left-0 right-0 bottom-0 bg-white rounded-t-[30px]'
      }>
      <View className={'flex-row justify-around'}>
        {icons.map(icon => (
          <TouchableOpacity
            className={`flex-row pr-2 items-center gap-x-1 ${
              icon.page === routeName && 'bg-[#EEEEEE]'
            } rounded-[30px]`}
            key={icon.id}>
            <View
              className={`${
                icon.page === routeName && 'bg-black rounded-full'
              } w-[30px] h-[30px] justify-center items-center`}>
              {icon.icon}
            </View>
            <Text
              className={`text-black text-xs font-semibold ${
                icon.page !== routeName && 'hidden'
              }`}>
              {icon.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    ...Platform.select({
      ios: {
        shadowColor: '#0000001A',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});
export default Footer;
