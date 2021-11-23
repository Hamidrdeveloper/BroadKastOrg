import { Image } from "react-native"

import React, {useContext, useEffect, useState} from 'react';
import { View } from "react-native";
import { ImageLoad } from "../utils/env";
import { colors } from "../infrastructure/theme/colors";

export const ItemAvatar = ({index,person})=>{

var space =15*(index+1);
console.log('space',person)
var Image_Http_URL='';
if(person!=null){
    Image_Http_URL = {uri:ImageLoad+person.userId+'.jpg'}

}
    return(
        <>
        <View style={{position:'absolute',right:space}}>
        <Image style={{width:25,height:25,borderRadius:25,backgroundColor:colors.text.blueLight}} source={Image_Http_URL}/>

        </View>
        </>
    )
}