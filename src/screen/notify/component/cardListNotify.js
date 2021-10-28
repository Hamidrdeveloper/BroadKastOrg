import { Text ,View} from "react-native"
import { CardItem, TextCard ,ViewTopRow,ImagePro, ViewIconRight,ViewBackIcon,ImageProAbs,CardLine,TextCardEvent} from "./cardListNotify.styles"
import * as React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import { TouchableOpacityComponent } from "react-native";
import { EventsContext } from "../../../services/event/event.context";
import { FriendshipsContext } from "../../../services/friendship/friendship.context";
import { host } from "../../../utils/env";
import { HubConnection } from "../../../services/hubConnection/hubConnection.context";

var weekday = new Array(7);
weekday[0] = 'Monday';
weekday[1] = 'Tuesday';
weekday[2] = 'Wednesday';
weekday[3] = 'Thursday';
weekday[4] = 'Friday';
weekday[5] = 'Saturday';
weekday[6] = 'Sunday';

var monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const CardListNotify = ({item ,index,onAddEv
  ,onAddFreind,onRejectEv,onRejectFreind,onShowEv,setTypeActiveItem,setIsClickEvShow}) =>{

    const {NotificationSeen} = React.useContext(HubConnection)

   const selectTypeAc=()=>{
      if(item.notificationType==1){
        selectEvent(1)
      }else{
        selectFriendShip(1)
      }
  }
  const selectTypeDc=()=>{
    if(item.notificationType==1){
      selectEvent(2)
    }else{
      selectFriendShip(2)
    }
}
   const selectFriendShip=(type)=>{
     if(type==1){
      friendshipAcceptUser(item)
     }else{
      friendshipDeclinedUser(item.id)

     }

   }
   const selectEvent=(type)=>{
    if(type==1){
      eventAcceptUser(item.id)
     }else{
      eventDeclinedUser(item.id)

     }
  }


  const showEvent = ()=>{
    let date = new Date(item.event.date);
    let dateStart = new Date(item.event.date);
    var hours = dateStart.getHours(); // gives the value in 24 hours format
    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    var minutes = dateStart.getMinutes();
    var startTime = hours + ':' + minutes + ' ' + AmOrPm;
    startTime;
    var IMAGE_HTTP ={uri:`${host}/f/Profiles/${item.senderId}.jpg`}

    return(
      <CardItem style={{backgroundColor:item.seen==false?"#c8eff1":"#fff"}}>
      <ViewTopRow>

      <ImagePro source={IMAGE_HTTP} />
      {/* <ImageProAbs source={require('../../../../assets/vega.jpg')} /> */}
      <TextCard>{item.senderFullName+` has invited you to \n${item.event.title} on ${monthNames[date.getMonth()] + '\n' + date.getDate()+'\n'+startTime}`}</TextCard>

      <ViewIconRight>
        <TouchableOpacity
        onPress={()=>{onAddEv(item.eventId)
          NotificationSeen(item.id)}}>
        <ViewBackIcon>
        <Icon name="check" size={18} color="#000" />
        </ViewBackIcon>
        </TouchableOpacity>
      <View style={{height: 45}}/>
      <TouchableOpacity
        onPress={()=>{onRejectEv(item.eventId)
          NotificationSeen(item.id)}}>
      <ViewBackIcon>
      <Icon name="close" size={18} color="#000" />
      </ViewBackIcon>
      </TouchableOpacity>
      </ViewIconRight>
      </ViewTopRow>
      <TouchableOpacity
      onPress={()=>{onShowEv(item.eventId)
        setTypeActiveItem(false)
        setIsClickEvShow(true)
        NotificationSeen(item.id)

}}>
      <TextCardEvent>{' View Event'}</TextCardEvent>
      </TouchableOpacity>
      <CardLine/>
      </CardItem>
    )
  }
  var IMAGE_HTTPF ={uri:`${host}/f/Profiles/sa.jpg`}
  if (item.userId!=null) {
     IMAGE_HTTPF ={uri:`${host}/f/Profiles/${item.userId}.jpg`}

  }


  return(
    <>
    {item.eventId != null? showEvent():
    <CardItem style={{backgroundColor:item.seen==false?"#c8eff1":"#ffff"}}>
    <ViewTopRow>

    <ImagePro source={IMAGE_HTTPF} />

    <TextCard>{item.senderFullName+" would like to\nadd you as a friend"}</TextCard>

    <ViewIconRight>
      <TouchableOpacity
      onPress={()=>{onAddFreind(item.friendshipId)
        NotificationSeen(item.id)}}>
      <ViewBackIcon>
      <Icon name="check" size={18} color="#000" />
      </ViewBackIcon>
      </TouchableOpacity>
      <View style={{height: 45}}/>

    <TouchableOpacity
      onPress={()=>{onRejectFreind(item.friendshipId)
        NotificationSeen(item.id)}}>
    <ViewBackIcon>
    <Icon name="close" size={18} color="#000" />
    </ViewBackIcon>
    </TouchableOpacity>
    </ViewIconRight>
    </ViewTopRow>
    <TouchableOpacity
     >
    <TextCardEvent>{"View Profile"}</TextCardEvent>
    </TouchableOpacity>
    <CardLine/>
    </CardItem>

  }
   </>
  )
}
