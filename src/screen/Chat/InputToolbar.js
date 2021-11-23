import React, { useContext } from 'react';
import { Image } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';
import { launchImageLibrary } from 'react-native-image-picker';
import { GroupsContext } from '../../services/group/group.context';
import { HubConnection } from '../../services/hubConnection/hubConnection.context';
import { AuthenticationContext } from '../../services/signup/sgnup.context';

let options = {
    title: 'You can choose one image',
    noData: true,
    mediaType: 'photo',
    storageOptions: {
      skipBackup: true
    }
  }
export const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: '#fff',
      paddingTop: 6,
      color:"#000",
    }}
    primaryStyle={{ alignItems: 'center' ,    color:"#000",}}
  />
);



export const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      color: '#222B45',
      backgroundColor: '#EDF1F7',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#E4E9F2',
      paddingTop: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
    }}
  />
);

export const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    }}
  >
    <Image
      style={{ width: 32, height: 32 }}
      source={{
        uri: 'https://placeimg.com/32/32/any',
      }}
    />
  </Send>
);
