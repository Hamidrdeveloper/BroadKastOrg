/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import {
  CardItem,
  TextCard,
  ViewRow,
  TextCardBlueLight,
  CardLine,
  CardRemind,
  TextCardSmall,
  TextCardSmallBold,
  ViewLoction,
  ViewIconRelod,
} from './itemListAllTab.styles';
import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { ItemListInvitesTab } from './itemListInvitesTab';
import { TouchableOpacity } from 'react-native';
import { EventsContext } from '../../../services/event/event.context';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RemindersContext } from '../../../services/reminder/reminder.context';
import { AuthenticationContext } from '../../../services/signup/sgnup.context';
import { useState } from 'react';

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

export const ItemListAllTab = ({item,nav,setTypeActiveItem}) => {
  const flagReminde = false;

  let date = new Date(item.date);
  let dateStart = new Date(item.startTime);

  let dateEnd = new Date(item.endTime);
  var hoursStart = dateStart.getHours(); // gives the value in 24 hours format
  var AmOrPm = hoursStart >= 12 ? 'PM' : 'AM';
  hoursStart = hoursStart % 12||12;
  hoursStart=hoursStart<10?'0'+hoursStart:hoursStart;
  var minutes = dateStart.getMinutes()<10?'0'+dateStart.getMinutes():dateStart.getMinutes();
  var finalTime = hoursStart + ':' + minutes + ' ' + AmOrPm;
  finalTime; // final time Time - 22:10
  const {
    eventShowData,
    eventShowUser,
    isLoadingShow,
    setIsLoadingShow,
    setIsClickEvShow
   } = useContext(EventsContext);
   const {
    user
   } = useContext(AuthenticationContext);
   const {
    reminderShowUser,

    isLoadingShowReminders,
    setIsLoadingShowReminders
   } = useContext(RemindersContext);

   const [isClick, setIsClick] = useState(false)
const selectItemShowEvent=(id,typeActive)=>{
  setTypeActiveItem(typeActive)
  setIsClickEvShow(false)
  eventShowUser(id);
  setIsClickEvShow(true)
  // setInterval(() => {
  //   nav.navigate("EventShowScreen")
  // }, 50000);



}
const selectItemShowReminder=(id)=>{
  setIsClick(false)
  reminderShowUser(id);


  setIsClick(true)

}


useEffect(() => {
  setTimeout(() => {
    if(isLoadingShowReminders){
      return(
      nav.navigate("ReminderShowScreen"),
      setIsLoadingShowReminders(false)
      )
    }

  }, 100);
}, [isLoadingShowReminders])

const ckeckAcceptd =(item) =>{

    return (
        <>
         {item.creatorId!=user.id?
        item.accepted == null?(
          <>
          <TouchableOpacity
          delayPressIn={0}
          onPress={()=>{selectItemShowEvent(item.id,false)}}>
            <ItemListInvitesTab item={item}/>

            </TouchableOpacity>
            </>)
            :(
              <>
              <TouchableOpacity
              delayPressIn={0}
              onPress={()=>{selectItemShowEvent(item.id,true)}}>
                <CardItem>
                  <ViewRow>
                    <View style={{width:`45%`}}>
                      <TextCard style={{textTransform: 'uppercase',fontFamily: 'TRYFinder-Light'}}>
                        {weekday[date.getDay()]}
                      </TextCard>
                      <TextCard style={{textTransform: 'uppercase',fontFamily: 'TRYFinder-Light'}}>
                        {monthNames[date.getMonth()] + ' ' + date.getDate()}
                      </TextCard>
                    </View>
                    <View>
                      <TextCardBlueLight>{item.title}</TextCardBlueLight>
                      <TextCard>{finalTime }</TextCard>
                      <ViewLoction>
                        <Icon name="enviromento" size={15} />
                        <TextCardSmall>{item.locationName}</TextCardSmall>
                      </ViewLoction>
                    </View>
                    {item.repeatFrequency >= 1 ? (
                      <ViewIconRelod>
                        <Icon name="sync" size={14} color={'gray'} />
                      </ViewIconRelod>
                    ) : null}
                  </ViewRow>
                  <CardLine />
                </CardItem>
                </TouchableOpacity>
                    </>
           ) :

           <>
           <TouchableOpacity
           delayPressIn={0}
           onPress={()=>{selectItemShowEvent(item.id,true)}}>
             <CardItem>
               <ViewRow>
                 <View style={{width:`45%`}}>
                   <TextCard style={{textTransform: 'uppercase'}}>
                     {weekday[date.getDay()]}
                   </TextCard>
                   <TextCard style={{textTransform: 'uppercase'}}>
                     {monthNames[date.getMonth()] + ' ' + date.getDate()}
                   </TextCard>
                 </View>
                 <View>
                   <TextCardBlueLight>{item.title}</TextCardBlueLight>
                   <TextCard>{finalTime }</TextCard>
                   <ViewLoction>
                   {item.locationName!=null?
                     <>
                     <Icon name="enviromento" size={15} />
                     <TextCardSmall>{`${item.locationName.substring(0,2)}...`}</TextCardSmall>
    </>
                   :null}
                   </ViewLoction>
                 </View>
                 {item.repeatFrequency >= 1 ? (
                   <ViewIconRelod>
                     <Icon name="sync" size={14} color={'gray'} />
                   </ViewIconRelod>
                 ) : null}
               </ViewRow>
               <CardLine />
             </CardItem>
             </TouchableOpacity>
                 </>}
           </>
    )
}

  return (
    <View style={{marginTop:8}}>
      {Object.prototype.toString.call(item.accepted)=="[object Undefined]"?
       <TouchableOpacity
       delayPressIn={0}
       onPress={()=>{selectItemShowReminder(item.id)}}>

          <CardRemind>
            <TextCardSmallBold style={{flex:1}}>{monthNames[date.getMonth()] + ' ' + date.getDate()+" "+finalTime}</TextCardSmallBold>
            <TextCardSmall style={{flex:1,paddingRight:15}}>{item.title}</TextCardSmall>
            <Icon name="gift" size={15} />
          </CardRemind>
          <CardLine />

        </TouchableOpacity>
       :

        ckeckAcceptd(item)
      }
    </View>
  );
};
