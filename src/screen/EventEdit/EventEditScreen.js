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
} from './EventEditScreen.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Switch} from 'react-native-paper';
import {ScrollView, Text} from 'react-native';
import {View} from 'react-native';
import {addEvent, addEventEdit} from '../../services/event/dataPost';
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
import {FlatList} from 'react-native';
import {ItemShowTime} from './component/itemShowTime';
import toastShow from '../../components/toastShow';
import {host} from '../../utils/env';
import {Alert} from 'react-native';
import Indicator from '../../components/Indicator';
import {LocationContext} from '../../services/location/location.context';
import {BackScreen} from '../../components/backScreen';
import {ItemShowTimeAlert} from './component/itemShowTimeAlert';
import {AlertScreen} from '../../components/AlertScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RepetScreen } from '../../components/RepetScreen';
import { colors } from '../../infrastructure/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { DateTimePickerModal } from '../../components/datePicker/DateTimePickerModal';
import { KeyboardAvoidingView } from 'react-native';
import RepeatCalender from  '../../components/repeat/RepeatCalender'

let options = {
  title: 'You can choose one image',
  noData: true,
  mediaType: 'photo',
  maxWidth: 300,
  maxHeight: 300,
    quality:0.9,
  storageOptions: {
    skipBackup: true
  }
};
var form_to = 1;
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
export const EventEditScreen = ({navigation}) => {

  const [isSwitchOn, setisSwitchOn] = useState(false);
  const [isSwitchOnTime, setIsSwitchOnTime] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [typTimeSave, setTypTimeSave] = useState('date');

  const [arrayReaderLocation, setArrayReaderLocation] = useState([]);

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
    eventShowData,
    eventShowUser,
    isLoadingEditEvent,
    setIsLoadingEditEvent,
    isLoadingEv,
  } = useContext(EventsContext);
  const {
    arrayLocationSelectEvent,
    setArrayLocationSelectEvent,
    typeLocation,
    setTypeLocation,
  } = useContext(LocationContext);
  const {friendsActive, addGestesEv, setTypeGestes, setAddGestesEv} =
    useContext(FriendshipsContext);

  const [isRepeat, setIsRepeat] = useState(false);
  const [boxLocation, setBoxLocation] = useState(60);
  const [titleTime,setTitleTime] =useState("Date")

  const {fileUploadUser,isLoadingImage} = useContext(FileUploadContext);
  const [arrayReaderTime, setArrayReaderTime] = useState(
    eventShowData.eventTimePolls,
  );
  const [arrayReaderTimeAlert, setArrayReaderTimeAlert] = useState(
    eventShowData.eventAlerts,
  );

  useEffect(() => {
    setTimeout(() => {
    if (isLoadingEditEvent) {
      navigation.navigate('EventShowScreen');
      setIsLoadingEditEvent(false);
    }
  }, 100); }, [isLoadingEditEvent]);

  useEffect(() => {
    setTimeout(() => {
    addEventEdit.dataUpdate.eventTimePolls = arrayReaderTime;
  }, 100); }, [arrayReaderTime]);

  useEffect(() => {
    setTimeout(() => {
    addEventEdit.dataUpdate.eventAlerts = arrayReaderTimeAlert;

  }, 100); }, [arrayReaderTimeAlert]);

  useEffect(() => {
    setTimeout(() => {
      setAddGestesEv(eventShowData.eventGuests);
    setArrayReaderTime(eventShowData.eventTimePolls);
    setArrayLocationSelectEvent(eventShowData.eventLocationPolls)
    let Image_Http_URL = {uri: `${host}/${eventShowData.photo}`};
    setImagePicker(Image_Http_URL);
    addEventEdit.dataUpdate = eventShowData;
  }, 100); }, [eventShowData]);

  const onToggleSwitch = () => {
    setisSwitchOn(!isSwitchOn);
    addEventEdit.dataUpdate.allDay = !isSwitchOn;
  };

  const onSelectTypeTime = (event, selectedDate) => {
    if (typTimeSave == 'T') {
      onChange(event, selectedDate);
    } else {
      onChangeAlert(event, selectedDate);
    }
  };

  const showDatepicker = () => {
    setTypTimeSave('T');
    setTitleTime("Date")
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
  const onChange = ( selectedDate) => {
    setShow(false);
    if (mode == 'date') {
      setTitleTime("Time Start")

      setDate(new Date(1598051730000));
      var currentDate = selectedDate;
      // setShow(Platform.OS === 'ios');

      var dateValue = new Date(selectedDate);
      dateArray.date = dateValue.toJSON();
      // setTextDate(dateValue.toJSON());
      // addEvent.date = dateValue.toJSON();
      setMode('time');
      setShow(false);
      setShow(true);

      dateArrayAdd.push();

      // console.log('oldArray',arrayReaderTime)

      // console.log('newArray',arrayReaderTime)
      dateArray.date = dateValue;
    } else {
      if (form_to == 2) {
        setTitleTime("Date")

        setDate(new Date(1598051730000));
        const currentDate = selectedDate;
        form_to = 1;

        var dateValue = new Date(selectedDate);
        setTextTimeTo(dateValue.getHours());

        dateArray.endTime = dateValue;

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
        setDate(new Date(1598051730000));
        var dateValue = new Date(selectedDate);

        const currentDate = selectedDate;

        setTextTimeFrom(dateValue.getHours());

        form_to = 2;
        setMode('time');
        setShow(false);
        setShow(true);

        dateArray.startTime = dateValue;
      }
    }
  };

  const showDatepickerForAlert = () => {
    setTypTimeSave('E');
    // setShow(false);
    setIsAlert(true);
    // if (arrayReaderTimeAlert != null) {
    //   if (arrayReaderTimeAlert.length < 4) {
    //     setMode('date');

    //     setShow(true);
    //   } else {
    //     setShow(false);
    //     toastShow.show('Your list is full');
    //   }
    // } else {
    //   setMode('date');

    //   setShow(true);
    // }
  };
  const onChangeAlert = (event, selectedDate) => {
    setShow(false);
    if (mode == 'date') {
      setTitleTime("Time Start")

      var currentDate = selectedDate;
      // setShow(Platform.OS === 'ios');

      var dateValue = new Date(selectedDate);
      dateArrayAlertAdd.date = dateValue.toISOString();

      // setTextDate(dateValue.toJSON());
      // addEvent.date = dateValue.toJSON();
      setMode('time');
      setShow(false);
      setShow(true);

      dateArrayAlertAdd.push();

      // console.log('oldArray',arrayReaderTime)

      // console.log('newArray',arrayReaderTime)
      dateArrayAlert.date = dateValue;
    } else {
      if (form_to == 2) {
        setTitleTime("Date")

        const currentDate = selectedDate;
        form_to = 1;
        setDate(new Date(1598051730000));
        var dateValue = new Date(selectedDate);
        setTextTimeToAlert(dateValue.getHours());

        dateArrayAlert.endTime = dateValue;

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

        var dateValue = new Date(selectedDate);

        const currentDate = selectedDate;

        setTextTimeFromAlert(dateValue.getHours());

        form_to = 2;
        setMode('time');
        setShow(false);
        setShow(true);

        dateArrayAlert.startTime = dateValue;
      }
    }
  };
  useEffect(() => {

    setTimeout(() => {
      setArrayReaderLocation(arrayLocationSelectEvent);
    }, 1000);

  }, [arrayLocationSelectEvent]);

  useEffect(() => {
    if(arrayReaderLocation!=null){
      if(arrayReaderLocation.length>0){
        addEventEdit.dataUpdate.locationName=arrayReaderLocation[0].text;
      }else{
        addEventEdit.dataUpdate.locationName="unKhnow";
      }

      var size =arrayReaderLocation.length*35
      setBoxLocation(size);
    }
   }, [arrayReaderLocation])


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

        setImagePicker({uri: eventShowData.photo});
        fileUploadUser(response.assets[0], 'addEventEdit');
      }
    });
  };
  useEffect(() => {
    setTimeout(() => {

    addEventEdit.dataUpdate.eventGuests = addGestesEv;
  }, 100); }, [addGestesEv]);

  useEffect(() => {
    setTimeout(() => {
    if (eventShowData.eventLocationPolls != null) {

      setTimeout(() => {
        setArrayReaderLocation(eventShowData.eventLocationPolls);
        setArrayLocationSelectEvent(eventShowData.eventLocationPolls);
      }, 1000);
      if (arrayReaderLocation != null) {
        if (arrayReaderLocation.length > 0) {
          addEventEdit.dataUpdate.locationName = arrayReaderLocation[0].text;
        } else {
          addEventEdit.dataUpdate.locationName = 'unKhnow';
        }

        var size = arrayReaderLocation.length * 35;
        setBoxLocation(size);
      }
    }
  }, 100); }, [eventShowData]);

  const showTimepicker = () => {
    setMode('time');
    setShow(true);
  };

  return (
    <>

    <SafeAreaView>
    <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <ScrollView>

        <ViewMain>
          <ScrollViewCenter>
            <ViewTopRowHeader>
              <BackScreen navigation={navigation} />
              <TextCenterName>Edit Event</TextCenterName>
              <TouchableOpacity
                onPress={() => {
                  if(!isLoadingImage){
                    eventEditUser();
                  }

                }}>
                <TextCenterName>Save</TextCenterName>
              </TouchableOpacity>
            </ViewTopRowHeader>

            <TouchableOpacity
              style={{alignSelf:'center'}}
            onPress={() => editImageEditor()}>
              <ImagePro source={imagePicker} />
              <ViewIconImage>
                <Icon name="plus" size={15} color="#000" />
              </ViewIconImage>
            </TouchableOpacity>
            <View style={{height: 20}} />
            <ViewSwitch>
            <TitleEventFieldAdd>Event Title</TitleEventFieldAdd>
          </ViewSwitch>
            <InputEventField
              onChangeText={e => (addEventEdit.dataUpdate.title = e)}
              placeholder={eventShowData.title}
              placeholderTextColor={"#999"}


            />
            <ViewRowEventAdd>
              <TitleEventFieldAdd>Guestes</TitleEventFieldAdd>
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
              {/* <FlatListAvatar
          data={friendsActive}
          horizontal={true}

          renderItem={({item,index}) => }/> */}
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setTypeGestes('event');
                  navigation.navigate('InvateScreen');
                }}>
                <ViewBackIcon>
                  <Icon name="plus" size={15} color="#000" />
                </ViewBackIcon>
              </TouchableOpacity>
            </ViewRowEventAdd>
            <LineView></LineView>
            <ViewRowEventAdd>
              <TitleEventFieldAdd>Alert</TitleEventFieldAdd>
              <TouchableOpacity
                style={{alignSelf:'center'}}
                onPress={() => {
                  showDatepickerForAlert();
                }}>
                <ViewBackIcon>
                  <Icon name="plus" size={15} color="#000" />
                </ViewBackIcon>
              </TouchableOpacity>
            </ViewRowEventAdd>
            <ViewBoxTime>
              <LineView></LineView>
              <FlatList
                data={arrayReaderTimeAlert}
                renderItem={({item, index}) => (
                  <ItemShowTimeAlert item={item} index={index} />
                )}
              />
            </ViewBoxTime>
            <TextBlue> </TextBlue>
            <ViewRowEventAdd>
              <TitleEventFieldAdd>Location</TitleEventFieldAdd>
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  navigation.navigate('GooglePlacesInput');
                  setTypeLocation('eventEdit');
                }}>
                <ViewBackIcon>
                  <Icon name="plus" size={15} color="#000" />
                </ViewBackIcon>
              </TouchableOpacity>
            </ViewRowEventAdd>
            <ViewBoxLocation style={{height: boxLocation}}>
              {arrayReaderLocation.map(value => {
                if (value.text != null) {
                  return (

                    <>
           <TextDefualtBoxLocation>{`${value.text},${value.place_name},`}</TextDefualtBoxLocation>
          <LineView/>
          </>
                  );
                } else {
                  return (

                    <>
                     <TextDefualtBoxLocation>{`${value.name},${value.detail},`}</TextDefualtBoxLocation>
                   <LineView/>
                   </>
                  );
                }
              })}
            </ViewBoxLocation>

            <TextBlue> </TextBlue>
            <ViewRowEventAdd>
              <TitleEventFieldAdd>Time</TitleEventFieldAdd>
              <View style={{flexDirection:"row"}}>
          <TitleEventFieldAdd style={{color:colors.text.blueLight}}>start-end</TitleEventFieldAdd>
              <TouchableOpacity
                style={{alignSelf:'center'}}
                onPress={() => {
                  showDatepicker();
                }}>
                <ViewBackIcon>
                  <Icon name="plus" size={15} color="#000" />
                </ViewBackIcon>
              </TouchableOpacity>
              </View>
            </ViewRowEventAdd>
            <ViewBoxTime>
              <ViewSwitch>
                <TextCenterName>All day</TextCenterName>
                <Switch
                                  trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}

                  value={isSwitchOnTime}
                  onValueChange={() => {
                    setIsSwitchOnTime(!isSwitchOnTime)
                  }}
                />
              </ViewSwitch>
              {!isSwitchOnTime ? (
                <>
              <LineView></LineView>
              <FlatList
                data={arrayReaderTime}
                renderItem={({item, index}) => (
                  <ItemShowTime item={item} index={index} />
                )}
              />
              </>
              ):(null)}
            </ViewBoxTime>
            <TextBlue> </TextBlue>
            <View style={{width: `100%`, paddingLeft: 15, paddingRight: 15}}>
              <ViewSwitch>
                <TextCenterName>REPEAT</TextCenterName>

                {!isRepeat ? (
                  <View style={{alignSelf: 'center', paddingRight: 15}}>
                    <TouchableOpacity
                      onPress={() => {
                        setIsRepeat(!isRepeat);
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextCenterName>Never</TextCenterName>
                        <View style={{width: 10}} />
                        <Icon name="right" size={15} color="#000" />
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : (
                  null
                )}
              </ViewSwitch>
              <LineView></LineView>
              <View style={{marginTop: 20}} />
              <ViewSwitch>
                <TextCenterName>NOTES</TextCenterName>
              </ViewSwitch>
            </View>
            <View style={{marginTop: 15}} />

              <InputEventField
                onChangeText={e => {
                  addEventEdit.dataUpdate.description = e;
                }}
                placeholderTextColor={"#999"}

                placeholder={eventShowData.notes}
              />

            <View style={{height: 20}} />
            {show == true ? (
                    Platform.OS=='ios'?
                    <>

                    <DateTimePickerModal
                  isVisible={true}
                  mode={mode}
                  confirmTextIOS={`Confirm ${titleTime}`}
                  onConfirm={onSelectTypeTime}
                  onCancel={()=>{setShow(false)}}
                />
                </>
                  :
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onSelectTypeTime}
              />
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
              <AlertScreen value={setArrayReaderTimeAlert} show={setIsAlert} />
            </Modal>
          </ScrollViewCenter>
        </ViewMain>
        <Indicator isShowIndicator={isLoadingEv} />
        <Indicator isShowIndicator={isLoadingImage} />
        <RepeatCalender
        onDone={data=>
           {
             setIsRepeat(false)
             if(data.repeatDate!=0){
                addEventEdit.dataUpdate.repeatEndTime=data.repeatDate

             }else{

                   addEventEdit.dataUpdate.repeatEndCount=data.repeatCount
             }


             addEventEdit.dataUpdate.repeatFrequency=data.repeatFrequency
          addEventEdit.dataUpdate.repeatNum=data.repeatNum

      }
        }
        onClose={()=>
        {
          addEventEdit.dataUpdate.repeatFrequency=0;
          setIsRepeat(false)}}
        visible={isRepeat}/>
      </ScrollView>
      </KeyboardAvoidingView>

      </SafeAreaView>

    </>
  );
};
