import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { houseParts } from '../utils/data';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins"


export default function House() {

const navigation = useNavigation()

  return (
    <View>
    {
        houseParts.map((item, index) => {
            return <HouseCard navigation={navigation} item={item} key={index}/>
        })
        }
    
    </View>
  )
}

const HouseCard = ({item, navigation}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
    return (
            <TouchableOpacity style={{width: wp(96), height: wp(41)}} onPress={() => navigation.navigate("Info", {...item})}>
            <View className="bg-white rounded-xl mt-4 mx-2 flex-row justify-between items-center">
            <View className="ml-4 mt-2 mb-2">
              <Text style={{fontSize: wp(3.7), fontFamily: "Poppins_600SemiBold"}} className="">{item.title}</Text>
              <Text style={{fontSize: wp(3.5), fontFamily: "Poppins_400Regular"}} className="mb-12">{item.homeDescription}</Text>
              <Text style={{fontSize: wp(3.4), fontFamily: "Poppins_600SemiBold"}} className="text-[15px]">{item.price}</Text>
            </View>
          <View className="mr-4 mt-4 mb-4">
          <Image   style={{width: wp(45), height: wp(30)}} source={item.image} resizeMode="contain" className="rounded-xl"/>
          </View>
          </View>
          </TouchableOpacity>
    )
}