import React from 'react';
import { StyleSheet } from 'react-native';
import MaskedView from '@react-native-community/masked-view';

export  const MaskedViewPlus=({element, children}) => <MaskedView
 style={styles.container}
 maskElement={element}
>
 {children}
</MaskedView>

var styles = StyleSheet.create({
 container: {
    height: `100%`,
    //   alignSelf:'center',
      position:"absolute",
      backgroundColor:"#fff",
    //   justifyContent:'center',
    //   alignContent:'center',
      width: `100%`,
  flexDirection: 'column',

 }
});