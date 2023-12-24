import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"
import House from '../components/House'
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {FadeInUp} from 'react-native-reanimated'



export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#e7e7e7]">
      <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 px-2">
      {/* Menu */}
      <View className="flex-row justify-between mx-4 mt-4">
        <Image source={require("../../assets/home/menu.png")} resizeMode="contain" className="w-[30px] h-[60px]"/>
        <Image source={require("../../assets/home/pikachu.png")} resizeMode="contain" className="mt-2 w-[50px] h-[50px] rounded-xl"/>
      </View>

      {/* Rent */}
      <View>
        <Text style={{fontFamily: "Poppins_600SemiBold", fontSize: wp(5.8)}} className="justify-center text-center font-medium mt-12">Rent a house of your dream!</Text>
        </View>

        {/* Search Bar */}
        <View className="mt-4 mx-6 mb-4">
          <View className="flex-row items-center bg-white rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={15} strokeWidth={3} color="black"/>
            <TextInput placeholder='Your house is waiting for you!'
            placeholderTextColor="gray"
            className="flex-1 text-base mb-1 pl-1 tracking-wider text-black"
            />
      </View>
    </View>
      {/* Text under Search Bar */}
      <View className="flex-row justify-between mx-4 items-center">
        <TouchableOpacity>
        <Text style={{fontFamily: "Poppins_600SemiBold", fontSize: wp(3.4)}} className="">All</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{fontFamily: "Poppins_400Regular", fontSize: wp(3.4)}}>Apartments</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{fontFamily: "Poppins_400Regular", fontSize: wp(3.4)}}>One floor</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{fontFamily: "Poppins_400Regular", fontSize: wp(3.4)}}>Two floors</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{fontFamily: "Poppins_400Regular", fontSize: wp(3.4)}}>With pool</Text>
        </TouchableOpacity>

      </View>

      {/* Houses */}
      <View className="mt-8">
        <Text style={{fontFamily: "Poppins_600SemiBold", fontSize: wp(5.4)}} className=" ml-4">Best Offers</Text>
        {/* House Card */}
    <Animated.View entering={FadeInUp.delay(200).duration(1000)}>
    <House />
    </Animated.View>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}