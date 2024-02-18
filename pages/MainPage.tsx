//@ts-nocheck
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CampaignComponent from '../components/MainPage/CampaignComponent.tsx';
import {campaigns, products} from '../datas.ts';
import ProductItem from '../components/MainPage/ProductItem.tsx';
import Footer from '../components/Footer.tsx';
import Navbar from '../components/Navbar.tsx';
import SearchFilter from '../components/SearchFilter.tsx';
import {userStore} from '../zustandStore.ts';
import {Product} from '../types';
function MainPage({navigation}: {navigation: any}): React.JSX.Element {
  const {username} = userStore();
  interface structuredObjType {
    [key: string]: Omit<Product, 'category'>[];
  }
  const structuredObj: structuredObjType = {};
  interface sampleProductsType {
    [key: string]: Omit<Product, 'category'>[];
  }
  const sampleProducts: sampleProductsType = {};
  //Ready for mapping

  products.forEach(pr => {
    const {category, ...rest} = pr;

    if (!sampleProducts[category]) {
      sampleProducts[category] = [];
    }
    if (sampleProducts[category].length < 10) {
      sampleProducts[category].push(rest);
    }

    if (!structuredObj[category]) {
      structuredObj[category] = [];
    }
    structuredObj[category].push(rest);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} />
      <View className={'gap-y-1'}>
        <Text className={'text-black font-bold text-2xl'}>
          Welcome, <Text>{username}</Text>
        </Text>
        <Text className={'font-semibold text-xl'}>Our Fashions App</Text>
      </View>

      <SearchFilter />
      <View className={'mt-5 mb-10'}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {campaigns.map(campaign => {
            return <CampaignComponent campaign={campaign} key={campaign.id} />;
          })}
        </ScrollView>
      </View>
      <View>
        <ScrollView className={''} showsVerticalScrollIndicator={false}>
          {Object.keys(structuredObj).map((category, i) => {
            return (
              <ProductItem
                key={i}
                navigation={navigation}
                categoryName={category}
                categoryArr={structuredObj[category]}
                sampleProductArr={sampleProducts[category]}
              />
            );
          })}
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});
export default MainPage;
