/* eslint-disable prettier/prettier */
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
} from './eventShowInvite.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { BackScreen } from '../../components/backScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

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
import Indicator from '../../components/Indicator';

import {ItemCardPoll} from './component/itemCardPoll';
import {FlatList} from 'react-native';
import { AuthenticationContext } from '../../services/signup/sgnup.context';
let options = {
  title: 'You can choose one image',
  noData: true,
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
  },
};

var sample ={
  "data": [
      {
          "id": "dd1f824f-ec6b-4693-0883-08d95bfe1c12",
          "eventId": "6146b8f5-e8a2-4435-9c56-08d95bfe1bec",
          "name": "aute cupidatat ut",
          "detail": "fugiat sunt minim Dui",
          "lat": 60426622.37033549,
          "lng": 18308248.37739864,
          "count": 1,
          "eventLocationPollVotes": [
              {
                  "eventLocationPollId": "dd1f824f-ec6b-4693-0883-08d95bfe1c12",
                  "userID": "0fb67a3e-e521-435c-bf92-ac6932ed0e0e",
                  "userFullname": "Hamid Reza Alizadeh"
              }
          ]
      },
      {
          "id": "9fae03eb-c2f1-40e3-0884-08d95bfe1c12",
          "eventId": "6146b8f5-e8a2-4435-9c56-08d95bfe1bec",
          "name": "cupidatat id eu Ut",
          "detail": "reprehenderit quis dolore",
          "lat": 79804695.44024912,
          "lng": -96757202.15490879,
          "count": 0,
          "eventLocationPollVotes": []
      }
  ],
  "isSuccess": true,
  "statusCode": 200,
  "message": "Success"
}
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

export const EventInviteScreen = ({navigation}) => {
  const {
    eventListUser,
    eventAddUser,
    eventEditUser,
    eventDeleteUser,
    eventAcceptUser,
    userEvents,
    eventShowData,
    eventShowUser,
    locationPollAnswerUser,
    timePollAnswerUser,
    locPollResultData,
    timePollResultData,
    locationPollResultUser,
    timePollResultUser,
        isLoadingEv,
  } = useContext(EventsContext);
  const {user} = useContext(AuthenticationContext);
  const [isLocationPoll, setIsLocationPoll] = useState(false);

  const [isTimepoll, setIsTimepoll] = useState(false);

  const [arryLocationPoll, setArryLocationPoll] = useState([]);
  const [arryTimePoll, setArryTimePoll] = useState([]);

  useEffect(() => {
    setTimeout(() => {
   if(timePollResultData!=null){
    setTimeout(() => {
      timePollResultData.forEach(v=>{
        if(v.count!=0){
          v.eventTimePollVotes.forEach(v=>{
            if(v.userID==user.id){
              setIsTimepoll(false)
              return true
            }
          })
        }
      })
    }, 100);
   }


  }, 100); }, [timePollResultData])
  useEffect(() => {
    setTimeout(() => {
    if(locPollResultData!=null){
    setTimeout(() => {
      locPollResultData.forEach(v=>{
        if(v.count!=0){
          v.eventLocationPollVotes.forEach(v=>{
            if(v.userID==user.id){
              setIsLocationPoll(false)
              return true
            }
          })
        }
      })
    }, 100);
  }

  }, 100); }, [locPollResultData])


  useEffect(() => {
    setTimeout(() => {

    timePollResultUser(eventShowData.id)
    locationPollResultUser(eventShowData.id)
    if (eventShowData.eventLocationPolls != null) {
      var i = eventShowData.eventLocationPolls.map(object => {
        return {...object, desc: 0};
      });
      setArryLocationPoll(i);
    }
    if (eventShowData.eventTimePolls != null) {
      var i = eventShowData.eventTimePolls.map(object => {
        return {...object, desc: 0};
      });
      setArryTimePoll(i);
    }
    if (eventShowData.eventTimePolls != null) {
      var arr = eventShowData.eventTimePolls;
      if (arr.length > 1) {
        setIsTimepoll(true);
      }
    }
    if (eventShowData.eventLocationPolls != null) {
      var arr = eventShowData.eventLocationPolls;
      if (arr.length > 1) {
        setIsLocationPoll(true);
      }
    }
  }, 100); }, [eventShowData]);
  const changeArrayToActive = index => {
    var i = eventShowData.eventLocationPolls.map(object => {
      return {...object, desc: 0};
    });

    return () => {
      return i;
    };
  };
  const activeLocation = i => {

    locationPollAnswerUser(arryLocationPoll[i].id)
    var visitesList = [...arryLocationPoll];
    visitesList.forEach((object, index) => {
      if (arryLocationPoll[i].id === object.id) {
        visitesList[index].desc = 1;
        setArryLocationPoll(visitesList);
      } else {
        visitesList[index].desc = 0;
      }
    });

  };
  const activeTime = i => {
    timePollAnswerUser(arryTimePoll[i].id)
    var visitesList = [...arryTimePoll];
    visitesList.forEach((object, index) => {
      if (arryTimePoll[i].id === object.id) {
        visitesList[index].desc = 1;
        setArryTimePoll(visitesList);
      } else {
        visitesList[index].desc = 0;
      }
    });

  };
  const flagReminde = false;

  let dateEnd = new Date(eventShowData.endTime);
  var hours = dateEnd.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = dateEnd.getMinutes();
  var finalTime = hours + ':' + minutes + ' ' + AmOrPm;
  finalTime; // final time Time - 22:10

  let date = new Date(eventShowData.startTime);
  var hours = date.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = date.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
  startTime;

  let Image_Http_URL = {uri: `${host}/${eventShowData.photo}`};

  return (
    <>
    <SafeAreaView>
      <ScrollView>
        <ViewMain>
          <ScrollViewCenter>
            <ViewTopRowHeader>
              <BackScreen navigation={navigation}/>

              <TextCenterName>Invate</TextCenterName>

              <TextCenterName>...</TextCenterName>
            </ViewTopRowHeader>

            <ImagePro source={Image_Http_URL} />
            <TextCenterName style={{fontWeight: 'bold'}}>
              {eventShowData.title}
            </TextCenterName>

            <View style={{height: 20}} />

            <ViewRowEventAdd>
              <TitleEventFieldAdd>Guestes</TitleEventFieldAdd>
              <View
                style={{
                  flex: 1,
                  height: 30,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                }}>
              </View>

              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setTypeGestes('eventAdd');
                  navigation.navigate('InvateScreen');
                }}>
                <ViewBackIcon>
                  <Icon name="plus" size={15} color="#000" />
                </ViewBackIcon>
              </TouchableOpacity>
            </ViewRowEventAdd>
            <LineView></LineView>
            <ViewShow>
              <TitleEventFieldAdd style={{paddingLeft: 70}}>
                {eventShowData.notes}
              </TitleEventFieldAdd>
              <TitleEventFieldAdd
                style={{position: 'absolute', left: 0, bottom: 0}}>
                NOTES
              </TitleEventFieldAdd>
            </ViewShow>
            <LineView></LineView>
            {isTimepoll == false ? (
              <ViewShow>
                <TitleEventFieldAdd style={{paddingBottom: 0}}>
                  {' '}
                  {monthNames[date.getMonth()] + ' ' + date.getDate()}
                </TitleEventFieldAdd>
                <TitleEventFieldAdd
                  style={{
                    paddingTop: 0,
                  }}>{`${startTime}-${finalTime}`}</TitleEventFieldAdd>
                <TitleEventFieldAdd
                  style={{position: 'absolute', left: 0, bottom: 0}}>
                  Time
                </TitleEventFieldAdd>
              </ViewShow>
            ) : (
              <>
                <ViewRowEventAdd>
                  <TitleEventFieldAdd>POLLS</TitleEventFieldAdd>
                  <ViewBackTextBlue>
                    <TextBlue>Chose Item Time </TextBlue>
                  </ViewBackTextBlue>
                </ViewRowEventAdd>
                <FlatList
                  data={arryTimePoll}
                  renderItem={({item, index}) => (
                    <ItemCardPoll
                      activeLocation={activeTime}
                      type={'Time'}
                      item={item}
                      index={index}
                    />
                  )}
                  numColumns={2}
                />
              </>
            )}
            <LineView></LineView>
            {isLocationPoll === false ? (
              <ViewShow>
                <TitleEventFieldAdd style={{paddingBottom: 0}}>
                  {' '}
                  {eventShowData.eventLocationPolls.length>0?eventShowData.eventLocationPolls[0].name:''}
                </TitleEventFieldAdd>
                <TitleEventFieldAdd
                  style={{
                    paddingTop: 0,
                  }}>{eventShowData.eventLocationPolls.length>0?eventShowData.eventLocationPolls[0].detail:''}</TitleEventFieldAdd>
                <TitleEventFieldAdd
                  style={{position: 'absolute', left: 0, bottom: 0}}>
                  Location
                </TitleEventFieldAdd>
              </ViewShow>
            ) : (
              <>
                <ViewRowEventAdd>
                  <TitleEventFieldAdd>POLLS</TitleEventFieldAdd>
                  <ViewBackTextBlue>
                    <TextBlue>Chose Item Location </TextBlue>
                  </ViewBackTextBlue>
                </ViewRowEventAdd>
                <FlatList
                  data={arryLocationPoll}
                  renderItem={({item, index}) => (
                    <ItemCardPoll
                      activeLocation={activeLocation}
                      item={item}
                      type={'Location'}
                      index={index}
                    />
                  )}
                  numColumns={2}
                />
              </>
            )}
            <LineView></LineView>
            <ViewRowEventAdd>
              <TitleEventFieldAdd>SUGGESTOONS</TitleEventFieldAdd>
            </ViewRowEventAdd>
            <ViewBoxLocation style={{backgroundColor: '#fff'}}>
              <Text style={{fontSize: 15,fontFamily: "TRYFinder-Light"}}>
                {
                  "Love this idea! Can't wait to see everybody\n Are we bringing gifts??"
                }{' '}
              </Text>
            </ViewBoxLocation>
            <ViewRowButtonSugg>
              <TouchableOpacity
                onPress={()=>{eventDeclinedUser(eventShowData.id)}}>
                <ButtonSugg>
                  <TitleButton>{'Decline'}</TitleButton>
                </ButtonSugg>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>{eventAcceptUser(eventShowData.id)}}>
                <ButtonSugg
                  style={{backgroundColor: 'rgba(78, 205, 196, 0.1 )'}}
                  styleDisabled={{color: 'red'}}
                  title="Submit">
                  <TitleButton style={{padding: 0}}>{'Submit'}</TitleButton>
                </ButtonSugg>
              </TouchableOpacity>
            </ViewRowButtonSugg>
          </ScrollViewCenter>
        </ViewMain>
      </ScrollView>
      <Indicator isShowIndicator={isLoadingEv} />
      </SafeAreaView>
    </>
  );
};
