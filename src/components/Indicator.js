import * as React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from '../infrastructure/theme/colors';


const Indicator = ({isShowIndicator}) => (


    <>
      {isShowIndicator == true ?
    <View style={{position:'absolute',alignSelf:'center',alignItems:'center',justifyContent:'center',top:40}}>
  <ActivityIndicator animating={true} color={"#50D8D7"} size={32} />
   <Text style={{color:"#50D8D7",fontFamily: "TRYFinder-Light"}}>LOADING</Text>
    </View>
    : null}
    </>

);

export default Indicator;