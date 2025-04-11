import Colors from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function OwnerInfo({pet}: any) {
    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20}}>
                <Image source={{uri: pet?.userImage}} style={{width: 60, height: 60, borderRadius: 99}}/>
                <View>
                    <Text
                        style={{
                            fontSize: 18
                        }}
                    >{pet?.owner}</Text>
                    <Text style={{color: Colors.GRAY}}>Dono</Text>
                </View>
            </View>
            <Ionicons name='send-sharp' size={30}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: Colors.WHITE
    }
})