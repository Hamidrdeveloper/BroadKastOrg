/* eslint-disable prettier/prettier */
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
} from './EventCreateScreen.styles';
import * as moment from 'moment';

// eslint-disable-next-line semi
// eslint-disable-next-line prettier/prettier
import RepeatCalender from '../../components/repeat/RepeatCalender';
import Icon from 'react-native-vector-icons/AntDesign';
import {BackScreen} from '../../components/backScreen';

import {Switch} from 'react-native-paper';
import {ScrollView, Text} from 'react-native';
import {View} from 'react-native';
import {addEvent, addEventDefualt} from '../../services/event/dataPost';
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
import {ItemShowTime} from '../EventEdit/component/itemShowTime';
import {FlatList} from 'react-native';
import toastShow from '../../components/toastShow';
import {Alert} from 'react-native';
import {LocationContext} from '../../services/location/location.context';
import Indicator from '../../components/Indicator';
import {ItemShowTimeAlert} from '../EventEdit/component/itemShowTimeAlert';
import {AlertScreen} from '../../components/AlertScreen';
import {colors} from '../../infrastructure/theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RepetScreen} from '../../components/RepetScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DateTimePickerModal} from '../../components/datePicker/DateTimePickerModal';
import {KeyboardAvoidingView} from 'react-native';

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
let form_to = 1;
var dateArray = {
  date: '',
  startTime: '1995-03-18T18:05:01.859Z',
  endTime: '2019-02-13T17:48:09.193Z',
};
var dateArrayAlert = {
  date: '',
  startTime: '1995-03-18T18:05:01.859Z',
  endTime: '2019-02-13T17:48:09.193Z',
};
let dateArrayAdd = [];
let dateArrayAlertAdd = [];
export const EventCreateScreen = ({navigation}) => {
  const [isSwitchOn, setisSwitchOn] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [typTimeSave, setTypTimeSave] = useState('date');
  const [show, setShow] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [textDate, setTextDate] = useState('Fridey, Jul 8');
  const [textTimeFrom, setTextTimeFrom] = useState('9 PM');
  const [textTimeTo, setTextTimeTo] = useState('11 AM');
  const [textDateAlert, setTextDateAlert] = useState('Fridey, Jul 8');
  const [textTimeFromAlert, setTextTimeFromAlert] = useState('9 PM');
  const [textTimeToAlert, setTextTimeToAlert] = useState('11 AM');
  const [imagePicker, setImagePicker] = useState(null);
  const {
    eventListUser,
    eventAddUser,
    eventEditUser,
    eventDeleteUser,
    eventAcceptUser,
    userEvents,
    isAddEvent,
    setIsAddEvent,
    isLoadingEv,
    setIsLoadingEv,
  } = useContext(EventsContext);
  const [isRepeat, setIsRepeat] = useState(false);
  const {
    friendsActive,
    addGestesEv,
    setTypeGestes,
    setAddGestesEv,
    friendshipListUser,
  } = useContext(FriendshipsContext);
  const {fileUploadUser, isLoadingImage} = useContext(FileUploadContext);
  const [arrayReaderTime, setArrayReaderTime] = useState([]);
  const [arrayReaderTimeAlert, setArrayReaderTimeAlert] = useState([]);
  const [arrayReaderLocation, setArrayReaderLocation] = useState([]);
  const [boxLocation, setBoxLocation] = useState(60);
  const {
    arrayLocationSelectEvent,
    setArrayLocationSelectEvent,
    typeLocation,
    setTypeLocation,
  } = useContext(LocationContext);

  const [titleTime, setTitleTime] = useState('Date');

  useEffect(() => {
    // setTimeout(() => {
    friendshipListUser();
    setIsAddEvent(false);
    if (addEventDefualt != null) {
      addEvent.data = addEventDefualt;
    }
    setAddGestesEv([]);
    setArrayLocationSelectEvent([]);
    addEvent.data = {};
    addEvent.data.eventLocationPolls = [];
    addEvent.data.locationName = '.';
    addEvent.data.locationDetail = '.';
    addEvent.data.startTime = new Date().toJSON();
    addEvent.data.endTime = new Date().toJSON();
    // }, 100);
  }, []);
  useEffect(() => {
    if (arrayLocationSelectEvent != null) {
      setTimeout(() => {
        setArrayReaderLocation(arrayLocationSelectEvent);
      }, 10);
    }
  }, [arrayLocationSelectEvent]);
  useEffect(() => {
    if (arrayReaderLocation != null) {
      if (arrayReaderLocation.length > 0) {
        addEvent.data.locationName = arrayReaderLocation[0].name;
        addEvent.data.locationDetail = arrayReaderLocation[0].detail;
        console.log('arrayReaderLocation[0].name', arrayReaderLocation[0].name);
        console.log(
          'arrayReaderLocation[0].name',
          arrayReaderLocation[0].detail,
        );
      } else {
        addEvent.data.locationName = '.';
      }

      var size = arrayReaderLocation.length * 38;
      setBoxLocation(size);
    }
  }, [arrayReaderLocation]);
  useEffect(() => {
    setTimeout(() => {
      addEvent.data.eventTimePolls = arrayReaderTime;
      if (arrayReaderTime.length > 0) {
        addEvent.data.date = arrayReaderTime[0].date;
        addEvent.data.startTime = arrayReaderTime[0].startTime;
        addEvent.data.endTime = arrayReaderTime[0].endTime;
      }
    }, 100);
  }, [arrayReaderTime]);
  useEffect(() => {
    addEvent.data.eventAlerts = arrayReaderTimeAlert;
  }, [arrayReaderTimeAlert]);
  const onToggleSwitch = () => {
    setisSwitchOn(!isSwitchOn);
    addEvent.data.allDay = !isSwitchOn;
    addEvent.data.eventTimePolls = [];
    if (isSwitchOn == false) {
      addEvent.data.eventTimePolls = arrayReaderTime;
    }
  };

  const onSelectTypeTime = selectedDate => {
    if (typTimeSave == 'T') {
      onChange(selectedDate);
    } else {
      onChangeAlert(selectedDate);
    }
  };

  const showDatepicker = () => {
    setTypTimeSave('T');
    setTitleTime('Date');
    setShow(false);
    if (arrayReaderTime != null) {
      if (arrayReaderTime.length < 4) {
        setMode('date');

        setShow(true);
      } else {
        setShow(false);
        toastShow.show('Your list is full');
      }
    } else {
      setMode('date');

      setShow(true);
    }
  };
  const onChange = selectedDate => {
    setShow(false);
    console.log(selectedDate);
    if (mode == 'date') {
      setTitleTime('Time Start');
      setDate(new Date(1598051730000));
      var currentDate = selectedDate;
      // setShow(Platform.OS === 'ios');

      var dateValue = new Date(selectedDate);
      dateArray.date = dateValue.toJSON();

      console.log('DATE', dateValue.toJSON());
      setTextDate(dateValue.toJSON());
      addEvent.date = dateValue.toJSON();
      setMode('time');
      setShow(false);
      setShow(true);

      dateArrayAdd.push();

      dateArray.date = dateValue.toJSON();
    } else {
      if (form_to == 2) {
        setTitleTime('Time Date');

        setDate(new Date(1598051730000));
        const currentDate = selectedDate;
        form_to = 1;

        var dateValue = new Date(selectedDate);
        setTextTimeTo(dateValue.getHours());

        dateArray.endTime = dateValue.toJSON();

        setShow(false);
        setShow(false);

        setArrayReaderTime(oldArray => [
          ...oldArray,
          {
            date: dateArray.date,
            startTime: dateArray.startTime,
            endTime: dateArray.endTime,
          },
        ]);
      } else {
        setTitleTime('Time End');
        setDate(new Date(1598051730000));
        var dateValue = new Date(selectedDate);

        const currentDate = selectedDate;

        setTextTimeFrom(dateValue.getHours());

        form_to = 2;
        setMode('time');
        setShow(false);
        setShow(true);

        dateArray.startTime = dateValue.toJSON();
      }
    }
  };

  const showDatepickerForAlert = () => {
    setIsAlert(false);
    setIsAlert(true);
  };
  const onChangeAlert = selectedDate => {
    setShow(false);
    if (mode == 'date') {
      var currentDate = selectedDate;
      // setShow(Platform.OS === 'ios');

      setTitleTime('Time Start');

      var dateValue = new Date(selectedDate);
      dateArrayAlertAdd.date = dateValue.toJSON();

      // setTextDate(dateValue.toJSON());
      // addEvent.date = dateValue.toJSON();
      setMode('time');
      setShow(false);
      setShow(true);

      dateArrayAlertAdd.push();

      dateArrayAlert.date = dateValue.toJSON();
    } else {
      if (form_to == 2) {
        setTitleTime('Date');

        const currentDate = selectedDate;
        form_to = 1;
        setDate(new Date(1598051730000));
        var dateValue = new Date(selectedDate);
        setTextTimeToAlert(dateValue.getHours());

        dateArrayAlert.endTime = dateValue.toJSON();

        setShow(false);
        setShow(false);
        var t = new Date(dateArrayAlert.startTime);
        var d = new Date(dateArrayAlert.date);
        let dateOrg = new Date(dateArrayAlert.date);
        let date = new Date(dateArrayAlert.startTime);

        var dayOp = {day: '2-digit'};
        var yearOp = {year: 'numeric'};
        var monthOp = {month: '2-digit'};
        var valueDay = new Intl.DateTimeFormat('en-GB', dayOp).format(d);
        var valueYear = new Intl.DateTimeFormat('en-US', yearOp).format(d);
        var valueMonth = new Intl.DateTimeFormat('en-US', monthOp).format(d);
        var valueTime = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(t);

        var time = `${d.getFullYear()}-${valueMonth}-${valueDay}T${valueTime}Z`;
        setArrayReaderTimeAlert(oldArray => [...oldArray, {agoMinute: time}]);
      } else {
        setTitleTime('Time End');

        var dateValue = new Date(selectedDate);

        const currentDate = selectedDate;

        setTextTimeFromAlert(dateValue.getHours());

        form_to = 2;
        setMode('time');
        setShow(false);
        setShow(true);

        dateArrayAlert.startTime = dateValue.toJSON();
      }
    }
  };
  const editImageEditor = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.assets[0].uri};
        // ADD THIS
        setImagePicker(source.uri);

        fileUploadUser(response.assets[0], 'event');
        console.log('User tapped custom button: ', response);
      }
    });
  };
  const showTimepicker = () => {
    setMode('time');
    setShow(true);
  };
  useEffect(() => {
    setTimeout(() => {
      if (isAddEvent == true) {
        navigation.navigate('Home');
        setIsAddEvent(false);
      }
    }, 100);
  }, [isAddEvent]);

  useEffect(() => {
    console.log('addGestesEv', addGestesEv);
    setTimeout(() => {
      addEvent.data.eventGuests = addGestesEv;
    }, 100);
  }, [addGestesEv]);

  return (
    <>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView>
            <ViewMain>
              <ScrollViewCenter>
                <ViewTopRowHeader>
                  <BackScreen navigation={navigation} />

                  <TextCenterName
                    style={{
                      fontFamily: 'TRYFinder-Light',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Create Event
                  </TextCenterName>
                  <TouchableOpacity
                    onPress={() => {
                      if (!isLoadingImage) {
                        eventAddUser();
                      }
                    }}>
                    <TextCenterName
                      style={{
                        fontFamily: 'TRYFinder-Light',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Save
                    </TextCenterName>
                  </TouchableOpacity>
                </ViewTopRowHeader>

                <TouchableOpacity onPress={() => editImageEditor()}>
                  <ImagePro source={{uri: imagePicker}} />
                  <ViewIconImage>
                    <Icon name="plus" size={15} color="#000" />
                  </ViewIconImage>
                </TouchableOpacity>
                <View style={{height: 20}} />
                <ViewSwitch>
                  <TitleEventFieldAdd>EVENT TITLE</TitleEventFieldAdd>
                </ViewSwitch>
                <InputEventField
                  onChangeText={e => (addEvent.data.title = e)}
                  placeholderTextColor={'#bbb'}
                  placeholder={'Birthday'}
                />
                <ViewRowEventAdd>
                  <TitleEventFieldAdd>GUESTS</TitleEventFieldAdd>
                  <View
                    style={{
                      flex: 1,
                      height: 30,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                    }}>
                    {addGestesEv != null
                      ? addGestesEv.map((person, index) => {
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
                      setTypeGestes('event');
                      navigation.navigate('InvateScreen');
                    }}>
                    <ViewBackIcon style={{backgroundColor: '#fff'}}>
                      <Icon name="plus" size={15} color="#000" />
                    </ViewBackIcon>
                  </TouchableOpacity>
                </ViewRowEventAdd>
                <LineView></LineView>
                <ViewRowEventAdd>
                  <TitleEventFieldAdd>LOCATION</TitleEventFieldAdd>
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      navigation.navigate('GooglePlacesInput');
                      setTypeLocation('event');
                    }}>
                    <ViewBackIcon style={{backgroundColor: '#fff'}}>
                      <Icon name="plus" size={15} color="#000" />
                    </ViewBackIcon>
                  </TouchableOpacity>
                </ViewRowEventAdd>
                <ViewBoxLocation style={{height: boxLocation}}>
                  {arrayReaderLocation.map((value, index) => {
                    return (
                      <>
                        <TextDefualtBoxLocation>{`${value.name},${value.detail},`}</TextDefualtBoxLocation>
                        {index + 1 != arrayReaderLocation.length ? (
                          <LineView />
                        ) : null}
                      </>
                    );
                  })}
                </ViewBoxLocation>

                <TextBlue>
                  Create up to 4 options for guests to choose from{' '}
                </TextBlue>
                <ViewRowEventAdd>
                  <TitleEventFieldAdd>TIME</TitleEventFieldAdd>
                  <View style={{flexDirection: 'row'}}>
                    <TitleEventFieldAdd style={{color: colors.text.blueLight}}>
                      Start-End
                    </TitleEventFieldAdd>

                    <TouchableOpacity
                      style={{alignSelf: 'center'}}
                      onPress={() => {
                        showDatepicker();
                      }}>
                      <ViewBackIcon style={{backgroundColor: '#fff'}}>
                        <Icon name="plus" size={15} color="#000" />
                      </ViewBackIcon>
                    </TouchableOpacity>
                  </View>
                </ViewRowEventAdd>
                <ViewBoxTime>
                  <ViewSwitch>
                    <TextCenterName>All day</TextCenterName>
                    <Switch
                      trackColor={{
                        true: colors.text.blueLight,
                        false: colors.text.blueLightGray,
                      }}
                      color={colors.text.blueLight}
                      value={isSwitchOn}
                      onValueChange={() => {
                        onToggleSwitch();
                      }}
                    />
                  </ViewSwitch>
                  <LineView></LineView>
                  {!isSwitchOn ? (
                    <FlatList
                      data={arrayReaderTime}
                      renderItem={({item, index}) => (
                        <ItemShowTime item={item} index={index} />
                      )}
                    />
                  ) : null}
                </ViewBoxTime>
                <TextBlue> </TextBlue>
                <View
                  style={{width: `100%`, paddingLeft: 15, paddingRight: 15}}>
                  <ViewSwitch>
                    <TextCenterName
                      style={{
                        fontFamily: 'TRYFinder-Light',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      REPEAT
                    </TextCenterName>

                    {!isRepeat ? (
                      <View style={{alignSelf: 'center', paddingRight: 15}}>
                        <TouchableOpacity
                          onPress={() => {
                            setIsRepeat(!isRepeat);
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <TextCenterName>Never</TextCenterName>
                            <View style={{width: 10}} />
                            <Icon name="right" size={15} color="#000" />
                          </View>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </ViewSwitch>
                  <LineView></LineView>
                  <View style={{marginTop: 20}} />
                  <ViewSwitch>
                    <TextCenterName
                      style={{
                        fontFamily: 'TRYFinder-Light',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      NOTES
                    </TextCenterName>
                  </ViewSwitch>
                </View>
                <View style={{marginTop: 15}} />

                <InputEventField
                  onChangeText={e => {
                    addEvent.data.notes = e;
                  }}
                  placeholderTextColor="#bbb"
                  placeholder={'Sample Music'}
                />
                <View style={{height: 50}} />
                {show === true ? (
                  Platform.OS == 'ios' ? (
                    <>
                      <DateTimePickerModal
                        isVisible={true}
                        mode={mode}
                        confirmTextIOS={`Confirm ${titleTime}`}
                        onConfirm={onSelectTypeTime}
                        onCancel={() => {
                          setShow(false);
                        }}
                      />
                    </>
                  ) : (
                    <DateTimePickerModal
                      isVisible={true}
                      mode={mode}
                      confirmTextIOS={`Confirm ${titleTime}`}
                      onConfirm={onSelectTypeTime}
                      onCancel={() => {
                        setShow(false);
                      }}
                    />
                  )
                ) : null}

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isLocation}
                  onRequestClose={() => {
                    setIsLocation(false);
                  }}>
                  <LocateLocation />
                </Modal>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isAlert}
                  onRequestClose={() => {
                    setIsAlert(false);
                  }}>
                  <AlertScreen
                    setIsAlert={setIsAlert}
                    value={setArrayReaderTimeAlert}
                    show={setIsAlert}
                  />
                </Modal>
              </ScrollViewCenter>
            </ViewMain>
          </ScrollView>
        </KeyboardAvoidingView>
        <Indicator isShowIndicator={isLoadingEv} />
        <Indicator isShowIndicator={isLoadingImage} />
        <RepeatCalender
          onDone={data => {
            if (data.repeatDate != '') {
              addEvent.data.repeatEndTime = data.repeatDate;
            } else {
              addEvent.data.repeatEndCount = data.repeatCount;
            }

            addEvent.data.repeatFrequency = data.repeatFrequency;
            addEvent.data.repeatNum = data.repeatNum;
            setIsRepeat(false);
          }}
          onClose={() => {
            addEvent.data.repeatFrequency = 0;
            setIsRepeat(false);
          }}
          visible={isRepeat}
        />
      </SafeAreaView>
    </>
  );
};
