// @ts-nocheck
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CheckIcon} from 'react-native-heroicons/solid';
function Colors({color, allColors, setColor}): React.JSX.Element {
  return (
    <View
      style={styles.container}
      className={'bg-white rounded-[30px] items-center w-8 h-[130px] py-1'}>
      <View className={'flex gap-y-3'}>
        {allColors.map((c, i) => (
          <TouchableOpacity
            onPress={() => setColor(c)}
            style={{
              backgroundColor: c,
              borderColor: c === '#FFF' ? '#CCCCCC' : c,
            }}
            className={
              'w-5 h-5 justify-center items-center rounded-full border-[1px]'
            }
            key={i}>
            {color === c && (
              <CheckIcon size={14} color={c === '#FFF' ? 'black' : 'white'} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
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
export default Colors;
