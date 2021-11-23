/* eslint-disable prettier/prettier */
import React, { Component, useContext, useEffect, useState } from "react";
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
import { Avatar, Button } from "react-native-paper";
import { AuthenticationContext } from "../../../../services/signup/sgnup.context";
import { host } from "../../../../utils/env";
import { FriendshipsContext } from "../../../../services/friendship/friendship.context";
import  Icon  from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { addEvent } from "../../../../services/event/dataPost";
import { EventsContext } from "../../../../services/event/event.context";
import { GroupsContext } from "../../../../services/group/group.context";

export const  ListItemFriendActive=({item,index,setArrayValid,arrayValid})=>  {
const [arrPhone, setArrPhone] = useState([])
const [phone, setPhone] = useState(null)
const {checkUserInvite,listValidUser} = useContext(AuthenticationContext)
const {eventAddGuestUser,eventShowData} = useContext(EventsContext)
const {groupShowData,groupAddGuestUser} = useContext(GroupsContext)
const {friendshipAddUser,typeGestes,setAddGestesEv,addGestesGu,addGestesEv,setAddGestesGu,setAddGestesRe} = useContext(FriendshipsContext)

useEffect(() => {


//   console.log(index)
//   if(phoneContacts!=null){
//     if(phoneContacts[index].phoneNumbers[0]!=null){
//       console.log(phoneContacts[index].phoneNumbers[0].stringValue)
//       setPhone(phoneContacts[index].phoneNumbers[0].stringValue);
//     }

//   }
//   var arrayCehck =[];
//   listValidUser.fi
// arrayCehck.findIndex(phone,)



}, [])

const  addGestes =(item,index)=>{
  if(item.isSelect==="AddTo"){

    var value={
      ...item,isSelect:null
  }
    var array =arrayValid;

    array[index]=value;




    setArrayValid(null);
        setTimeout(() => {
          setArrayValid(array);


        }, 1);



  if(typeGestes=='group'){
    var t = addGestesGu;

    t.splice(item.userId, 1);
    setTimeout(() => {
      setAddGestesGu(t)



    }, 1);
  }
  if(typeGestes=='event'){
    var t = addGestesEv;
    var index = addGestesEv.indexOf(item.userId)
    t.splice(index, 1);

    setTimeout(() => {
      setAddGestesEv(t)



    }, 1);
  }
  if(typeGestes=='eventAdd'){
    var t = addGestesEv;

    var index = addGestesEv.indexOf(item.userId)

    t.splice(index, 1);
    setTimeout(() => {
      setAddGestesEv(t)



    }, 1);
  }
  if(typeGestes=='groupAdd'){
    var t = addGestesGu;

    t.splice(item.userId, 1);
    setTimeout(() => {
      setAddGestesGu(t)



    }, 1);
  }


  }else{
    if(typeGestes=='eventAdd'){

        eventAddGuestUser(item.userId.toString(),eventShowData.id.toString())
    }
    if(typeGestes=='groupAdd'){

      groupAddGuestUser(item.userId.toString(),groupShowData.id.toString())

    
    }

    if(typeGestes=='event'){
      setAddGestesEv(old=>[...old,{userId:item.userId}])
      var value={
        ...item,isSelect:"AddTo"
    }
      var array =arrayValid;

      array[index]=value;
      setArrayValid(null);
        setTimeout(() => {
          setArrayValid(array);


        }, 1);
    }
    if(typeGestes=='group'){
      setAddGestesGu(old=>[...old,{userId:item.userId}])
      var value={
        ...item,isSelect:"AddTo"
    }
      var array =arrayValid;

      array[index]=value;
      setArrayValid(null);
        setTimeout(() => {
          setArrayValid(array);


        }, 1);
    }
  }



}


   var IMAGE_HTTP ={uri:`${host}/f/Profiles/${item.userId}.jpg`}

    return (
        <View>

        <TouchableOpacity
        onPress={()=>{addGestes(item,index)}}
        >

        <View style={{flexDirection:"row",height:55,alignItems:'center', paddingLeft:15}}>

           <Image
           style={{width:35,height:35,borderRadius:40,backgroundColor:"red"}} source={IMAGE_HTTP}/>
            {/* <Avatar.Text size={24} label={item.fullName} /> */}
           <View style={{paddingLeft:15}}>
           <Text style={{fontStyle:'normal', fontWeight:'bold', fontSize:18,fontFamily: "TRYFinder-Light"}}>{item.friendFullname}</Text>
           <Text style={{fontFamily: "TRYFinder-Light"}}>{'@'+item.userUserName}</Text>

           </View>
           {item.isSelect!=null?
           <View style={{position:'absolute',right:10,alignSelf:'center'}}>
           <Icon name="checkcircle" size={20}/>
           </View>:null
}

           </View>
           <View style={{width:`100%`,height:1,backgroundColor:"#4ECDC4",marginTop:5}}/>

        </TouchableOpacity>
       </View>
    );

}
