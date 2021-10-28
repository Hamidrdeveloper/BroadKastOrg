import * as React from 'react';


import  {SafeArea,TextIntro,ViewCenter,WellcomeText,SpaceDircton,SpaceButton,ButtonNextArrow}  from './wellcome.styles';
import ApiCalendar from 'react-google-calendar-api';

import  Icon  from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { TOKEN } from '../../utils/env';
import { Navigation } from '../../utils/env';
import { AsyncStorage } from 'react-native';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
import { useContext } from 'react';
import { EventsContext } from '../../services/event/event.context';
import { RemindersContext } from '../../services/reminder/reminder.context';
import { GroupsContext } from '../../services/group/group.context';
import { AuthenticationContext } from '../../services/signup/sgnup.context';
import Contacts from 'react-native-unified-contacts';
import { checkUser } from '../../services/signup/dataPost';
import { PermissionsAndroid } from 'react-native';
import Indicator from '../../components/Indicator';
import PushNotification from "react-native-push-notification"
import {Notifications} from 'react-native-notifications';
import { useEffect } from 'react';
const credentials = {
  clientId: '',
  appId: 'sd',
  apiKey: 'sd',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
};

const config = {
  name: 'SECONDARY_APP2',
};
import { CommonActions } from '@react-navigation/native';
const eventFromNow = {
     summary: "Poc Dev From Now",
     time: 480,
 };
export const WellcomeScreen = ({ navigation })=> {
useEffect(() => {
  setTimeout(() => {
  Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
      completion({alert: false, sound: false, badge: false});
    });

    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
      completion();
    });
  //  firebase.initializeApp(credentials, config);
}, 100);
}, [])



  const {friendshipListUser,friends,friendshipListUserActive,isLoadingFriendsh} = useContext(FriendshipsContext)
  const {
    groupListUser,
    groupDeleteUser,
    groupAcceptUser,
    groupUser
  }=useContext(GroupsContext);
  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    userReminders
  }=useContext(RemindersContext);
  const {
    eventListUser,
        eventAddUser,
        eventEditUser,
        eventDeleteUser,
        eventAcceptUser,
        userEvents,
        userInvateEvents,
        userGoingEvents
  }=useContext(EventsContext);

  const {allContacts, setAllContacts} = useContext(FriendshipsContext)

  const {setUser,accountProfileUserNavigation,checkUserInvite,loginUserBayPassword,isShowbutton, setIsShowbutton} = useContext(AuthenticationContext);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()

    } catch (e) {

    }
  }
  const requestCameraPermission = async () => {

      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
              title: 'Hey you need to give us contacts permissions!',
              message: 'We need to read your contacts so we can sell them to advertisers.'
          }
      )
      return granted === PermissionsAndroid.RESULTS.GRANTED

  };
  const onRegister =(token)=> {
    this.setState({registerToken: token.token, fcmRegistered: true});
  }

  const onNotif=(notif)=> {
    Alert.alert(notif.title, notif.message);
  }

  const  handlePerm=(perms)=> {
    Alert.alert('Permissions', JSON.stringify(perms));
  }
  const readData = async () => {

    try{
      var userAge = await AsyncStorage.getItem('dataUser');
      console.log('userAge',userAge);
      if(userAge!=null){

      var pars = JSON.parse(userAge);
      TOKEN.shortToken=pars.shortToken;
      console.log(pars)
      if (pars != null) {
        if (pars.id != null) {
          Navigation.nav=navigation;
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Home' },

              ],
            })
          );
        }
      }
      }



    }

    catch(e) {

      console.log('dataUser', e);
    }
  }

useEffect(() => {
  ApiCalendar.handleAuthClick();
  console.log('ApiCalendar.sign',ApiCalendar.sign);


  if (ApiCalendar.sign)
   ApiCalendar.listUpcomingEvents(10)
     .then(({result}: any) => {
       console.log(result.items);
     });
   readData()





}, [])

  return (
    <SafeArea>
      <ViewCenter>
        <TextIntro>Bugle</TextIntro>
        <WellcomeText>Welcome</WellcomeText>
        <SpaceDircton />
          <TextIntro > {
            "Get the plan together by \n bring the planning together"
          } </TextIntro>
          <SpaceButton/>
          {isShowbutton==true?null:
          <TouchableOpacity onPress={() =>
             navigation.navigate('IntroScreen')}>
          <ButtonNextArrow>
            <Icon name="arrowright" size={30} />
          </ButtonNextArrow>
          </TouchableOpacity>
          }
      </ViewCenter>
      <Indicator isShowIndicator={isShowbutton} />
    </SafeArea>
  );
};
