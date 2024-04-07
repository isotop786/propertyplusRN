import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PropertyCard({property}) {

    const navigation = useNavigation();

    // console.log(property.images[0])

  return (
    <View className="max-w-sm w-full my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <TouchableOpacity>
        <Image className="rounded-t-lg w-[auto] h-[200px]" source={{uri:property.images[0]}}/>
      </TouchableOpacity>
      <View className="p-5">
        <View className="flex flex-row justify-between items-center mb-2">
            <Text>{property.type}</Text>
            {property.rates.monthly ? (<Text className="font-bold px-2">{property.rates.monthly}/Month</Text>) :
            (<Text className="font-bold px-2">{property.rates.weekly}/Week</Text>)
            }
            
        </View>
        <TouchableOpacity>
            <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{property.name}</Text>
        </TouchableOpacity>
        {/* <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        </Text> */}
        <View className="flex flex-row justify-around items-center mb-2">
            <View className="flex flex-row justify-center items-center">
                <Text><FontAwesome6 name="bed" size={20} color="green" /></Text>
                <Text> {property.beds} Beds</Text>
            </View>
            <View className="flex flex-row justify-center items-center">
                <Text><FontAwesome6 name="bath" size={20} color="#555" /></Text>
                <Text>{property.baths} Baths</Text>
            </View>
            <View className="flex flex-row justify-center items-center">
                <Text><FontAwesome6 name="ruler" size={20} color="#344" /></Text>
                <Text>{property.square_feet} sqft</Text>
            </View>   
        </View>

        <TouchableOpacity 
         onPress={()=> navigation.navigate('PropertyDetails',{
            id:property._id
         })}
        >
            <Text className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}