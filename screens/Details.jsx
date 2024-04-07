import { View, Text,SafeAreaView,Image,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import Line from '../components/Line'
// import MapView from 'react-native-maps';
import Form from '../components/Form';

export default function Details({route, navigation}) {
    const [data, setData] = useState(null)
    const {id} = route.params;
    // console.log("id: "+id)
    const [type,setType] = useState('')
    const [name,setName] = useState('')
    const [location,setLocation] = useState('')
    const [state,setState] = useState('')
    const [desc,setDesc] = useState('')
    const [rate,setRate] = useState('')
    const [beds,setBeds] = useState(0)
    const [bath,setBath] = useState(0)
    const [sqft,setSQFT] = useState(0)
    const [img,setImg] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        
        async function getProperty()
        {
            
            //await setLoading(true)
            const res = await fetch('https://next-property-pulse-eight.vercel.app/api/properties/'+id);
            const dataz = await res.json()
            const newData =  dataz.property

            setType(newData.type)
            setName(newData.name)
            setLocation(newData.location)
            setDesc(newData.description)
            setRate(newData.rates)
            setBeds(newData.beds)
            setBath(newData.baths)
            setSQFT(newData.square_feet)
            setImg(newData.images[0])

            //await setLoading(false);
            
            
        }
        
        setTimeout(()=>{
            setLoading(true)
        },1500)
        

        getProperty();
        
        
    },[])

   if(loading){
    return (
        <ScrollView className="bg-blue-100 flex-1 space-y-5">
        <Image className="w-[auto] h-[200px]" source={{uri:img}}/>
          
          <View className="flex justify-center items-center mx-6 p-10 mt-5 rounded-lg bg-white space-y-4">
            <Text className="text-sm font-bold">{type}</Text>
            <Text className="text-3xl font-bold text-center">{name}</Text>
            <Text className="text-red-500">
                {/* 120 Tremont Street Boston, MA */}
                {location.street+", "+location.city+", "+location.state}
            </Text>
            <TouchableOpacity className="text-white bg-black w-full  font-medium rounded-lg  px-5 py-2.5 me-2 mb-2">
                <Text className="text-white text-center">Rates & Options</Text>
            </TouchableOpacity>
            {/* <Text className="font-medium ">Nightly</Text> */}
            <Line/>
            <View className="flex flex-row items-center space-x-4 border-b border-gray-200">
                <Text className="text-lg">Weekly</Text>
                <Text className="text-blue-500 text-2xl font-medium">${JSON.stringify(rate.weekly)}</Text>
            </View>
            <View className="flex flex-row items-center space-x-4">
                <Text className="text-lg">Monthly</Text>
                <Text className="text-blue-500 text-2xl font-medium">${JSON.stringify(rate.monthly)}</Text>
            </View>
          </View>
    
          <View className="flex justify-center items-center mx-6 p-10 mt-5 rounded-lg bg-white space-y-4">
            <Text className="text-xl font-bold">Description & Details</Text>
            <View className="flex flex-row items-center space-x-3">
            <View className="flex flex-row justify-center items-center space-x-4">
                <Text>Beds</Text>
                <Text>{beds}</Text>
                <Text>|</Text>
            </View>
            <View className="flex flex-row justify-center items-center space-x-4">
                <Text>Baths</Text>
                <Text>{bath}</Text>
                <Text>|</Text>
            </View>
            <View className="flex flex-row justify-center items-center space-x-4">
                <Text>Sqft:</Text>
                <Text>{sqft}</Text>
            </View>
            </View>
            <View>
                <Text>{desc}</Text>
            </View>
          </View>
    
         
          <View className="flex mx-6 p-10  rounded-lg bg-white space-y-4">
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
    
          <View className="flex mx-6 p-10 mb-4 rounded-lg bg-white">
            <Form/>
          </View>
        </ScrollView>
    )
   }else{
    return(
        <View className="flex-1 justify-center items-center">
            <Text className="text-lg">Property data is loading...</Text>
        </View>
    )
   }
}