import React from 'react'
import { StyleSheet, View } from 'react-native'

import Title from '../Calculator/Title'
import Form from '../Calculator/Form'

export default function Time() {
  return (
    <View style={styles.container}>
      <Title/> 
      <Form/>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'orange',
    paddingTop: 80,
  },
});