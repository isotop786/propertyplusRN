import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Icon ,Text, View ,Button, TextInput,SafeAreaView,Image,
TouchableOpacity, ScrollView
} from 'react-native';
import React,{useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'


export default function Home({navigation}) {
  const [text,setText] = useState('')
  const [number,setNumber] = useState(1)
  const [selected, setSelected] = React.useState("");

  const data = [
    {key:'1', value:'Rent', },
    {key:'3', value:'Mortges'},
    {key:'4', value:'Lease', disabled:true},
    {key:'5', value:'Buy'},
]

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-600 ">
      <View className="mb-8"></View>
      <Image className="w-10 h-10 mb-12" source={{uri:'https://next-property-pulse-eight.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.4b24f69b.png&w=128&q=75'}}/>
      <Text className="text-white text-3xl font-bold px-2">
        Find The Perfect 
      </Text>
      <Text className="text-white text-3xl font-bold mb-1 ">
        Rental 
      </Text>
      <Text className="text-white text-[15px] py-3">Discover the perfect property that suits your needs</Text>

      <TouchableOpacity 
       onPress={()=> navigation.navigate('Properties')}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-black bg-yellow-600 rounded-lg">
             <Text className="text-white uppercase">Browse All Properties</Text>
      </TouchableOpacity>


     <View className="w-[360px] py-4">
     <TextInput
        
        onChangeText={(e)=>{setText(e.target.value)}}
        value={text}
        className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder='Enter Location (City, State, Zip, etc)'
      />

      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        className="bg-gray-50 border border-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        inputStyles={{
          color:"#333"
        }}
        dropdownTextStyles={{
          color:"#555"
        }}
        dropdownStyles={{
          borderColor:"#fff",
          backgroundColor:"#fff"
        }}
        boxStyles={{
          backgroundColor:"#fff"
        }}
        onSelect={(e)=> alert(selected)}
      />
   
     </View>

     <ScrollView className="px-2 space-y-2 flex flex-col ">


      <View className="max-w-sm p-5 bg-blue-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">For Renters</Text>
          <Text className="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">Find your dream rental property, Bookmark property and contact</Text>
          <TouchableOpacity 
           onPress={()=> navigation.navigate('Properties')}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg">
              <Text className="text-white">Browse Properties</Text>
          </TouchableOpacity>
      </View>
      <View className="max-w-sm p-6 bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">For Property Owners</Text>
          <Text className="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">List your property and reach potential tenants. Rent as an airbnb or long term</Text>
          <TouchableOpacity 
           onPress={()=> navigation.navigate('AddProperty')}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Text className="text-white">Add Property</Text>
          </TouchableOpacity>
      </View>


     </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

