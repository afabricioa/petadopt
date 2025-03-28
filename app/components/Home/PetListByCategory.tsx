import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/Config/FirebaseConfig';
import Colors from '@/constants/Colors';
import Category from './Category';
import PetItem from './Pet';

interface PetListByCategoryProps {
    selectedCategory: string;
}

export default function PetListByCategory() {
    const [pets, setPets] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('Cachorro');
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        GetPetList(selectedCategory);
    }, [selectedCategory]);

    const GetPetList = async (value: string) => {
        setLoader(true);
        setPets([]);
        const queryPet = query(collection(db, 'Pets'), where('category', '==', value));
        
        const snapShotPet = await getDocs(queryPet);

        snapShotPet.forEach((doc) => {
            console.log(doc.data());
            setPets(pets => [...pets, doc.data()]);
        });
        setLoader(false);
    }

    return (
        <View>
            <Category category={(value: string) => setSelectedCategory(value)}/>
            <FlatList 
                style={{
                    marginTop: 10
                }}
                contentContainerStyle={{
                    gap: 15
                }}
                data={pets}
                horizontal
                showsHorizontalScrollIndicator={true}
                refreshing={loader}
                onRefresh={() => GetPetList('Cachorro')}
                renderItem={({item, index}) => (
                    <PetItem pet={item}/>
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