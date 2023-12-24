import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import InfoScreen from "../screens/InfoScreen"


const Stack = createNativeStackNavigator()



export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnBoardingScreen}/>
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name="Info" options={{headerShown: false}} component={InfoScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}