//@ts-nocheck
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const sW = Dimensions.get('window').width;

function ScrollImages({images}: {images: string[]}): React.JSX.Element {
  const [active, setActive] = React.useState(0);
  const scrollViewRef = React.useRef(null);
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const pageNum = Math.floor(contentOffsetX / viewSize);
    setActive(pageNum);
  };
  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={sW}
        decelerationRate={'fast'}
        className={'h-full w-full bg-black'}>
        {images.map((i, idx) => (
          <Image
            key={idx}
            style={{width: sW}}
            className={'h-[430px]'}
            source={i}
          />
        ))}
      </ScrollView>
      <View style={{width: sW}} className={'justify-center items-center'}>
        <View className={'absolute bottom-8 flex-row gap-x-3'}>
          {images.map((i, idx) => (
            <TouchableOpacity
              key={idx}
              className={`${
                idx === active ? 'bg-black' : 'bg-white'
              } w-[10px] h-[10px] rounded-full`}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
export default ScrollImages;
