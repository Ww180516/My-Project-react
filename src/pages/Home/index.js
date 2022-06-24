import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home ({ navigation }) {
  return (
    <View>
      <Text> Home </Text>
      <Button
      title='Time'
      onPress={ () => navigation.navigate('Time')}
      />
      <Text> Home </Text>
      <Button
      title='Stopwatch'
      onPress={ () => navigation.navigate('Stopwatch')}
      />
    </View>

  );
}