import React, {createContext, useContext, useEffect, useState} from 'react';
import { PermissionsAndroid } from 'react-native';
import { AsyncStorage,Platform } from 'react-native';
import { TOKEN,Navigation } from '../../utils/env';
import {EventsContext} from '../event/event.context';
import {FriendshipsContext} from '../friendship/friendship.context';
import {GroupsContext} from '../group/group.context';
import { HubConnection } from '../hubConnection/hubConnection.context';
import {RemindersContext} from '../reminder/reminder.context';
import {AuthenticationContext} from '../signup/sgnup.context';
import Contacts from 'react-native-contacts';
import ApiCalendar from 'react-google-calendar-api';

export const MainContext = createContext();

export const MainContextProvider = ({children,navigation}) => {
  const {friendshipListUser, friends, friendshipListUserActive,isLoadingFriendsh} =
    useContext(FriendshipsContext);
  const {groupListUser, groupDeleteUser, groupAcceptUser, groupUser,setGroupUser} =
    useContext(GroupsContext);
  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    userReminders,
    setUserReminders
  } = useContext(RemindersContext);
  const {
    eventListUser,
    eventAddUser,
    eventEditUser,
    eventDeleteUser,
    eventAcceptUser,
    userEvents,
    userInvateEvents,
    userGoingEvents,
    setUserEvents
  } = useContext(EventsContext);

  const {allContacts, setAllContacts} = useContext(FriendshipsContext);

  const {
    setUser,
    accountProfileUserNavigation,
    checkUserInvite,
    loginUserBayPassword,
    isShowbutton, setIsShowbutton
  } = useContext(AuthenticationContext);
  const {
    conectTo} =
  useContext(HubConnection);
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
const clearStorage = async () => {


  try {
    const asyncStorageKeys = await AsyncStorage.getAllKeys();

    if (Platform.OS === 'android') {
      await AsyncStorage.clear();
    }
    if (Platform.OS === 'ios') {
      await AsyncStorage.multiRemove(asyncStorageKeys);
    }
    // if(Platform.OS=='ios'){

    //
    // }else{
    //       BackHandler.exitApp();
    // }


  } catch (e) {
    alert('Failed to clear the async storage.')
  }
}


  const readData = async () => {
    // if (name === 'sign-in') {

       // } else if (name === 'sign-out') {
       //   ApiCalendar.handleSignoutClick();
       // }
    if(Platform.OS=="android"){
      requestCameraPermission();

    }
    // PushNotification.configure({
    //   //...
    //    requestPermissions: Platform.OS === 'ios'
    //   //...
    //   }
    try {
      const userAge = await AsyncStorage.getItem('dataUser');

      var pars = JSON.parse(userAge);
      console.log('pars', pars);
      if (pars.id != null) {
        setIsShowbutton(true);
      } else {
        setIsShowbutton(false);
      }
      // var notify = new NotifService();
      // notify.localNotif();

      TOKEN.data = pars.token;
      TOKEN.dataShort = pars.shortToken;
      console.log('dataUser',TOKEN.dataShort);
      // loginUserBayPassword('rezaT','123456789')
      conectTo(pars.shortToken);
      // groupListUser();
      setUser(pars);
      setUserEvents([]);
      setUserReminders([]);
      setGroupUser([]);
      groupListUser().then(v => {
        eventListUser().then(v => {
          reminderListUser().then(v => {
            friendshipListUser().then(v => {
              accountProfileUserNavigation();

            });
          });
        });
      });


      // Contacts.getContacts( (error, contacts) =>  {
      //   if (error) {
      //     console.error(error);
      //   }
      //   else {

      //     setAllContacts(contacts);
      //     // console.log(contacts[0].phoneNumbers[0].stringValue);

      //     // setPhoneContacts(contacts[0].phoneNumbers[0].stringValue);
      //     var arryList =[];

      //     contacts.map(v=>{
      //       if(v.phoneNumbers[0] != null){
      //         var value= v.phoneNumbers[0].stringValue;
      //         var newStr = value.replace(/\s/g, "");
      //         arryList.push(newStr)
      //         checkUser.array=arryList;
      //       }

      //     })

      //     setTimeout(() => {
      //       checkUserInvite();

      //     }, 3000);
      //   }
      // });
    } catch (e) {
      console.log('dataUser', e);
    }
  };

  const useMainContext = ()=>{

    setTimeout(() => {
      readData();
    }, 100);
  }


  return <MainContext.Provider
  value={{useMainContext}}
  >{children}</MainContext.Provider>;
};
