import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GoBack from '../components/goBack.tsx';
import {
  HeartIcon as Heart,
  ShoppingBagIcon as Bag,
} from 'react-native-heroicons/solid';
import Counter from '../components/ProductDetailsPage/Counter.tsx';
import ReviewStars from '../components/ProductDetailsPage/ReviewStars.tsx';
import Sizes from '../components/ProductDetailsPage/Sizes.tsx';
import Colors from '../components/ProductDetailsPage/Colors.tsx';
import {favoriteStore, cartStore} from '../zustandStore.ts';
import ScrollImages from '../components/ProductDetailsPage/ScrollImages.tsx';
function ProductDetailsPage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  const {product} = route.params;
  const [counter, setCounter] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState('L');
  const [selectedColor, setSelectedColor] = React.useState('#FFF');
  const {favorites, addFavorite, removeFavorite} = favoriteStore();
  let isFavorite = favorites.includes(product.id);
  const {cart, removeProduct, addProduct} = cartStore();
  let isAdded = cart.find(item => item.id === product.id);

  return (
    <SafeAreaView style={styles.container}>
      <View className={'relative w-[full] h-[430px]'}>
        <ScrollImages images={product.images} />
        <View
          className={
            'absolute top-5 px-5 w-full flex-row justify-between items-center'
          }>
          <GoBack navigation={navigation} />
          <View className={'flex-row items-center gap-x-3'}>
            <TouchableOpacity
              onPress={() => {
                isFavorite
                  ? removeFavorite(product.id)
                  : addFavorite(product.id);
              }}
              className={
                'w-[35px] bg-white h-[35px] rounded-full justify-center items-center'
              }>
              <Heart color={isFavorite ? 'red' : 'black'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                isAdded
                  ? removeProduct(product.id)
                  : addProduct({
                      id: product.id,
                      size: selectedSize,
                      color: selectedColor,
                      count: counter,
                    });
              }}
              className={
                'w-[35px] bg-white h-[35px] rounded-full justify-center items-center'
              }>
              <Bag color={isAdded ? 'green' : 'black'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={styles.detailsContainer}
        className={'relative flex-1 bg-white rounded-t-[30px] p-5'}>
        <View className={'flex-row justify-between items-center'}>
          <View className={'gap-y-2'}>
            <Text className={'font-semibold text-lg text-black'}>
              {product.name}
            </Text>
            <Text className={'text-xs text-[#666666]'}>{product.desc}</Text>
            <ReviewStars reviews={product.reviews} />
          </View>
          <View className={'gap-y-2'}>
            <Counter value={counter} onChange={setCounter} />
            <Text className={'text-xs font-semibold text-black'}>
              Available in stock
            </Text>
          </View>
        </View>

        <View className={'mt-1 flex-row items-center justify-between'}>
          <View>
            <Text className={'text-base text-black font-semibold mb-3'}>
              Size
            </Text>
            <Sizes size={selectedSize} setSize={setSelectedSize} />
          </View>
          <Colors
            color={selectedColor}
            setColor={setSelectedColor}
            allColors={product.availableColors}
          />
        </View>

        <View className={'mt-2'}>
          <Text className={'font-semibold text-base text-black'}>
            Description
          </Text>
          <Text className={'text-xs text-[#666666] mt-1'}>
            {product.longDesc}
          </Text>
        </View>

        <View className={'flex-row mt-4 w-full items-center justify-between'}>
          <View>
            <Text className={'text-[9px]'}>Total Price</Text>
            <Text className={'font-bold text-lg text-black mt-[-8px]'}>
              ${product.price * counter}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              isAdded
                ? removeProduct(product.id)
                : addProduct({
                    id: product.id,
                    size: selectedSize,
                    color: selectedColor,
                    count: counter,
                  });
            }}
            className={
              'flex-row items-center justify-center gap-x-2 h-12 w-[200px] bg-black rounded-[30px]'
            }>
            <Bag color={'white'} size={16} />
            <Text className={'text-white text-base font-semibold'}>
              {isAdded ? 'Remove from cart' : 'Add to cart'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // paddingTop: StatusBar.currentHeight || 20,
  },
  detailsContainer: {
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
export default ProductDetailsPage;
