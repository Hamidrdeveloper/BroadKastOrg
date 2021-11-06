/* eslint-disable prettier/prettier */
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import ApiCalendar from "react-google-calendar-api";
// import * as firebase from "firebase";
import {Button} from 'react-native';
// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from "@expo-google-fonts/oswald";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/signup/sgnup.context';
import {
  GroupsContext,
  GroupsContextProvider,
} from './src/services/group/group.context';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {EventsContextProvider} from './src/services/event/event.context';
import {RemindersContextProvider} from './src/services/reminder/reminder.context';
import {FriendshipsContextProvider} from './src/services/friendship/friendship.context';
import {FileUploadContextProvider} from './src/services/fileUpload/fileUpload.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {HubConnectionProvider} from './src/services/hubConnection/hubConnection.context';
import {MainContextProvider} from './src/services/main/Main.context';

// import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// const firebaseConfig = {
//   apiKey: "<fill in your own>",
//   authDomain: "<fill in your own>",
//   projectId: "<fill in your own>",
//   storageBucket: "<fill in your own>",
//   messagingSenderId: "<fill in your own>",
//   appId: "<fill in your own>",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
GoogleSignin.configure({
  webClientId: '669150360489-22dfh2obcgsd8idr2hbpf2b5834vrf6q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true
});
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.gapi = null;
    this.state = {
      // sign: ApiCalendar.sign
    };

    // this.signUpdate = this.signUpdate.bind(this);
    // ApiCalendar.onLoad(() => {
    //   ApiCalendar.listenSign(this.signUpdate);
    // });

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // signUpdate(sign) {
  //   this.setState({ sign }, () => console.log(this.state.sign));
  // }
  async signIn() {
    try {
      console.log("Start google")
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      console.log(error+"");

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  handleItemClick(event, name) {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
      console.log('logged in');
    } else if (name === 'sign-out') {
      try {
        console.log("Start google")
         GoogleSignin.hasPlayServices();
        const userInfo =  GoogleSignin.signIn();
        this.setState({ userInfo });
      } catch (error) {
        console.log(error+"");
  
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    }
  }

  async getUserInfo() {
    if (ApiCalendar.sign) {
      const response = await ApiCalendar.getBasicUserProfile();
      console.log(response);
    }
  }

  listUpcomingEvents() {
    if (ApiCalendar.sign)
      ApiCalendar.listUpcomingEvents(10).then(({result}) => {
        console.log('upcomsing events', result.items);
      });
  }

  listAllEvents() {
    if (ApiCalendar.sign)
      ApiCalendar.listEvents({
        // timeMin: new Date().toISOString(),
        // timeMax: new Date().addDays(10).toISOString(),
        maxResults: 10,
        orderBy: 'updated',
      }).then(({result}) => {
        console.log(result.items);
      });
  }

  updateEvent() {
    const eId = '7eppmkfbhi4gtvvapv9hvej1lm';
    const event = {
      summary: 'changed name to meet30june for demo purposes',
    };
    ApiCalendar.updateEvent(event, eId).then(res => {
      console.log(res);
    });

    ApiCalendar.getEvent(eId).then(console.log);
  }

  createEventFromNow() {
    const eventFromNow = {
      summary: 'Poc Dev From Now',
      time: 180,
    };

    ApiCalendar.createEventFromNow(eventFromNow)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  createEvent() {
    let stDate = '2021-07-01T12:00:00+05:30';
    let endDate = '2021-07-01T15:00:00+05:30';
    const event = {
      summary: 'new event created',
      description: 'demo of create event function',
      start: {
        dateTime: stDate,
      },
      end: {
        dateTime: endDate,
      },
    };

    this.gapi = window['gapi'];
        const script = React.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
       
        script.onload = () => {
            window['gapi'].load('client:auth2', this.initClient);
        };
  }

  render() {
    return (
      <>
        <Button 
        title=" sign-in"
        onPress={e => this.signIn()}/>
         
      
        <Button  title="sign-out"onPress={e => this.handleItemClick(e, 'sign-out')}/>
        <Button  title=" sign-in"onPress={e => this.getUserInfo()}>get user info</Button>
        <Button  title="list upcoming events"onConPresslick={e => this.listUpcomingEvents()}/>
        <Button  title="list all events"onPress={e => this.listAllEvents()}/>
        <Button  title="update an Event"onPress={e => this.updateEvent()}/>
        <Button  title=" create an Event from now"onPress={e => this.createEventFromNow()}/>
         
        
        <Button title="create an Event" onPress={e => this.createEvent()}/>
      
      </>
    );
  }
}
