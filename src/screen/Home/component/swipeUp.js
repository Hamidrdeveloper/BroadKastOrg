import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import {Calendar} from 'react-native-calendars';

const styles = StyleSheet.create({
  container: {

    position: 'absolute',
    height:`40%`,
    width: `100%`,
    top: 180,


  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
});

export  const SwipeUp =({swipeUpDownRef})=> {

    return (
     <View
     style={styles.container}>
      <SwipeUpDown

      itemMini={
                  <View style={{ alignItems: 'center',backgroundColor: "#0000"}}>
                    <Text style={{color: "#000",fontSize: 25}}>This is the mini view, swipe up!</Text>
                  </View>
                }
                itemFull={<Calendar


                />
                          }

onShowMini={() => console.log('mini')}

hasRef={ref => (swipeUpDownRef = ref)}

onMoveDown={() => console.log('down')}
onMoveUp={() => console.log('up')}
disablePressToShow={true} // Press item mini to show full
style={{ backgroundColor: 'transparent' }} // style for swipe
/>
</View>
    );

}
