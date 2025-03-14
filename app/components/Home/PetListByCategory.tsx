import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Category from './Category';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/app/Config/FirebaseConfig';

export default function PetListByCategory() {
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
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 15,
                alignItems: 'center',
                alignContent: 'center'
            }}
        >
            { categories?.map((category) => (
                    <Category key={category.id} category={category.name} imageUrl={category.imageUrl}/>
                )) 
            }
        </View>
    )
}