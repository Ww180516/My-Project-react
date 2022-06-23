import React from 'react'
import { View, Text, Button, ImageBackground } from 'react-native'

export default function Home ({ navigation }) {
  return (
    <View style={{justifyContent:"center", alignItems:"center"}}>
      <ImageBackground source={require('../../../assets/Welfare.png')}
      style={{width:'100%', height:200}}>     
    

      </ImageBackground>
      <Button
      title="IMC CALCULATOR"
      onPress={ () => navigation.navigate ('Time')}
      />
    </View>
  
  );
}