import React, {useContext, useEffect, useState} from 'react';
import {
  ImagePro,
  TextCenterName,
  ViewMain,
  ViewTopRowHeader,
  TitleEventField,
  InputEventField,
  ViewRowEventAdd,
  TitleEventFieldAdd,
  ViewBackIcon,
  LineView,
  ViewBoxLocation,
  TextDefualtBoxLocation,
  TextBlue,
  ViewSwitch,
  ViewBoxTime,
  ScrollViewCenter,
  ViewIconImage,
  FlatListAvatar,
  ViewShow,
  ViewBackTextBlue,
  ButtonSugg,
  ViewRowButtonSugg,
  TitleButton,
  ViewCenterItemToRow,
  LineWidth,
  TitleSmallEventFieldAdd,
  TextBold,
} from './reminderShowScreen.styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/AntDesign';
import { BackScreen } from '../../components/backScreen';

import {Switch} from 'react-native-paper';
import {ScrollView, Text} from 'react-native';
import {View} from 'react-native';
import {addEvent} from '../../services/event/dataPost';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native';
import {Modal} from 'react-native';
import {LocateLocation} from '../../components/LocateLocation';
import {EventsContext} from '../../services/event/event.context';
import ScrollPicker from '../../components/scrollPicker';
import {OpenImagePicker} from '../../components/imagePickerStructure';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {FriendshipsContext} from '../../services/friendship/friendship.context';
import {ItemAvatar} from '../../components/itemAvatar';
import {add} from 'react-native-reanimated';
import {FileUploadContext} from '../../services/fileUpload/fileUpload.context';
import {host} from '../../utils/env';
import {ItemCardPoll} from './component/itemCardPoll';
import {FlatList} from 'react-native';
import { GroupsContext } from '../../services/group/group.context';
import { RemindersContext } from '../../services/reminder/reminder.context.js';
import { ItemShowTimeAlert } from '../../components/itemShowTimeAlert.js';
import { ItemShowTimeAlertShow } from '../../components/ItemShowTimeAlertShow.js';
let options = {
  title: 'You can choose one image',
  noData: true,
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
  },
};
var form_to = 1;
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

export const ReminderShowScreen = ({navigation}) => {
  const {
    reminderDataShowUser
   } = useContext(RemindersContext);





  let dateT = new Date(reminderDataShowUser.date);
  let date = new Date(reminderDataShowUser.startTime);
  var hours = date.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = date.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
  startTime;



  return (
    <>
    <SafeAreaView>
    <View style={{ backgroundColor:' rgba(78, 205, 196, 0.05 )',height:`100%`}}>
      <ScrollView>
        <ViewMain>
          <ScrollViewCenter>
            <ViewTopRowHeader>
              <BackScreen navigation={navigation}/>

              <TextCenterName>{'Reminder'}</TextCenterName>

              <TouchableOpacity
               onPress={()=>{navigation.navigate("ReminderEditScreen")}}>
               <TextCenterName>{"Edit"}</TextCenterName>
               </TouchableOpacity>
            </ViewTopRowHeader>
            <View style={{marginTop:15}}/>
            <TextBold>{reminderDataShowUser.title}</TextBold>
            <View style={{marginTop:50}}/>
            <LineView></LineView>
            <ViewShow>
              <TitleSmallEventFieldAdd style={{paddingLeft: 70}}>
                {reminderDataShowUser.notes}
              </TitleSmallEventFieldAdd>
              <TitleEventFieldAdd
                style={{position: 'absolute', left: 0, bottom: 0}}>
                NOTES
              </TitleEventFieldAdd>
            </ViewShow>
            <LineView></LineView>
            <ViewShow style={{marginBottom:15}}>
              <View style={{alignItems:'flex-end',width:`100%`}}>
              <TitleSmallEventFieldAdd style={{paddingLeft: 70}}>
              {monthNames[dateT.getMonth()] + ' ' + dateT.getDate()}
              </TitleSmallEventFieldAdd>
              <TitleSmallEventFieldAdd
                  style={{
                    paddingTop: 0,
                  }}>{`${startTime}`}</TitleSmallEventFieldAdd>
              </View>

              <TitleEventFieldAdd
                style={{position: 'absolute', left: 0, bottom: 0}}>
                Time
              </TitleEventFieldAdd>
            </ViewShow>



            <LineView></LineView>
            <ViewShow style={{height:40,paddingRight:15}}>

              {reminderDataShowUser.reminderAlerts.length==0?  <TitleSmallEventFieldAdd style={{paddingLeft: 70}}>
                {"Noting"}
              </TitleSmallEventFieldAdd>:
              
              <FlatList

            data={reminderDataShowUser.reminderAlerts}
            renderItem={({item, index}) => (<ItemShowTimeAlertShow item={item} index={index}/>)}
          />
        }
              <TitleEventFieldAdd
                style={{position: 'absolute', left: 0, top: 5}}>
                ALERT
              </TitleEventFieldAdd>
            </ViewShow>
          
            
            <ViewRowButtonSugg>
              {/* <TouchableOpacity>
                <ButtonSugg>
                  <TitleButton>{'Decline'}</TitleButton>
                </ButtonSugg>
              </TouchableOpacity> */}
              <View style={{marginTop:15}}/>
              <TouchableOpacity>
                <ButtonSugg
                  style={{backgroundColor: 'rgba(78, 205, 196, 0.1 )'}}
                  styleDisabled={{color: 'red'}}
                  title="Submit">
                  <TitleButton style={{padding: 0}}>{'Repeat reminder'}</TitleButton>
                </ButtonSugg>
              </TouchableOpacity>
            </ViewRowButtonSugg>
          </ScrollViewCenter>
        </ViewMain>
      </ScrollView>
      </View>
      </SafeAreaView>
    </>
  );
};
