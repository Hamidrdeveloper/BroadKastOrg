import { Text,View } from "react-native"
import { CardItem, TextCard, ViewRow ,TextCardBlueLight, CardLine, ViewLoction,TextCardSmall,ViewCheckIcon,ViewBackIcon} from "./itemListInvitesTab.styles"
import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import { EventsContext } from "../../../services/event/event.context";


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

export const ItemListInvitesTab = ({item}) =>{

  const {
    eventListUser,
        eventAddUser,
        eventEditUser,
        eventDeleteUser,
        eventDeclinedUser,
        eventAcceptUser,
        userEvents,
        userInvateEvents
  }=useContext(EventsContext);
  let date = new Date(item.date);
  let dateStartTime = new Date(item.startTime);
  var hours = dateStartTime.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12||12;
  hours=hours<10?'0'+hours:hours;
  var minutes = dateStartTime.getMinutes();
  var finalTime = hours + ':' + minutes + ' ' + AmOrPm;
  finalTime; // final time Time - 22:10

  return(
   <CardItem>
       <ViewRow>
       <View style={{width:`45%`}}>
   <TextCard style={{textTransform: 'uppercase'}}> {weekday[date.getDay()]}</TextCard>
   <TextCard style={{textTransform: 'uppercase'}}> {monthNames[date.getMonth()] + ' ' + date.getDate()}</TextCard>
   </View>
   <View>
   <TextCardBlueLight>{item.title}</TextCardBlueLight>
   <TextCard>{finalTime}</TextCard>
   <ViewLoction>
       <Icon name="enviromento" size={15}/>
       <TextCardSmall>{item.locationName}</TextCardSmall>


   </ViewLoction>

   </View>

   <ViewCheckIcon>
   <TouchableOpacity
     onPress={() => {eventAcceptUser(item.id)}}>
   <ViewBackIcon>
      <Icon name="check" size={18} color="#000" />
      </ViewBackIcon>
      </TouchableOpacity>
       <View style={{height:25}}/>
       <TouchableOpacity
     onPress={() => {eventDeclinedUser(item.id)}}>
       <ViewBackIcon>
      <Icon name="close" size={18} color="#000" />
      </ViewBackIcon>

      </TouchableOpacity>
   </ViewCheckIcon>
   </ViewRow>
   <CardLine/>
   </CardItem>
  )
}