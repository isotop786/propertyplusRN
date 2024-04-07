// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Properties from './screens/Properties';
import AddProperty from './screens/AddProperty';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options={{
            headerShown:false,
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
        />
        <Stack.Screen name="Properties" component={Properties}/>
        <Stack.Screen name="PropertyDetails" component={Details}/>
        <Stack.Screen name="AddProperty" component={AddProperty}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;