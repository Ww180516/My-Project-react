import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import db from './db';
import Imc from './src/pages/Imc';
import Time from './src/pages/Time'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="db">
          <Stack.Screen name="db" component={db} />
          <Stack.Screen name="Imc" component={Imc} />
          <Stack.Screen name="Time" component={Time} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

