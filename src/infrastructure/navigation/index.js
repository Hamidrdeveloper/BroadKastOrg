import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroScreen from '../../SliderIntro/index.js';
import {WellcomeScreen} from '../../screen/wellcome/wellcomeScreen.js';
import {GroupIntroScreen} from '../../SliderIntro/index';
import {EventsWellcomScreen} from '../../screen/Events/eventsScreenWellcome.js';
import {RemindersWellcomScreen} from '../../screen/Reminders/remindersScreenWellcome.js';
import {RegistrationScreen} from '../../screen/Sign/registrationScreen.js';
import {HomeScreen} from '../../screen/Home/homeScreen.js';
import {NotifyScreen} from '../../screen/notify/notifyScreen.js';
import {ProfileScreen} from '../../screen/Profile/profileScreen.js';
import {Settingcreen} from '../../screen/Setting/settingScreen.js';
import {InvateScreen} from '../../screen/InviteFriends/InviteScreen.js';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from './homeNav.js';
import {EventCreateScreen} from '../../screen/EventCreate/EventCreateScreen.js';
import {GroupCreateScreen} from '../../screen/GroupCreate/GroupCreateScreen.js';
import {ReminderScreen} from '../../screen/ReminderCreate/ReminderCreateScreen.js';
import {GeestesScreen} from '../../screen/Geestes/geestesScreen.js';
import {EventInviteScreen} from '../../screen/EventInvite/eventInviteScreen.js';
import {GroupShowScreen} from '../../screen/GroupShow/groupShowScreen.js';
import {EventEditScreen} from '../../screen/EventEdit/EventEditScreen.js';
import {EventShowScreen} from '../../screen/EventShow/eventShowScreen.js';
import {GroupEditScreen} from '../../screen/GroupEdit/GroupEditScreen.js';
import {ReminderShowScreen} from '../../screen/ReminderShow/reminderShowScreen.js';
import {ReminderEditScreen} from '../../screen/ReminderEdit/reminderEditScreen.js';
import {ProfileEditor} from '../../screen/Profile/profileEdite.js';
import GooglePlacesInput from '../../components/GeocodingScreen.js';
import {LoginScreen} from '../../screen/Login/loginScreen.js';
import ChatScreen from '../../screen/Chat/chatScreen.js';

// import { AccountNavigator } from "./account.navigator";

// import { AuthenticationContext } from "../../services/authentication/authentication.context";
const Stack = createStackNavigator();
export const Navigation = () => {
  //   const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            marginTop: 15,
          },
        }}>


        <Stack.Screen name="Wellcome" component={WellcomeScreen} />
        <Stack.Screen name="Home" component={Home}

        options={{  gesturesEnabled: false, swipeEnabled: false}}/>
          <Stack.Screen name="EventCreateScreen" component={EventCreateScreen} />
        <Stack.Screen name="NotifyScreen" component={NotifyScreen} />
        <Stack.Screen name="ReminderScreen" component={ReminderScreen} />

        <Stack.Screen name="GroupCreateScreen" component={GroupCreateScreen} />
        <Stack.Screen name="Settingcreen" component={Settingcreen} />
        <Stack.Screen name="GeestesScreen" component={GeestesScreen} />
        <Stack.Screen name="InvateScreen" component={InvateScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="EventShowScreen" component={EventShowScreen} />
        <Stack.Screen name="EventEditScreen" component={EventEditScreen} />
        <Stack.Screen name="EventInviteScreen" component={EventInviteScreen} />
        <Stack.Screen name="GroupShowScreen" component={GroupShowScreen} />
        <Stack.Screen name="GroupEditScreen" component={GroupEditScreen} />
        <Stack.Screen
          name="ReminderShowScreen"
          component={ReminderShowScreen}
        />
        <Stack.Screen
          name="ReminderEditScreen"
          component={ReminderEditScreen}
        />
        <Stack.Screen name="ProfileEditor" component={ProfileEditor} />
        <Stack.Screen name="GooglePlacesInput" component={GooglePlacesInput} />
  <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
