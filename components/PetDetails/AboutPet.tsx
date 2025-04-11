import Colors from '@/constants/Colors';
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

export default function AboutPet({pet}: any) {
    const [readMore, setReadMore] = useState(true);
    return (
        <View
            style={{
                padding: 20
            }}
        >
            <Text style={{fontSize: 20}}>Sobre {pet?.name}</Text>
            <Text
                numberOfLines={readMore ? 3 : 10}
                style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: 10,
                    borderRadius: 5,
                    fontSize: 16,
                    textAlign: "justify"
                }}
            >{pet?.description}</Text>
            <Pressable
                onPress={() => setReadMore(!readMore)}
            >
                <Text 
                    style={{
                        fontSize: 14,
                        color: Colors.SECONDARY
                    }}
                >
                    { readMore ? "Ler mais" : "Ler menos" }
                </Text>
            </Pressable>
        </View>
    )
}
