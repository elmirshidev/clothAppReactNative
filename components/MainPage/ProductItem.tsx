import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ProductSelf from './ProductSelf.tsx';
import {Product} from '../../types';

interface ProductItemProps {
  categoryName: string;
  navigation: any;
  categoryArr: Product[];
  sampleProductArr: Product[];
}

function ProductItem({
  categoryName,
  navigation,
  categoryArr,
  sampleProductArr,
}: ProductItemProps): React.JSX.Element {
  return (
    <View>
      <View className={'flex-row justify-between items-center'}>
        <Text className={'text-lg font-bold text-black'}>{categoryName}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductItemsPage', {categoryArr})
          }>
          <Text className={'font-semibold text-xs text-[#666666]'}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        className={'mt-4'}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {sampleProductArr.map(pr => {
          return (
            <ProductSelf key={pr.id} navigation={navigation} product={pr} />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default ProductItem;
