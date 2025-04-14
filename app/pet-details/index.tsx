import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PetInfo from '@/components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '@/constants/Colors';

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
      { pet && (
        <View>
          <ScrollView>
            <PetInfo pet={pet}/>
            <PetSubInfo age={Number(pet?.age)} breed={pet?.breed?.toString()} gender={pet.genre.toString()} weight={Number(pet.weight)} />
            <AboutPet pet={pet}/>
            <OwnerInfo pet={pet}/>
            <View style={{height: 70}}></View>
          </ScrollView>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.adoptButton}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 700
                }}
              >Me Adote</Text>
            </TouchableOpacity>
          </View>
        </View>
          
      ) }
    </View>
  )
}

const styles = StyleSheet.create({
  adoptButton: {
    padding: 15,
    backgroundColor: Colors.PRIMARY
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  }
});