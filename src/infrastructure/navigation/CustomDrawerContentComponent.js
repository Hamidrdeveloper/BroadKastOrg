import React, {useContext, useEffect, useState} from 'react';
import { View ,Image,Platform, Text} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from '../theme/colors';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { AsyncStorage } from 'react-native';
import { BackHandler } from 'react-native';
import { host } from '../../utils/env';
import { AuthenticationContext } from '../../services/signup/sgnup.context';
import { RemindersContext } from '../../services/reminder/reminder.context';
import { GroupsContext } from '../../services/group/group.context';
import { EventsContext } from '../../services/event/event.context';

import { NativeModules } from 'react-native';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
const Image_Http_URL={
  data:''
};
import { CommonActions,StackActions } from '@react-navigation/native';

export const CustomDrawerContentComponent= (props)=> {
  const {user,userProfile} = useContext(AuthenticationContext)
  const {setGroupUser} =
    useContext(GroupsContext);
  const {
    setUserReminders,
  } = useContext(RemindersContext);
  const {
    setUserEvents,
  } = useContext(EventsContext);

  const {setFriendshipListUser,friendshipListUser} = useContext(FriendshipsContext)

  const {setUser} = useContext(AuthenticationContext);

  Image_Http_URL.data = {uri: `${host}/${user.photo}`};
  useEffect(() => {

     Image_Http_URL.data = {uri: `${host}/${user.photo}`};
    console.log('Image_Http_URL',Image_Http_URL.data);
  }, [user])
  const [imagePro, setImagePro] = useState('')
  const clearStorage = async () => {

setUserEvents([]);
setUserReminders([]);
setGroupUser([]);
setUser({
  id: '8',
  fullname: '',
  photo:'hamidreza.png',
  username: '',
  email: null,
  phoneNumber: '',
  createDatetime: '2021-07-11T22:32:35.1529146',
  pauseALLNotifications: false,
  notificationNewGroup: false,
  notificationNewEvent: false,
  notificationNewMessage: false,
  googleCalendarSync: false,
  twoFactorEnabled: false,
})
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
  useEffect(() => {
    Image_Http_URL.data = {uri: `${host}/${userProfile.photo}`};
    console.log('Image_Http_URL',userProfile);

    setImagePro(Image_Http_URL.data)
  }, [userProfile]);

  useEffect(() => {
    console.log('Image_Http_URL',imagePro);
  }, [imagePro])
      return (
        <DrawerContentScrollView style={{padding:15,backgroundColor:`${colors.brand.primary}`}}{...props}>
           {userProfile.photo!=null?
            <Image style={{left:15,width:60,height:60, borderRadius:40,backgroundColor:`${colors.text.blueLight}`}} source={imagePro}/>
            :<View style={{left:15,width:60,height:60, borderRadius:40,backgroundColor:`${colors.text.blueLight}`}}/>}
            <Text style={{left:15,color:`${colors.text.inverse}`,marginTop:10,fontSize:17,fontFamily: "TRYFinder-Light"}}>{user.fullname}</Text>
            <Text style={{left:15,color:`${colors.text.inverse}`,fontSize:13,fontFamily: "TRYFinder-Light"}}>{`@${user.username}`}</Text>
        <DrawerItemList
        style={{padding:100}}
        labelStyle={{
                    color: "#fff",
                }} activeTintColor={`${colors.brand.primary}`} {...props} />

                <View style={{width:`100%`, height:1,backgroundColor:`${colors.text.inverse}`}}/>
        <DrawerItem
          label="Setting"
          labelStyle={{
            color: "#fff",
        }}
          onPress={() => props.navigation.navigate('Settingcreen')}
        />
        <DrawerItem
        label="Invite friends"
        labelStyle={{
            color: "#fff",
        }}
        onPress={() => {
          friendshipListUser();
          props.navigation.navigate('InvateScreen')}}
      />
      {/* <DrawerItem
          label="feedback"
          labelStyle={{
            color: "#fff",
        }}
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        /> */}
        <DrawerItem
          label="LogOut"
          labelStyle={{
            color: "#fff",
        }}
          onPress={() => {clearStorage()
            props.navigation.dispatch(
  StackActions.replace('LoginScreen', {
    user: 'jane',
  })
)}}
        />
      </DrawerContentScrollView>
      );

  }
