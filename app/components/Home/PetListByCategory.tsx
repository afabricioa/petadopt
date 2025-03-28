import { FlatList, StyleSheet, View, Image, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/Config/FirebaseConfig';
import Colors from '@/constants/Colors';

interface PetListByCategoryProps {
    selectedCategory: string;
}

export default function PetListByCategory({ selectedCategory }: Readonly<PetListByCategoryProps>) {
    const [pets, setPets] = useState<any[]>([]);

    const queryPetsByCategory = query(collection(db, 'Pets'), where("category", "==", selectedCategory))

    useEffect(() => {
        GetPetsByCategory();
    }, [selectedCategory])

    const GetPetsByCategory = async () => {
        setPets([]);

        const snapShot = await getDocs(queryPetsByCategory);

        snapShot.forEach((doc) => {
            setPets(pets => [...pets, doc.data()]);
        })
    }

    console.log(pets)
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 15,
                alignItems: 'center',
                alignContent: 'center'
            }}
        >
            <FlatList
                data={pets}
                style={{
                    display: 'flex',
                    flex: 1,
                    columnGap: 5
                }}
                numColumns={2}
                renderItem={({item, index}) => (
                    <View>
                        <View
                            style={styles.petCard}
                        >
                            <Image 
                                source={{uri: item?.imageUrl}}
                            />
                        </View>
                        <Text>
                            {item.name}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    petCard: {
        height: 200,
        width: 150,
        backgroundColor: Colors.PRIMARY,
    }
})