import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface CategoryProps {
    category: string;
    imageUrl: string;
}

export default function Category({category, imageUrl}: Readonly<CategoryProps>) {
    return (
        <View 
            style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 20
                }}
            >
                {category}
            </Text>
            <Image source={{uri: imageUrl}}
                style={styles.categoryImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 70,
        height: 70,
        borderRadius: 99
    }
})