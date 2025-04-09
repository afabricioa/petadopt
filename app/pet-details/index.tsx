import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View } from 'react-native';

import PetInfo from '@/components/PetDetails/PetInfo';
import PetSubInfo from './PetSubInfo';

export default function PetDetails() {
  const pet = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: ''
    })
  }, []);

  return (
    <View>
      {/* pet info */}
      <PetInfo pet={pet}/>
      {/* pet propriedadsa */}
      { pet && <PetSubInfo age={Number(pet.age)} breed={pet.breed.toString()} gender={pet.genre.toString()} weight={Number(pet.weight)} /> }
      {/* about */}
      {/* me adote */}
    </View>
  )
}