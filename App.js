import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Home from './src/pages/Home';
import Time from './src/pages/Time'; 
import Stopwatch from './src/pages/Stopwatch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Time" component={Time} />
          <Stack.Screen name="Stopwatch" component={Stopwatch} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

