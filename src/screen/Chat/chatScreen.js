/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback, useContext} from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  SafeArea,
} from 'react-native';
import {
  Actions,
  Bubble,
  GiftedChat,
  Message,
  MessageImage,
  MessageText,
  Send,
} from '../../components/giftedChat/src/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HubConnection} from '../../services/hubConnection/hubConnection.context';
import {GroupsContext} from '../../services/group/group.context';
import {EventsContext} from '../../services/event/event.context';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
// import {Notifications} from 'react-native-notifications';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import emojiUtils from 'emoji-utils';
import {SafeAreaView} from 'react-native-safe-area-context';

import SlackMessage from './SlackMessage';
import {renderInputToolbar} from './InputToolbar';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './MessageContainer';
import {Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {FileUploadContext} from '../../services/fileUpload/fileUpload.context';
import {host} from '../../utils/env';
import {
  TextCenterName,
  ViewTopRowHeader,
} from '../EventShow/eventShowScreen.styles';
import {ItemAvatar} from '../../components/itemAvatar';
import {BackScreen} from '../../components/backScreen';
import {Alert} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {Platform} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

let options = {
  title: 'You can choose one image',
  noData: true,
  mediaType: 'photo',
  maxWidth: 300,
  maxHeight: 300,
  quality: 0.9,
  storageOptions: {
    skipBackup: true,
  },
};
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
let numberPollTime = -1;
let numberPollLocation = -1;
const ChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const {
    SendMessageToGroup,
    messagesHub,
    messageHub,
    GetNewMessages,
    SendMessageToGroupImage,
    isConect,
  } = useContext(HubConnection);
  const {groupShowData} = useContext(GroupsContext);
  const {
    locationPollResultUser,
    timePollResultUser,
    locPollResultData,
    timePollResultData,
  } = useContext(EventsContext);
  const {user} = useContext(AuthenticationContext);
  const {fileUploadUser, fileChat, isSndFileChat} =
    useContext(FileUploadContext);
  const [titleTimePollTime, setTitleTimePollTime] =
    useState('6:00 PM - 11:00 PM');
  const [titleDatePollTime, setTitleDatePollTime] =
    useState('Saturday\n Aug 29');
  const [titlePollLocation, setTitlePollLocation] = useState('McCarren- Park');
  const [disPollLocation, setDisPollLocation] = useState(
    '776 Lorimer St.Brookiyn, Ny 112222',
  );
  useEffect(() => {
    setMessages([]);
    setTimeout(() => {
      GetNewMessages(groupShowData);
    }, 100);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (fileChat != null) {
        // {
        //   "text": "bo",
        //   "user": {
        //       "_id": "3269126d-f31c-4a96-8f0a-671c0d45b3af"
        //   },
        //   "createdAt": "2021-08-08T11:17:47.861Z",
        //   "_id": "542f1be4-7160-4e81-b77d-ca625d361885"
        // }
        var me = {
          text: 'image',
          createdAt: new Date(),
          user: {
            _id: user.id,
          },
          image: host + '/' + fileChat,
        };
        var messaage = [];
        messaage.push(me);

        onSendImage(messaage);
      }
    }, 100);
  }, [fileChat]);

  useEffect(() => {
    setTimeout(() => {
      if (messageHub != null) {
        //   let localNotification = Notifications.postLocalNotification({
        //     body: groupShowData.name,
        //     title: messageHub.message,
        //     sound: "chime.aiff",
        //     silent: false,
        //     category: "ReceiveMessage",
        //     userInfo: { },
        //     fireDate: new Date(messageHub.dateTime),
        // });
        if (messageHub.groupId == groupShowData.id) {
          if (messageHub.filePath != null) {
            var me = {
              _id: messageHub.id,
              text: messageHub.message,
              createdAt: new Date(messageHub.dateTime),
              image: messageHub.filePath,
              user: {
                _id: messageHub.userId,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            };

            var messaage = [];
            messaage.push(me);
            setMessages(previousMessages =>
              GiftedChat.append(previousMessages, messaage),
            );
          } else {
            var me = {
              _id: messageHub.id,
              text: messageHub.message,
              createdAt: new Date(messageHub.dateTime),
              user: {
                _id: messageHub.userId,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            };

            var messaage = [];
            messaage.push(me);
            setMessages(previousMessages =>
              GiftedChat.append(previousMessages, messaage),
            );
          }
        }
      }
    }, 100);
  }, [messageHub]);
  useEffect(() => {
    setTimeout(() => {
      var arrayMessagesHub = [];
      arrayMessagesHub = messagesHub;
      if (arrayMessagesHub.length > 0) {
        arrayMessagesHub.map(v => {
          if (v.filePath != null) {
            var me = {
              _id: v.id,
              text: v.message,
              createdAt: new Date(v.dateTime),
              image: v.filePath,
              user: {
                _id: v.userId,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            };

            var messaage = [];
            messaage.push(me);
            setMessages(previousMessages =>
              GiftedChat.append(previousMessages, messaage),
            );
          } else {
            var me = {
              _id: v.id,
              text: v.message,
              createdAt: new Date(v.dateTime),
              user: {
                _id: v.userId,
                name: 'React Native',
                avatar:
                  'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-19/s150x150/232262869_545522559836490_7707377479797287867_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_ohc=pYmoPZ6EcWUAX-eR7XA&edm=ABfd0MgBAAAA&ccb=7-4&oh=082115f4c6067b7ac594f31aaf0a4cdc&oe=61159496&_nc_sid=7bff83',
              },
            };
            var messaage = [];
            messaage.push(me);
            setMessages(previousMessages =>
              GiftedChat.append(previousMessages, messaage),
            );
          }
        });
      }
    }, 100);
  }, [messagesHub]);

  useEffect(() => {
    timePollResultData.forEach(element => {
      if (element.count > numberPollTime) {
        numberPollTime = element.count;
        let dateOrg = new Date(element.date);
        let date = new Date(element.startTime);
        var hours = date.getHours(); // gives the value in 24 hours format
        var AmOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        hours = hours < 10 ? '0' + hours : hours;
        var minutes = date.getMinutes();
        var startTime = hours + ':' + minutes + ' ' + AmOrPm;

        let dateEnd = new Date(element.endTime);
        var hours2 = dateEnd.getHours(); // gives the value in 24 hours format
        var AmOrPm2 = hours2 >= 12 ? 'PM' : 'AM';
        hours2 = hours2 % 12 || 12;
        hours2 = hours2 < 10 ? '0' + hours2 : hours2;
        var minutes2 = dateEnd.getMinutes();
        var endTime = hours2 + ':' + minutes2 + ' ' + AmOrPm2;
        setTitleDatePollTime(
          weekday[dateOrg.getDay()] +
            '\n' +
            monthNames[dateOrg.getMonth()] +
            ' ' +
            dateOrg.getDate(),
        );
        setTitleTimePollTime(startTime + '-' + endTime);
      }
    });
  }, [timePollResultData]);
  useEffect(() => {
    locPollResultData.forEach(element => {
      if (element.count > numberPollLocation) {
        numberPollLocation = element.count;
        setTitlePollLocation(`${element.name}`);
        setDisPollLocation(element.detail);
      }
    });
  }, [locPollResultData]);
  const onSendImage = useCallback((messages = []) => {
    SendMessageToGroupImage(messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const onSend = useCallback((messages = []) => {
    console.log(messages);
    SendMessageToGroup(messages[0].text).then(res => {
      if (res == '1') {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        );
      } else {
        alert('Not Send Message');
      }
    });
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#7CE0DA"
          />
          <View style={{width: 15}} />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#7CE0DA',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };
  const renderMessageImage = props => {
    const {containerStyle, wrapperStyle, ...messageImageProps} = props;

    return (
      <MessageImage
        {...props}
        imageStyle={{
          borderRadius: 3,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
    );
  };
  const renderMessage = props => {
    const {
      currentMessage: {text: currText},
    } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    if (currText && emojiUtils.isPureEmojiString(currText)) {
      messageTextStyle = {
        fontSize: 28,
        // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
        lineHeight: Platform.OS === 'android' ? 34 : 30,
      };
    }

    return <Message {...props} messageTextStyle={messageTextStyle} />;
  };
  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Hey you need to give us CAMERA permissions!',
        message:
          'We need to read your CAMERA so we can sell them to advertisers.',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };
  const requestCameraPermissionCheck = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    )
      .then(res => {
        if (res === true) {
          //Open scanner
          launchCamera(options, response => {
            if (response.didCancel) {
              console.log('User cancelled photo picker');
              Alert.alert('You did not select any image');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              let source = {uri: response.assets[0].uri};
              console.log(response);
              // ADD THIS

              fileUploadUser(response.assets[0], 'chat');
            }
          });
        } else if (res === false) {
          Alert('Please enable camera permission in device settings.');
          requestCameraPermission();
        }
      })
      .catch(err => {
        Alert('Please enable camera permission in device settings.');
      });
  };
  const renderActions = props => {
    return (
      <Actions
        {...props}
        containerStyle={{
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 4,
          marginRight: 4,
          marginBottom: 0,
        }}
        icon={() => <Icon name="upload" size={20} />}
        options={{
          'Choose From Library': () => {
            launchImageLibrary(options, response => {
              if (response.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log(
                  'User tapped custom button: ',
                  response.customButton,
                );
              } else {
                let source = {uri: response.assets[0].uri};
                console.log(response);
                // ADD THIS

                fileUploadUser(response.assets[0], 'chat');
              }
            });
          },
          'Choose From Camera': () => {
            if (Platform.OS === 'ios') {
              launchCamera(options, response => {
                if (response.didCancel) {
                  console.log('User cancelled photo picker');
                  Alert.alert('You did not select any image');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log(
                    'User tapped custom button: ',
                    response.customButton,
                  );
                } else {
                  // let source = { uri: response.assets[0].uri};
                  console.log(response);
                  // ADD THIS

                  // fileUploadUser(response.assets[0],"chat")
                }
              });
            }
            requestCameraPermission();
            requestCameraPermissionCheck();
          },
          Cancel: () => {
            console.log('Cancel');
          },
        }}
        optionTintColor="#7CE0DA"
      />
    );
  };
  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };
  console.log(messages);

  return (
    <>
      <ViewTopRowHeader style={{backgroundColor: '#eee', marginTop: 25}}>
        <BackScreen navigation={navigation} />

        {/* <TextCenterName style={{textAlign:'center',color:"#000"}}>{groupShowData.name}</TextCenterName> */}
        <TextCenterName
          style={{textAlign: 'center', color: '#000', fontSize: 14}}>
          {isConect ? 'Connect' : 'Connecting...'}
        </TextCenterName>
        <TouchableOpacity
          onPress={() => {
            navigation.push('GroupShowScreen');
          }}>
          <TextCenterName>{'...'}</TextCenterName>
        </TouchableOpacity>
      </ViewTopRowHeader>
      {groupShowData.event != null ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            backgroundColor: `#f5fbfb`,
            height: 160,
            paddingTop:15,
            alignItems: 'center',
          }}>
          <View
            style={{height: '100%', width: '50%', justifyContent: 'flex-start'}}>
            <View
              style={{height: 100, width: '100%', justifyContent:  'flex-start'}}>
              <Text style={{color: '#000', fontSize: 20, textAlign: 'center'}}>
                {titleDatePollTime}
              </Text>
              <Text style={{color: '#000', fontSize: 13, textAlign: 'center'}}>
                {titleTimePollTime}
              </Text>
            </View>
            <View style={{width: `100%`, height: 10}} />
            <View
              style={{
                width: `100%`,
                height: 1,
                backgroundColor: `${colors.brand.blueLight}`,
              }}
            />
            <View style={{width: `100%`, height: 10}} />
          </View>
          <View
            style={{
              width: 1,
              height: '40%',
              backgroundColor: `${colors.brand.blueLight}`,
            }}
          />
          <View
            style={{height: '100%', width: '50%', justifyContent: 'flex-start'}}>
            <View
              style={{height: 100, width: '100%', justifyContent: 'flex-start'}}>
              <Text style={{color: '#000', fontSize: 20, textAlign: 'center'}}>
                {titlePollLocation}
              </Text>
              <Text style={{color: '#000', fontSize: 13, textAlign: 'center'}}>
                {disPollLocation}
              </Text>
            </View>
            <View style={{width: `100%`, height: 10}} />
            <View
              style={{
                width: `100%`,
                height: 1,
                backgroundColor: `${colors.brand.blueLight}`,
              }}
            />
      
            {/* {
             groupShowData.groupMembers!=null?
          groupShowData.groupMembers.map((person,index) => {
            return <View><ItemAvatar person={person} index={index} /></View>;
          }):null
} */}
 <View style={{flexDirection: 'row-reverse', width: `100%`,position:"absolute",bottom:10}}>
              {[
                {id: '8', userId: '5f6e0f10-8d89-4f82-bbd5-0cb02f6c0d1a'},
                {id: '7', userId: '5f6e0f10-8d89-4f82-bbd5-0cb02f6c0d1a'},
                {id: '4', userId: '5f6e0f10-8d89-4f82-bbd5-0cb02f6c0d1a'},
                {id: '5', userId: 'b2aa478b-302e-487b-9937-2672a346a155'},
                {id: '2', userId: '5f6e0f10-8d89-4f82-bbd5-0cb02f6c0d1a'},
                {id: '0', userId: '8f814c8c-e7c7-4a2a-8640-befd2252b3dd'},
                {id: '1', userId: '9840c9b5-2588-49ec-afd4-ed2a33f75fff'},
              ].map((person, index) => {
                return (
                  <View>
                    <ItemAvatar person={person} index={index} />
                  </View>
                );
              })}
              <Text style={{fontSize: 15, color: '#000', paddingRight: `70%`}}>
                Guests
              </Text>
            </View>
          </View>
          
        </View>
      ) : null}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: user.id,
        }}
        renderBubble={renderBubble}
        showAvatarForEveryMessage
        alwaysShowSend
        renderActions={renderActions}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        renderMessage={renderMessage}
        renderMessageImage={renderMessageImage}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
