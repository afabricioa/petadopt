import React from 'react';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Stack } from 'expo-router';
import { tokenCache } from '@/cache'

export default function TabLayout() {

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack>
          <Stack.Screen name='index' />
          <Stack.Screen name='(tabs)' 
            options={{
              headerShown: false
            }}/>
          <Stack.Screen name='login/index' 
            options={{
              headerShown: false
            }}
          />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
