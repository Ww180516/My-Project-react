import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Home from './src/pages/Home';
import Time from './src/pages/Time'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Time" component={Time} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

