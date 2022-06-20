import React from 'react'
import { View, Text, Button} from 'react-native'

export default function Imc ({ navigation }) {
  return (
    <View>
      <Text>Imc</Text>
      <Button
      title="Time"
      onPress={ () => navigation.navigate ('Time')}
      />

      <Button
      title="Mudar Titulo"
      onPress={ () => navigation.setOptions({ title: 'INICIO'})}
      />
    </View>
  );
}