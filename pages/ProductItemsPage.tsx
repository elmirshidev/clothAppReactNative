import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../components/Navbar.tsx';
import SearchFilter from '../components/SearchFilter.tsx';
import ProductSelf from '../components/MainPage/ProductSelf.tsx';
import {Product} from '../types';

function ProductItemsPage({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const {categoryArr} = route.params;
  interface ProductsKindType {
    [key: string]: Omit<Product, 'kind'>[];
  }
  const productsKind: ProductsKindType = {};
  categoryArr.forEach((pr: Product) => {
    const {kind, ...rest} = pr;
    if (!productsKind[kind]) {
      productsKind[kind] = [];
    }
    productsKind[kind].push(rest);
  });
  const [kind, selectedKind] = useState(categoryArr[0].kind);
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} />
      <SearchFilter />
      <View className={'mt-10'}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.keys(productsKind).map((k, idx) => (
            <TouchableOpacity
              onPress={() => selectedKind(k)}
              className={`${
                k === kind ? 'bg-black' : 'bg-white'
              } mr-4 min-w-[100px] justify-center items-center rounded-[30px] px-2 py-1 border-[1px] border-[#EEEEEE]`}
              key={idx}>
              <Text
                className={`${
                  k === kind ? 'text-white' : 'text-black'
                } font-bold text-sm`}>
                {k}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className={'mt-10'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {productsKind[kind].map((pr: Omit<Product, 'kind'>) => (
            <ProductSelf key={pr.id} navigation={navigation} product={pr} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: StatusBar.currentHeight || 20,
  },
});
export default ProductItemsPage;
