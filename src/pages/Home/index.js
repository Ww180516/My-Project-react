import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Imc ({ navigation }) {
  return (
    <View>
      <Text>IMC CALCULATOR</Text>

      <Button
      title="IMC CALCULATOR"
      onPress={ () => navigation.navigate ('Time')}
      />
    </View>
  );
}