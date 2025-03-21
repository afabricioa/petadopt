import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '@/app/Config/FirebaseConfig';
import { query, collection, getDocs } from 'firebase/firestore';
import Colors from '@/constants/Colors';

interface CategoryProps {
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function Category({selectedCategory, setSelectedCategory}: Readonly<CategoryProps>) {
    const [categories, setCategories] = useState<any[]>([]);

    const queryCategory = query(collection(db, 'Category'));

    useEffect(() => {
        GetCategories();
    }, [])

    const GetCategories = async () => {
        setCategories([]);

        const snapShot = await getDocs(queryCategory);

        snapShot.forEach((doc) => {
            setCategories(categories => [...categories, doc.data()]);
        });
    }

    return (
        <View 
            style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Text
                style={{fontSize: 20}}
            >
                Categoria
            </Text>
            <FlatList
                data={categories}
                numColumns={4}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        onPress={() => setSelectedCategory(item.name)}
                    > 
                        <View style={styles.categoryContainer}>
                            <Image source={{uri: item?.imageUrl}}
                                style={[
                                    styles.categoryImage,
                                    selectedCategory==item.name&&styles.selectedCategoryContainer
                                ]}
                            />
                        </View>
                        <Text
                            style={{textAlign: 'center'}}
                        >{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 70,
        height: 70,
        borderRadius: 99,
        borderWidth: 1,
        borderColor: Colors.PRIMARY
    },

    categoryContainer: {
        padding: 10,
        alignItems: 'center',
    },

    selectedCategoryContainer: {
        borderColor: Colors.SELECTED,
        borderWidth: 3
    }
})