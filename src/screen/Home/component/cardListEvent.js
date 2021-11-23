import { Text, View } from "react-native"
import { CardItem, TextCard ,NumberChat,TextNumberChat} from "./cardListEvent.styles"
import * as React from 'react';
import { TouchableOpacity } from "react-native";
import { GroupsContext } from "../../../services/group/group.context";
import { useEffect } from "react";



export const CardListEvent = ({item,nav}) =>{
  const {
    groupShowUser,
    isLoadingShow
   } = React.useContext(GroupsContext);
  const selectItemShow=(id)=>{

    groupShowUser(id);
    // setInterval(() => {
    //   nav.navigate("EventShowScreen")
    // }, 50000);



  }
  useEffect(() => {
    setTimeout(() => {
    if(isLoadingShow){
      return(
      nav.navigate("GroupShowScreen")
      )
    }
  }, 100);

}, [isLoadingShow])
  return(
    <>
    <TouchableOpacity
    onPress={()=>{
      selectItemShow(item.id)
    }}>


      <View>

   <CardItem>
   <TextCard>{item.name}</TextCard>


   </CardItem>
   {item.unreadMessages!="0"?
   <NumberChat><TextNumberChat>{item.unreadMessages}</TextNumberChat></NumberChat>
:null
   }
   </View>
   </TouchableOpacity>
   </>
  )
}
