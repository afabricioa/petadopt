import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db } from '../../Config/FirebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

interface Slider {
    name: string;
    imageUrl: string;
}

export default function Slider() {
    const [slidersList, setSlidersList] = useState<any[]>([]);

    useEffect(() => {
        GetSliders();
    }, []);

    const q = query(collection(db, 'Sliders'));

    const GetSliders = async () => {
        setSlidersList([]);
        const snapshot = await getDocs(q);

        snapshot.forEach((doc) => {
            setSlidersList(slidersList => [...slidersList, doc.data()]);
        })
    }

    return (
        <View
            style={{
                marginTop: 15
            }}
        >
            <FlatList
                data={slidersList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <View>
                        <Image source={{uri: item?.imageUrl}}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImage: {
        width: Dimensions.get('screen').width * 0.9,
        height: 160,
        borderRadius: 15,
        marginRight: 15
    }
})