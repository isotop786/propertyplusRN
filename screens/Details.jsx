import { View, Text,SafeAreaView,Image,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Line from '../components/Line'
import MapView from 'react-native-maps';
import Form from '../components/Form';

export default function Details() {
  return (
    <ScrollView className="bg-blue-100 flex-1 space-y-5">
    <Image className="w-[auto] h-[200px]" source={require('../assets/properties/a1.jpg')}/>
      
      <View className="flex justify-center items-center mx-6 p-10 mt-5 rounded-lg bg-white space-y-4">
        <Text className="text-sm font-bold">Apartment</Text>
        <Text className="text-3xl font-bold text-center">Boston Commons Retreat</Text>
        <Text className="text-red-500">
            120 Tremont Street Boston, MA
        </Text>
        <TouchableOpacity className="text-white bg-black w-full  font-medium rounded-lg  px-5 py-2.5 me-2 mb-2">
            <Text className="text-white text-center">Rates & Options</Text>
        </TouchableOpacity>
        <Text className="font-medium ">Nightly</Text>
        <Line/>
        <View className="flex flex-row items-center space-x-4 border-b border-gray-200">
            <Text className="text-lg">Weekly</Text>
            <Text className="text-blue-500 text-2xl font-medium">$1,100</Text>
        </View>
        <View className="flex flex-row items-center space-x-4">
            <Text className="text-lg">Monthly</Text>
            <Text className="text-blue-500 text-2xl font-medium">$4,200</Text>
        </View>
      </View>

      <View className="flex justify-center items-center mx-6 p-10 mt-5 rounded-lg bg-white space-y-4">
        <Text className="text-xl font-bold">Description & Details</Text>
        <View className="flex flex-row items-center space-x-3">
        <View className="flex flex-row justify-center items-center space-x-4">
            <Text>Beds</Text>
            <Text>3</Text>
            <Text>|</Text>
        </View>
        <View className="flex flex-row justify-center items-center space-x-4">
            <Text>Baths</Text>
            <Text>2</Text>
            <Text>|</Text>
        </View>
        <View className="flex flex-row justify-center items-center space-x-4">
            <Text>Sqft:</Text>
            <Text>1500</Text>
        </View>
        </View>
        <View>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ab soluta tempora quisquam sed magnam aut repudiandae dolore laborum, blanditiis molestiae alias beatae sit optio quia facilis maiores cupiditate impedit.</Text>
        </View>
      </View>


      <View className="flex justify-center items-center mx-6 p-0 h-44 rounded-lg">
      <MapView className="w-full h-full"
        initialRegion={{
            latitude: 42.3601,
            longitude: -71.0589,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        />
      </View>
     
      <View className="flex mx-6 p-10 mb-4 rounded-lg bg-white space-y-4">
        <Text className="font-bold text-xl">Amenities</Text>

        <View className="text-left">
            <Text>Wifi</Text>
            <Text>Full Kitchen</Text>
            <Text>Washer & Dryer</Text>
            <Text>Free Parking</Text>
            <Text>Hot Tub</Text>
            <Text>24/7 Security</Text>
            <Text>Wheelchair Accessible</Text>
            <Text>Dishwasher</Text>
            <Text>Gym / Fitness Center</Text>
            <Text>Air Conditioning</Text>
            <Text>Balcony / Patio</Text>
        </View>

      </View>

      <View className="flex mx-6 p-10 mb-4 rounded-lg bg-white space-y-4">
        <Form/>
      </View>
    </ScrollView>
  )
}