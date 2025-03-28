import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

interface PetItemProps {
    pet: any;
}

export default function PetItem({pet}: Readonly<PetItemProps>) {
    return (
        <View
            style={{
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 10
            }}
        >
            <Image 
                source={{uri: pet?.imageUrl}}
                style={{
                    width: 150,
                    height: 135,
                    objectFit: 'cover'
                }}
            />
            <Text
                style={{
                    fontSize: 17
                }}
            >{pet.name}</Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: Colors.GRAY
                    }}
                >{pet.breed}</Text>
                <Text
                    style={{
                        fontSize: 11,
                        backgroundColor: Colors.SECONDARY,
                        borderRadius: 10,
                        paddingHorizontal: 7
                    }}
                >{pet.age} anos</Text>
            </View>
        </View>
    )
}