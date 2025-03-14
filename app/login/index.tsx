import { View, Text, Image, Pressable } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'

import { useClerk, useSSO } from '@clerk/clerk-expo'

import Colors from '@/constants/Colors'

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {
  useWarmUpBrowser();
  const { signOut } = useClerk();
  const { startSSOFlow } = useSSO();

  const onPress = useCallback(async () => {
    try {
      await signOut();
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl: AuthSession.makeRedirectUri({path: '/(tabs)/home', scheme: 'myapp'}),
      })

      if(createdSessionId) {
        // setActive!({ session: createdSessionId })
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2))
    }
  }, [])

  return (
    <View>
      <Image source={require('./../../assets/images/login.png')} 
        style={{
            width: "100%",
            height: 450
        }}
      />
      <View
        style={{
            padding: 20,
            display: "flex",
            alignItems: "center"
        }}
      >
        <Text
            style={{
                fontSize: 30,
                textAlign: "center"
            }}
        >
            Quer fazer um novo amigo?
        </Text>
        <Text style={{fontSize: 18, marginTop: 20, textAlign: "center", color: Colors.GRAY}}>Vamos adotar um novo pet e viver uma vida feliz</Text>
        <Pressable 
            style={{
                padding: 14,
                marginTop: 75,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 14,
                width: "100%"
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    fontSize: 20,
                    textAlign: "center"
                }}
            >Começar</Text>
        </Pressable>
      </View>
    </View>
  )
}