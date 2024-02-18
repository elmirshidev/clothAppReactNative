/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// @ts-ignore
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// import {
//   SafeAreaView,
//   Text,
//   // useColorScheme,
//   View,
// } from 'react-native';
import RegisterPage from './pages/RegisterPage.tsx';
import MainPage from './pages/MainPage.tsx';
import ProductItemsPage from './pages/ProductItemsPage.tsx';
import ProductDetailsPage from './pages/ProductDetailsPage.tsx';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'RegisterPage'} component={RegisterPage} />
        <Stack.Screen name={'MainPage'} component={MainPage} />
        <Stack.Screen name={'ProductItemsPage'} component={ProductItemsPage} />
        <Stack.Screen
          name={'ProductDetailsPage'}
          component={ProductDetailsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
