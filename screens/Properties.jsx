import React,{useEffect,useState} from 'react'
import {SafeAreaView, View, Text, TouchableOpacity,ScrollView} from 'react-native'
import PropertyCard from '../components/PropertyCard'


const Properties = () => {

    const [propertyData, setPropertyData] = useState([]);

    useEffect(()=>{
        async function fetchProperties(){
            const res = await fetch('https://next-property-pulse-eight.vercel.app/api/properties')
            const data = await res.json()

            // console.log(data)
            setPropertyData(data)
        }

        fetchProperties();
    },[])
   


  return (
    <ScrollView className="bg-blue-100 flex-1" contentContainerStyle={{
        alignItems:"center",
        justifyContent:"center"
    }} >
        {propertyData.length>0 && propertyData.map(property =>(
            <PropertyCard key={property._id} property={property}/>
        ))}
           
      
    </ScrollView>
  )
}

export default Properties