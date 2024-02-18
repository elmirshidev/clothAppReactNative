//@ts-nocheck
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Campaign} from '../../types';

function CampaignComponent({
  campaign,
}: {
  campaign: Campaign;
}): React.JSX.Element {
  return (
    <View
      className={
        'relative bg-[#DCDCDC] w-[260px] h-[160px] rounded-[30px] mr-4'
      }>
      <View
        className={
          'absolute overflow-hidden right-0 rounded-[30px] w-2/5 h-full'
        }>
        <Image
          className={'h-full w-full object-cover'}
          source={campaign.image}
        />
      </View>
      <View className={'z-10 absolute left-3 top-3'}>
        <Text className={'text-black font-bold text-2xl'}>
          {campaign.title}
        </Text>
        <Text className={'text-black text-base'}>On everything today</Text>
        <Text className={'text-[#666666] mt-2 font-semibold text-xs'}>
          With code: {campaign.code}
        </Text>
        <TouchableOpacity
          className={
            'bg-black mt-3 rounded-[30px] h-[25px] w-[70px] justify-center items-center'
          }>
          <Text className={'text-[10px] font-bold text-white'}>Get Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CampaignComponent;
