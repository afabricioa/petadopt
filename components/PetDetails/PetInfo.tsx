import React from 'react';
import { View, Text, Image } from 'react-native';

import Colors from '@/constants/Colors';
import MarkFav from '../MarkFav';

export default function PetInfo({pet}: any) {

    return (
      <View>
        <Image source={{uri: pet.imageUrl}}
          style={{
            width: "100%",
            height: 300,
            objectFit: 'cover'
          }}
        />
        <View
          style={{
            padding: 20
          }}
        >
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
              <Text style={{fontSize: 27}}>{pet?.name}</Text>
              <Text style={{fontSize: 16, color: Colors.GRAY}}>{pet?.address}</Text>
            </View>
            <MarkFav id={pet?.id} />
          </View>
        </View>
      </View>
    )
}