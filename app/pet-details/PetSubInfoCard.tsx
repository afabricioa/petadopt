import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface PetInfoSubCardProps {
    title: string;
    info: string;
    icon?: keyof typeof Ionicons.glyphMap;
    isFontAwesome?: boolean;
    faIcon?: string;
}

export default function PetSubInfoCard({title, info, icon, isFontAwesome, faIcon}: Readonly<PetInfoSubCardProps>) {
  return (
    <View style={{width: '48%', marginBottom: 16}}>
        <View style={styles.infoPet}>
            {
              isFontAwesome ? 
                <FontAwesome5 name={faIcon} size={40} color={Colors.PRIMARY}/> :
                <Ionicons name={icon} size={40} color={Colors.PRIMARY}/>
            }
            
            <View>
                <Text style={styles.label}>{title}</Text>
                <Text style={styles.value}>{info}</Text>
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
      borderRadius: 5, 
      padding: 10,
      backgroundColor: Colors.WHITE
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