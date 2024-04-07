import React,{useEffect,useState} from 'react'
import {SafeAreaView, View, Text, TouchableOpacity,ScrollView} from 'react-native'
import PropertyCard from '../components/PropertyCard'


const Properties = () => {
    const properties = [
        {id:1, title:"Boston Commons Retreat",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint itaque eveniet corrupti aspernatur quo sed, nobis, possimus recusandae rerum modi et ipsam autem! Quasi itaque iure cum id reiciendis",
        bed:2, bath:1, sqft:1500,city:"Boston",state:"MA",imgUrl:"https://next-property-pulse-eight.vercel.app/_next/image?url=%2Fimages%2Fproperties%2Fa1.jpg&w=1920&q=75",type:"Aperment"
        },
        {id:2, title:"Boston Commons Retreat",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint itaque eveniet corrupti aspernatur quo sed, nobis, possimus recusandae rerum modi et ipsam autem! Quasi itaque iure cum id reiciendis",
        bed:2, bath:1, sqft:1500,city:"Boston",state:"MA",imgUrl:"https://next-property-pulse-eight.vercel.app/_next/image?url=%2Fimages%2Fproperties%2Fa1.jpg&w=1920&q=75"
        },
        {id:3, title:"Boston Commons Retreat",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint itaque eveniet corrupti aspernatur quo sed, nobis, possimus recusandae rerum modi et ipsam autem! Quasi itaque iure cum id reiciendis",
        bed:2, bath:1, sqft:1500,city:"Boston",state:"MA",imgUrl:"https://next-property-pulse-eight.vercel.app/_next/image?url=%2Fimages%2Fproperties%2Fa1.jpg&w=1920&q=75"
        },
    ]

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