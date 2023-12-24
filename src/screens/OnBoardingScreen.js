import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';

export default function OnBoardingScreen() {
    const navigation = useNavigation()

    const handleDone = () => {
        navigation.navigate("Home")
    }

    
  return (
    <View className="flex-1 bg-white">
          <StatusBar backgroundColor="black"/>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      containerStyles={{paddingHorizontal: 15}}
        pages={[
        {
        backgroundColor: '#8F138D',
        image: (
            <View>
            <LottieView className="w-[400px] h-[400px]" source={require("../../assets/animation/texting.json")} autoPlay loop />
            </View>
        ),
        title: 'Explore Diverse Listings',
        subtitle: 'From cozy apartments to spacious villas, find a home that suits your lifestyle.',
    },
    {
        backgroundColor: '#a78bfa',
        image: (
            <View>
            <LottieView className="w-[400px] h-[400px]" source={require("../../assets/animation/handshake.json")} autoPlay loop />
            </View>
        ),
        title: 'Real-Time Availability',
        subtitle: 'Save time and avoid disappointment. Our app provides real-time updates on property availability, making sure you are always in the know.',
    },
    {
        backgroundColor: '#741BB1',
        image: (
            <View>
            <LottieView className="w-[400px] h-[400px]" source={require("../../assets/animation/sweethome.json")} autoPlay loop />
            </View>
        ),
        title: 'Vivid Visuals',
        subtitle: 'Get a real feel for your potential new home with high-quality images and virtual tours.',
    },
  ]}
/>
    </View>
  )
}
