//@ts-nocheck
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeartIcon as Heart} from 'react-native-heroicons/outline';
import {HeartIcon as HeartSolid} from 'react-native-heroicons/solid';
import {favoriteStore} from '../../zustandStore.ts';
import {Product} from '../../types';
function ProductSelf({
  navigation,
  product,
}: {
  navigation: any;
  product: Omit<Product, 'kind'>;
}): React.JSX.Element {
  const {favorites} = favoriteStore();
  let isFavorite = favorites.includes(product.id);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetailsPage', {product})}
      className={'w-[155px] mr-6  items-center gap-y-1'}>
      <View className={'relative w-full h-[170px]'}>
        <Image
          className={'w-full h-full rounded-[15px]'}
          source={product.image}
        />
        <View
          className={
            'absolute right-3 top-3 h-6 w-6 bg-black rounded-full justify-center items-center'
          }>
          {isFavorite ? (
            <HeartSolid color={'red'} size={15} />
          ) : (
            <Heart color={'white'} size={15} />
          )}
        </View>
      </View>
      <View className={'items-center gap-y-1'}>
        <Text className={'text-[14px] text-center font-semibold text-black'}>
          {product.name}
        </Text>
        <Text className={'text-xs text-center'}>{product.desc}</Text>
        <Text className={'text-[14px] text-center font-semibold text-black'}>
          ${product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default ProductSelf;
