import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from './src/perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil></Perfil>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  }
})
