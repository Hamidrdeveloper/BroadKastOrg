import { Image, Text } from "react-native"

import React, {useContext, useEffect, useState} from 'react';
import { View } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

export const ItemListLocation = ({index,item,removeLocation})=>{


console.log('space',item.text)

    return(
        <>
        <View >

         {item.text!=null?
        <Text style={{width:`80%`,color:'#000',fontSize:18,fontFamily: "TRYFinder-Light"}}>{item.text}</Text>
        :
        <Text style={{width:`80%`,color:'#000',fontSize:18,fontFamily: "TRYFinder-Light"}}>{item.name}</Text>
         }
        <TouchableOpacity
            style={{position:'absolute',right:15,width:50,height:40,alignItems:'flex-end'}}
            onPress={()=>{removeLocation(index)}}>
            <View >
            <Icon name="close" size={15}/>
        </View>
            </TouchableOpacity>
        </View>
        </>
    )
}