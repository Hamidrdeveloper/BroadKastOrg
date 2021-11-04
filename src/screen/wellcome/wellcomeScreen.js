/* eslint-disable prettier/prettier */
import * as React from 'react';

import {
  SafeArea,
  TextIntro,
  ViewCenter,
  WellcomeText,
  SpaceDircton,
  SpaceButton,
  ButtonNextArrow,
} from './wellcome.styles';
import ApiCalendar from 'react-google-calendar-api';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {TOKEN} from '../../utils/env';
import {Navigation} from '../../utils/env';
import {AsyncStorage} from 'react-native';
import {FriendshipsContext} from '../../services/friendship/friendship.context';
import {useContext} from 'react';
import {EventsContext} from '../../services/event/event.context';
import {RemindersContext} from '../../services/reminder/reminder.context';
import {GroupsContext} from '../../services/group/group.context';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
import Contacts from 'react-native-contacts';
import {checkUser} from '../../services/signup/dataPost';
import {PermissionsAndroid} from 'react-native';
import Indicator from '../../components/Indicator';
import PushNotification from 'react-native-push-notification';
import {Notifications} from 'react-native-notifications';
import {useEffect} from 'react';
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
import {CommonActions} from '@react-navigation/native';
const eventFromNow = {
  summary: 'Poc Dev From Now',
  time: 480,
};
export const WellcomeScreen = ({navigation}) => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
    webClientId: '669150360489-22dfh2obcgsd8idr2hbpf2b5834vrf6q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '669150360489-22dfh2obcgsd8idr2hbpf2b5834vrf6q.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  useEffect(() => {
    Contacts.requestPermission();
    setTimeout(() => {
      Notifications.registerRemoteNotifications();

      Notifications.events().registerNotificationReceivedForeground(
        (notification: Notification, completion) => {
          completion({alert: false, sound: false, badge: false});
        },
      );

      Notifications.events().registerNotificationOpened(
        (notification: Notification, completion) => {
          completion();
        },
      );
      //  firebase.initializeApp(credentials, config);
    }, 100);
  }, []);

  const {
    friendshipListUser,
    friends,
    friendshipListUserActive,
    isLoadingFriendsh,
  } = useContext(FriendshipsContext);
  const {groupListUser, groupDeleteUser, groupAcceptUser, groupUser} =
    useContext(GroupsContext);
  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    userReminders,
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
  } = useContext(EventsContext);

  const {allContacts, setAllContacts} = useContext(FriendshipsContext);

  const {
    setUser,
    accountProfileUserNavigation,
    checkUserInvite,
    loginUserBayPassword,
    isShowbutton,
    setIsShowbutton,
  } = useContext(AuthenticationContext);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {}
  };
  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Hey you need to give us contacts permissions!',
        message:
          'We need to read your contacts so we can sell them to advertisers.',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };
  const onRegister = token => {
    this.setState({registerToken: token.token, fcmRegistered: true});
  };

  const onNotif = notif => {
    Alert.alert(notif.title, notif.message);
  };

  const handlePerm = perms => {
    Alert.alert('Permissions', JSON.stringify(perms));
  };
  const readData = async () => {
    try {
      var userAge = await AsyncStorage.getItem('dataUser');
      console.log('userAge', userAge);
      if (userAge != null) {
        var pars = JSON.parse(userAge);
        TOKEN.shortToken = pars.shortToken;
        console.log(pars);
        if (pars != null) {
          if (pars.id != null) {
            Navigation.nav = navigation;
            // navigation.dispatch(
            //   CommonActions.reset({
            //     index: 0,
            //     routes: [
            //       { name: 'Home' },

            //     ],
            //   })
            // );
          }
        }
      }
    } catch (e) {
      console.log('dataUser', e);
    }
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
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
  useEffect(() => {
    signIn();
    ApiCalendar.handleAuthClick();
    console.log('ApiCalendar.sign', ApiCalendar.sign);

    if (ApiCalendar.sign)
      ApiCalendar.listUpcomingEvents(10).then(({result}: any) => {
        console.log(result.items);
      });
    readData();
  }, []);

  return (
    <SafeArea>
      <ViewCenter>
        <TextIntro>Bugle</TextIntro>
        <WellcomeText>Welcome</WellcomeText>
        <SpaceDircton />
        <TextIntro>
          {' '}
          {'Get the plan together by \n bring the planning together'}{' '}
        </TextIntro>
        <SpaceButton />
        {isShowbutton == true ? null : (
          <TouchableOpacity onPress={() => navigation.navigate('IntroScreen')}>
            <ButtonNextArrow>
              <Icon name="arrowright" size={30} />
            </ButtonNextArrow>
          </TouchableOpacity>
        )}
      </ViewCenter>
      <Indicator isShowIndicator={isShowbutton} />
    </SafeArea>
  );
};
