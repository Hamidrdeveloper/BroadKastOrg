/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
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
  ViewCenterItemToRow,
  LineWidth,
  TitleSmallEventFieldAdd,
} from './groupShowScreen.styles';
import Icon from 'react-native-vector-icons/AntDesign';

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
import {ItemCardPoll} from './component/itemCardPoll';
import {FlatList} from 'react-native';
import {GroupsContext} from '../../services/group/group.context';
import {BackScreen} from '../../components/backScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

let options = {
  title: 'You can choose one image',
  noData: true,
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
  },
};
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

export const GroupShowScreen = ({navigation}) => {
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
  const {
    locationPollResultUser,
    timePollResultUser
  } = useContext(EventsContext);

  const [isLocationPoll, setIsLocationPoll] = useState(false);
  const [isTimepoll, setIsTimepoll] = useState(false);
  const {setTypeGestes, addGestesGu, setAddGestesGu} =
    useContext(FriendshipsContext);

  const [arryLocationPoll, setArryLocationPoll] = useState([]);

  useEffect(() => {
    if (groupShowData.event != null) {
      locationPollResultUser(groupShowData.event.id);
      timePollResultUser(groupShowData.event.id);
    }
    setTimeout(() => {
      setAddGestesGu(groupShowData.groupMembers);
      if (groupShowData.groupLocationPolls != null) {
        var i = groupShowData.groupLocationPolls.map(object => {
          return {...object, desc: 0};
        });
        setArryLocationPoll(i);
      }
      if (groupShowData.groupTimePolls != null) {
        var arr = groupShowData.groupTimePolls;
        if (arr.length > 1) {
          setIsTimepoll(true);
        }
      }
      if (groupShowData.groupLocationPolls != null) {
        var arr = groupShowData.groupLocationPolls;
        if (arr.length > 1) {
          setIsLocationPoll(true);
        }
      }
    }, 100);
  }, [groupShowData]);
  const changeArrayToActive = index => {
    var i = groupShowData.groupLocationPolls.map(object => {
      return {...object, desc: 0};
    });

    return () => {
      return i;
    };
  };
  const activeLocation = i => {
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

  const flagReminde = false;

  let date = new Date(groupShowData.createTime);
  var hours = date.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = date.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
  startTime;
  let dateEnd = new Date(groupShowData.endTime);

  var endHours = dateEnd.getHours(); // gives the value in 24 hours format
  var AmOrPm = endHours >= 12 ? 'PM' : 'AM';
  endHours = endHours % 12 || 12;
  endHours = endHours < 10 ? '0' + endHours : endHours;
  var minutes = dateEnd.getMinutes();
  var endTime = endHours + ':' + minutes + ' ' + AmOrPm;
  endTime;
  let Image_Http_URL = {uri: `${host}/${groupShowData.photo}`};
  var loca = '';
  if (groupShowData.event != null) {
    loca = ' ::: ' + groupShowData.event.locationName;
  }
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: ' rgba(78, 205, 196, 0.05 )',
            height: '100%',
          }}>
          <ScrollView>
            <ViewMain>
              <ScrollViewCenter>
                <ViewTopRowHeader>
                  <BackScreen navigation={navigation} />

                  <TextCenterName>{groupShowData.name + loca}</TextCenterName>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('GroupEditScreen');
                    }}>
                    <TextCenterName>{'Edit'}</TextCenterName>
                  </TouchableOpacity>
                </ViewTopRowHeader>

                <ImagePro source={Image_Http_URL} />
                <View style={{marginTop: 15}} />
                <LineView />
                {groupShowData.event != null ? (
                  <>
                    <ViewShow>
                      <ViewCenterItemToRow>
                        <TitleSmallEventFieldAdd
                          style={{paddingBottom: 0, textAlign: 'center'}}>
                          {' '}
                          {monthNames[date.getMonth()] + ' ' + date.getDate()}
                        </TitleSmallEventFieldAdd>
                        <TitleSmallEventFieldAdd
                          style={{
                            paddingTop: 0,
                            textAlign: 'center',
                          }}>{`${startTime}`}</TitleSmallEventFieldAdd>
                      </ViewCenterItemToRow>
                      <LineWidth />
                      <ViewCenterItemToRow>
                        <TitleSmallEventFieldAdd
                          style={{paddingBottom: 0, textAlign: 'center'}}>
                          {''}
                        </TitleSmallEventFieldAdd>
                        <TitleSmallEventFieldAdd
                          style={{
                            paddingTop: 0,
                            textAlign: 'center',
                          }}>{`${loca}`}</TitleSmallEventFieldAdd>
                      </ViewCenterItemToRow>
                    </ViewShow>

                    <LineView />
                  </>
                ) : null}
                <View style={{height: 20}} />

                <ViewRowEventAdd>
                  <TitleEventFieldAdd>Members</TitleEventFieldAdd>
                  <View
                    style={{
                      flex: 1,
                      height: 30,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                    }}>
                    {addGestesGu != null
                      ? addGestesGu.map((person, index) => {
                          return (
                            <View>
                              <ItemAvatar person={person} index={index} />
                            </View>
                          );
                        })
                      : null}
                  </View>

                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      setTypeGestes('groupAdd');
                      navigation.navigate('InvateScreen');
                    }}>
                    <ViewBackIcon>
                      <Icon name="plus" size={15} color="#000" />
                    </ViewBackIcon>
                  </TouchableOpacity>
                </ViewRowEventAdd>
                <LineView />

                <ViewShow>
                  <TitleSmallEventFieldAdd style={{paddingLeft: 70}}>
                    {groupShowData.description}
                  </TitleSmallEventFieldAdd>
                  <TitleEventFieldAdd
                    style={{position: 'absolute', left: 0, bottom: 0}}>
                    NOTES
                  </TitleEventFieldAdd>
                </ViewShow>
                <LineView />

                <ViewRowButtonSugg>
                  {/* <TouchableOpacity>
                <ButtonSugg>
                  <TitleButton>{'Decline'}</TitleButton>
                </ButtonSugg>
              </TouchableOpacity> */}
                  <View style={{marginTop: 15}} />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ChatScreen');
                    }}>
                    <ButtonSugg
                      style={{backgroundColor: 'rgba(78, 205, 196, 0.1 )'}}
                      styleDisabled={{color: 'red'}}
                      title="Submit">
                      <TitleButton style={{padding: 0}}>
                        {'Go to chat'}
                      </TitleButton>
                    </ButtonSugg>
                  </TouchableOpacity>
                </ViewRowButtonSugg>
              </ScrollViewCenter>
            </ViewMain>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
