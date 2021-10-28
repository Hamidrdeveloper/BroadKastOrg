import React from "react";
import { TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";


    export const BackScreen = ({navigation: { goBack } }) => {


    return(
    <>
        <Icon name="arrowleft" size={20} color="#000" />
    <TouchableOpacity
    style={{width:60,height:40,alignItems:'center',justifyContent:'center',position:'absolute'}}
    onPress={()=> {goBack()}}
    >


    </TouchableOpacity>

    </>
    );
}