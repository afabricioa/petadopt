import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-expo';
import { db } from '@/Config/FirebaseConfig';

import Shared from '@/Shared/Shared'
import PetItem from '@/components/Home/Pet';

export default function Favorite() {
  const { user } = useUser();
  const [favoriteIds, setFavoriteIds] = useState<any[]>([]);
  const [petData, setPetData] = useState<any[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setFavoriteIds([]);
    user && GetFavoriteList();
  }, []);

  const GetFavoriteList = async () => {
    setLoader(true);
    const result = await Shared.GetFavoriteList(user);
    setFavoriteIds(result?.favorites);
    setLoader(false);
    GetFavoritePetList(result?.favorites);
  }

  const GetFavoritePetList = async (favIds_: any) => {
    setPetData([]);
    const queryPets = query(collection(db, 'Pets'), where('__name__', 'in', favIds_));
    const snapshotPetList = await getDocs(queryPets);
    snapshotPetList.forEach((doc) => {
      const pet = {id: doc.id, ...doc.data()};
      setPetData(petData => [...petData, pet]);
    })
    setLoader(false);
  }

  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      <Text style={{
        fontSize: 30
      }}>
        Favoritos
      </Text>
      <FlatList
        numColumns={2}
        data={petData}
        onRefresh={GetFavoriteList}
        refreshing={loader}
        renderItem={({item, index}) => (
            <View style={{margin: 10}}>
              <PetItem key={item.id} pet={item} />
            </View>
        )}
    />
    </View>
  )
}