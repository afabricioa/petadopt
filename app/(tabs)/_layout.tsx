import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY
      }}
    >
        <Tabs.Screen name='home'
          options={{
            title: "Início",
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name='home' size={24} color={color} />
          }}
        />
        <Tabs.Screen name='favorite'
          options={{
            title: 'Favoritos',
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name='heart' size={24} color={color} />
          }}
        />
        <Tabs.Screen name='inbox'
          options={{
            title: 'Mensagens',
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name='chatbox' size={24} color={color} />
          }}
        />
        <Tabs.Screen name='profile'
          options={{
            title: 'Perfil',
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name='person' size={24} color={color} />
          }}
        />
    </Tabs>
  )
}