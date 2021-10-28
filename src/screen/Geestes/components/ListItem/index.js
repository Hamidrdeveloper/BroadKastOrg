import React, { Component, useEffect } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Platform,
  Image,
  Animated
} from "react-native";
import PropTypes from "prop-types";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Button } from "react-native-paper";
import { addEvent } from "../../../../services/event/dataPost";
import toastShow from "../../../../components/toastShow";
import { FriendshipsContext } from "../../../../services/friendship/friendship.context";
import { useContext } from "react";
export const  ListItem =({index,item,addToBroadKast,undoToBroadKast})=>{
  const {friendsActive} = useContext(FriendshipsContext)


    return (
      <>

        <View>


        <View style={{flexDirection:"row",height:55,alignItems:'center', paddingLeft:15}}>

           <Image source={require("../../../../../assets/vega.jpg")}
           style={{width:35,height:35,borderRadius:40}}/>
           <View style={{paddingLeft:15}}>
           <Text style={{fontStyle:'normal', fontWeight:'bold', fontSize:18}}>Hamidreza</Text>
           <Text>Hamidreza</Text>

           </View>
           {item.desc==0?
           <Button
           onPress={()=>{addToBroadKast(index)}}
           style={{width:100,height:40,borderRadius:30,borderColor:"rgba(78, 205, 196, 1)",borderWidth:1,
           backgroundColor:"rgba(78, 205, 196, 0.4)",position:'absolute' ,right:15}}>
               <Text style={{color:"#000",fontSize:12,fontWeight:'bold',fontFamily: "TRYFinder-Light"}}>Add</Text>
           </Button>:
             <Button
             onPress={()=>{undoToBroadKast(index)}}
             style={{width:100,height:40,borderRadius:30,borderColor:"rgba(9, 205, 196, 1)",borderWidth:1,
             backgroundColor:"rgba(78, 205, 196, 0.4)",position:'absolute' ,right:15}}>
                 <Text style={{color:"#000",fontSize:12,fontWeight:'bold',fontFamily: "TRYFinder-Light"}}>Undo</Text>
             </Button>
}

           </View>
           <View style={{width:`100%`,height:1,backgroundColor:"#4ECDC4",marginTop:5}}/>
       </View>
       </>
    );
  }





