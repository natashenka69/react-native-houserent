import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon, HeartIcon, GlobeAltIcon, CurrencyDollarIcon, TagIcon, EllipsisVerticalIcon } from 'react-native-heroicons/solid';
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins"
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated'

export default function InfoScreen(props) {
    const navigation = useNavigation()
    const item = props.route.params

    const [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_600SemiBold
    });
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }

  return (
    <View className="flex-1 bg-white">

      <View className="">
      <Image style={{width: wp(100), height: wp(100)}} source={item.image} className="mx-auto"/>
      <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="p-2 rounded-full ml-4 absolute mt-4"
                style={{backgroundColor: "rgba(0,0,0,10)"}}
            >
                <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity
                className="p-2 rounded-full right-4 absolute mt-4"
                style={{backgroundColor: "rgba(0,0,0,10)"}}
            >
                <EllipsisVerticalIcon size={wp(7)} strokeWidth={4} color="white"/>
            </TouchableOpacity>
      </View>

      <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="items-center bg-white -mt-12">
        <Animated.Text entering={FadeInDown.duration(900)} style={{fontSize: wp(6), fontFamily: "Poppins_600SemiBold"}} className="mt-4">{item.title}</Animated.Text>
        <Animated.Text entering={FadeInDown.delay(200).duration(900)} className="mx-4 mt-2" style={{fontSize: wp(3.7), fontFamily: "Poppins_400Regular"}}>{item.description}</Animated.Text>
      </View>
      <Animated.View entering={FadeInDown.delay(500).duration(900)} className="flex-row justify-between mx-4 mt-10">
          <View className="text-center space-x-1 flex-row items-start">
          <GlobeAltIcon size={wp(7)} color="blue" strokeWidth={3}/>
          <View className="flex">
          <Text style={{fontSize: wp(3.4), fontFamily: "Poppins_400Regular"}}>{item.location}</Text>
          <Text style={{fontFamily: "Poppins_600SemiBold"}} className="tracking-wide">Location</Text>
          </View>
          </View>
          <View className="text-center space-x-1 flex-row items-start ml-2 mr-1">
          <CurrencyDollarIcon size={wp(7)} color="green" strokeWidth={3}/>
          <View className="flex">
          <Text style={{fontSize: wp(3.4), fontFamily: "Poppins_400Regular"}}>{item.price}</Text>
          <Text style={{fontFamily: "Poppins_600SemiBold"}} className="tracking-wide">Price</Text>
          </View>
          </View>
          <View className="text-center space-x-2 flex-row items-start">
          <TagIcon size={wp(7)} color="purple" strokeWidth={3}/>
          <View className="flex">
          <Text style={{fontSize: wp(3.4), fontFamily: "Poppins_400Regular"}}>{item.pets}</Text>
          <Text style={{fontFamily: "Poppins_600SemiBold"}} className="tracking-wide">Pets</Text>
          </View>
          </View>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(700).duration(900)} className="flex-1 justify-end mb-8">
        <TouchableOpacity className="items-center bg-black mx-auto rounded-xl px-8 py-3">
          <Text  style={{fontSize: wp(4), fontFamily: "Poppins_400Regular"}} className="text-white">Open Chat with Owner</Text>
        </TouchableOpacity>
        </Animated.View>
    </View>
  )
}