import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const  MaskElement =(props) =>
 <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 3.5, y: 0}} colors={['#FFFFFF','#FFFFFF00', '#FFFFFF00']} style={styles.linearGradient}>
 </LinearGradient>

var styles = StyleSheet.create({
 linearGradient: {

  height: `100%`,

//   alignSelf:'center',
//   position:"absolute",
//   justifyContent:'center',
//   alignContent:'center',
  width: `100%`,




 }
});