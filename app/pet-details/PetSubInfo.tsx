import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '@/constants/Colors';

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
        <View style={{width: '48%', marginBottom: 16}}>
            <View style={styles.infoPet}>
                <Ionicons name='calendar' size={40} color={Colors.GRAY}/>
                <View>
                    <Text style={styles.label}>Idade</Text>
                    <Text style={styles.value}>{`${age} anos`}</Text>
                </View>
            </View>
        </View>
        <View style={{width: '48%', marginBottom: 16}}>
            <View style={styles.infoPet}>
                <Ionicons name='paw' size={40} color={Colors.GRAY}/>
                <View>
                    <Text style={styles.label}>Raça</Text>
                    <Text style={styles.value}>{breed}</Text>
                </View>
            </View>
        </View>
        <View style={{width: '48%', marginBottom: 16}}>
            <View style={styles.infoPet}>
                <Ionicons name='male-female' size={40} color={Colors.GRAY}/>
                <View>
                    <Text style={styles.label}>Gênero</Text>
                    <Text style={styles.value}>{gender}</Text>
                </View>
            </View>
        </View>
        <View style={{width: '48%', marginBottom: 16}}>
            <View style={styles.infoPet}>
                <FontAwesome5 name='weight' size={40} color={Colors.GRAY}/>
                <View>
                    <Text style={styles.label}>Peso</Text>
                    <Text style={styles.value}>{`${weight}kg`}</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    infoPet: {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      borderWidth: 1, borderColor: '#000', 
      borderRadius: 5, 
      padding: 10,
    },
  
    label: {
      fontSize: 14, 
      color: Colors.GRAY
    },
  
    value: {
      fontSize: 16,
      fontWeight: 500
    }
})
