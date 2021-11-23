import React, { Component, createContext, useContext, useEffect, useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter

} from 'react-native';
import signalr from 'react-native-signalr';
import {HubConnectionBuilder, LogLevel} from "@aspnet/signalr";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { FlatList } from 'react-native';
import { AuthenticationContext } from '../signup/sgnup.context';
import { TOKEN } from '../../utils/env';
import { GroupsContext } from '../group/group.context';
//import PushNotification from "react-native-push-notification"
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {Notifications, NotificationAction, NotificationCategory} from 'react-native-notifications';
import { FriendshipsContext } from '../friendship/friendship.context';
import { EventsContext } from '../event/event.context';
import { RemindersContext } from '../reminder/reminder.context';
import toastShow from '../../components/toastShow';
export const HubConnection=createContext();
const onRemoteNotification = (notification) => {
    const actionIdentifier = notification.getActionIdentifier();

    if (actionIdentifier === 'open') {
      // Perform action based on open action
    }

    if (actionIdentifier === 'text') {
      // Text that of user input.
      const userText = notification.getUserText();
      // Perform action based on textinput action
    }
  };

export  const HubConnectionProvider =({children})=> {
 const [hubConnection, setHubConnection] = useState(null)
 const [shortToken, setShortToken] = useState('1')
 const [messagesHub, setMessagesHub] = useState([])
 const [notifyHub, setNotifyHub] = useState([])
 const [messageHub, setMessageHub] = useState(null)
 const [nick, setNick] = useState(null)
 const [isConect, setIsConect] = useState(false)
 const [idGroup, setIdGroup] = useState('')
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

const {allContacts, setAllContacts,friendshipListUser} = useContext(FriendshipsContext)
 const {isLoading, user, error, signUpUser, poneConfirmUser, isValid,loginUser,isLogin} =
 useContext(AuthenticationContext);
 const {
  groupListUser,
  groupAddUser,
  groupEditUser,
  groupDeleteUser,
  groupAcceptUser,
  userGroups,
  groupShowData,
  groupShowUser,
} = useContext(GroupsContext);
 useEffect(() => {

   console.log('HubConnection',user.shortToken)

    if(
      user.shortToken!=null
    ){
      setShortToken(user.shortToken)
    }

 }, [user])
//  useEffect(() => {
//    if(shortToken!='1'){


//    }
//  }, [shortToken])

 const conectTo =(token)=>{
   if(token!=null){
     setHubConnection(startSignalr(token))
      TOKEN.shortToken=token;
   }else{
     setHubConnection(startSignalr(TOKEN.shortToken))
   }


 }
 useEffect(() => {
   if(groupShowData.id!=null){
    setIdGroup(groupShowData.id);

   }
}, [groupShowUser])




     const startSignalr= (token)=>{

      console.log('https://bugle.eeda.ir/ChatHub?token='+token);
        const hub =new HubConnectionBuilder()
            .withUrl('https://bugle.eeda.ir/ChatHub?token='+token)
            .configureLogging(LogLevel.Information)
            .build()





            return hub;
     }

// useEffect(() => {

// }, [])
useEffect(() => {
    console.log('hubConnection==>',hubConnection)

      if(hubConnection!=null){

        // hubConnection.serverTimeoutInMilliseconds=100000;

        hubConnection
        .start()
        .then(() =>{
          setIsConect(true)
          GetNotifications(0,100);
          console.log('hubConnection==>','Connection started!')})
        .catch(err => {console.log('hubConnection==>', err)
        setIsConect(false);});


  };
}, [hubConnection])

useEffect(() => {
  if(isConect){

    hubConnection.on("ReceiveMessage",(result) => {
      console.log('received message: ', result.userId);
        if(user.id!=result.userId){

          setMessageHub(result);
    //        PushNotificationIOS.addEventListener('notification', onRemoteNotification);
    //        PushNotificationIOS.presentLocalNotification({
    //   alertTitle: 'Sample Title',
    //   alertBody: 'Sample local notification',
    //   applicationIconBadgeNumber: 1,
    // });
          let localNotification = Notifications.postLocalNotification({
            body:("You have new messages"),
            title: result.message,
            sound: "chime.aiff",
            silent: false,
            category: "SOME_CATEGORY",
            userInfo: { },
            fireDate: new Date(),
        });
        }

        model = {
          DateTime: '',
          GroupId: '',
          Message: '',
          MessageType: 1,
          UserId: '',
          ReplyId: null
        }
        // add received-message to group ...
      })
      hubConnection.on("ReceiveNotification", (model) => {


        console.log(model)
      if(model.event!=null){
        console.log(model)
        eventListUser();
// PushNotificationIOS.addEventListener('notification', onRemoteNotification);
// PushNotificationIOS.presentLocalNotification({
//      alertTitle: 'Sample Title',
//      alertBody: 'Sample local notification',
//      applicationIconBadgeNumber: 1,
//    });
        let localNotification = Notifications.postLocalNotification({
          body:`Bugle`,
          title: `${model.admin} has invited you to ${model.eventTitle}`,
          sound: "chime.aiff",
          silent: false,
          category: "SOME_CATEGORY",
          userInfo: { },
          fireDate: new Date(),
      });
      }
      if(model.notificationType!=null){
        friendshipListUser();
     //    PushNotificationIOS.addEventListener('notification', onRemoteNotification);
     //    PushNotificationIOS.presentLocalNotification({
     //   alertTitle: 'Sample Title',
     //   alertBody: 'Sample local notification',
     //   applicationIconBadgeNumber: 1,
     // });
        let localNotification = Notifications.postLocalNotification({
          body:`Friendship`,
          title: `${model.senderFullName} would like to add you as a friend`,
          sound: "chime.aiff",
          silent: false,
          category: "SOME_CATEGORY",
          userInfo: { },
          fireDate: new Date(),
      });
      }
        // // sample notification-model for events :
        // model = {
        //   type: 1, // EventInvite: 1, Friendship: 2, Reminder: 3
        //   data: {
        //     status: 'accepted', // pending, accepted, declined
        //     user: 'ali',
        //     eventId: '',
        //     eventTitle: '',
        //     eventDate: '',
        //     eventTime: ''
        //   }
        // }
        // // build messaage:
        // var message = `${model.data.user} accepted your event! }`
        // // push-notification:
        // navigator.serviceWorker.ready
        //   .then(registrationWorker => {
        //     registrationWorker.showNotification(message, {})
        //   })
      });

  }
}, [isConect])





            const  sendMessage=() =>{
        hubConnection
        .invoke("NotificationCount")
        .then((result) => {
        }).catch((err) => {
          toastShow.show(err.message);

          console.log('Error',err)
        });
    }
    const  GetCount=()=>{
        if (hubConnection) {
          hubConnection.invoke("NotificationCount")
          .then((result) => {
          }).catch((err) => {
            toastShow.show(err.message);

            console.log('Error',err)
            conectTo(TOKEN.shortToken)
          });
        }
      };

      const  GetNotifications=(skip, take)=>{
        if (hubConnection) {
          hubConnection.invoke("GetNotifications", 0, 100)
          .then((result) => {
            console.log('Notifications', result)
            setNotifyHub(result);
          }).catch((err) => {
            toastShow.show(err.message);
            setIsConect(false);

            console.log('Error',err)
            conectTo(TOKEN.shortToken)
          });
        }
      };

      const  GetPrevMessages=( skip, take)=>{
        if (hubConnection) {
          hubConnection.invoke("GetPrevMessages",idGroup, skip, take)
          .then((result) => {
            console.log('Notifications', result)
          }).catch((err) => {
            toastShow.show(err.response.data.message);
            setIsConect(false);
            console.log('Error',err)
            conectTo(TOKEN.shortToken)
          });
        }
      };

      const  GetNewMessages=()=>{
        if (hubConnection) {
          hubConnection.invoke("GetNewMessages",idGroup)
          .then((result) => {
            console.log('Notifications', result)
            setMessagesHub(result);
          }).catch((err) => {
            toastShow.show(err.response.data.message);
            setIsConect(false);
            console.log('Error',err)
            conectTo(TOKEN.shortToken)
          });
        }
      };

      const  NotificationSeen=(NotificationId)=>{
          console.log('NotificationSeen', NotificationId)
        if (hubConnection) {
          hubConnection.invoke("NotificationSeen", NotificationId)
          .then((result) => {
            console.log('NotificationSeen', result)
          }).catch((err) => {
            console.log('NotificationSeenError',err)
            toastShow.show(err.response.data.message);

          });
        }
      };

      const   GroupSeen=()=>{
        if (hubConnection!=null) {
          hubConnection.invoke("GroupSeen", idGroup)
          .then((result) => {
            console.log('GroupSeen', result)
          }).catch((err) => {
            console.log('Error',err)
            toastShow.show(err.response.data.message);
            setIsConect(false);
            conectTo(TOKEN.shortToken)
          });
        }
      };

      const SendMessageToGroupImage=(tom)=>{

      if(tom!=null){
        const   obj = {
          Message : ` ${tom[0].text}`,
          MessageType : 1, // text: 1, photo: 2, poll: 4, note: 5
          ReplyId : null,
          GroupId : idGroup,
          filePath : tom[0].image
        }
        console.log('SendMessageToGroupImage',obj);
          if (hubConnection) {
          return  hubConnection.invoke("SendMessageToGroup", obj).then((result) => {

              console.log(result)
              obj.Id = result; // result is messageId
              return "1"
            }).catch((err) => {
              toastShow.show(err.response.data.message);
              setIsConect(false);
              conectTo(TOKEN.shortToken)
              // alert('error on send message: ' + err);
                return "0"
            });
          }else {
            return '0'
          }
      }else {
        return '0'
      }

       };
     const SendMessageToGroup=(tom)=>{
       console.log(idGroup);

     const   obj = {
        Message : ` ${tom}`,
        MessageType : 1, // text: 1, photo: 2, poll: 4, note: 5
        ReplyId : null,
        GroupId : idGroup,
        filePath : ''
      }
        if (hubConnection) {
          return hubConnection.invoke("SendMessageToGroup", obj).then((result) => {
            console.log(result)
            obj.Id = result; // result is messageId
              return '1'
          }).catch((err) => {
            // alert('error on send message: ' + err);
            console.log(err);
            setIsConect(false);
            conectTo(TOKEN.shortToken)
              return '0'
          });
        }else {
          return '0'
        }
      };


        return (
           <HubConnection.Provider
           value={
           { SendMessageToGroup,
            GroupSeen,
            NotificationSeen,
            GetNewMessages,
            GetNewMessages,
            GetPrevMessages,
            SendMessageToGroupImage,
            GetNotifications,
            GetCount,
            startSignalr,
            conectTo,
            setHubConnection,
            setMessageHub,
            notifyHub,
            hubConnection,
            messagesHub,
            isConect,
            messageHub}
          }

           >

          {children}
           </HubConnection.Provider>
        );
    }
