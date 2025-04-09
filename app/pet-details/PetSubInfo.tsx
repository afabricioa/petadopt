import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '@/constants/Colors';
import PetSubInfoCard from './PetSubInfoCard';

interface PetSubInfoProps {
    age: number;
    breed: string;
    gender: string;
    weight: number;
}

export default function PetSubInfo({age, breed, gender, weight}: Readonly<PetSubInfoProps>) {
  return (
    <View
        style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20
        }}
    >
        <PetSubInfoCard title="Idade" info={`${age} anos`} icon="calendar"/>
        <PetSubInfoCard title="Raça" info={breed} icon="paw"/>
        <PetSubInfoCard title="Gênero" info={gender} icon="male-female"/>
        <PetSubInfoCard title="Peso" info={`${weight}kg`} isFontAwesome={true} faIcon="weight" />
    </View>
  )
}
