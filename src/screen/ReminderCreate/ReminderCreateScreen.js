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
} from './ReminderCreateScreen.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import {BackScreen} from '../../components/backScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import RepeatCalender from  '../../components/repeat/RepeatCalender'

import {Switch} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {View} from 'react-native';
import {RemindersContext} from '../../services/reminder/reminder.context';
import {TouchableOpacity} from 'react-native';
import {addReminders} from '../../services/reminder/dataPost';
import ScrollPicker from '../../components/scrollPicker';
import {LocationContext} from '../../services/location/location.context';
import {add} from 'react-native-reanimated';
import Indicator from '../../components/Indicator';
import {ItemShowTimeAlert} from '../../components/itemShowTimeAlert';
import {FlatList} from 'react-native';
import {AlertScreen} from '../../components/AlertScreen';
import {Modal} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';
import {RepetScreen} from '../../components/RepetScreen';
import { Platform } from 'react-native';
import { DatePickerIOS } from 'react-native';
import { DateTimePickerModal } from '../../components/datePicker/DateTimePickerModal';
import { Text } from 'react-native';
let form_to = 1;
var dateArrayAlert = {
  date: '',
  startTime: '1995-03-18T18:05:01.859Z',
  endTime: '2019-02-13T17:48:09.193Z',
};
let dateArrayAdd = [];
let dateArrayAlertAdd = [];
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
export const ReminderScreen = ({navigation}) => {
  const [isSwitchOnTime, setisSwitchOnTime] = useState(false);
  const [titleTime,setTitleTime]=useState("Date");
  const [isSwitchOnLocation, setisSwitchOnLocation] = useState(false);
  const {
    arrayLocationSelectEvent,
    setArrayLocationSelectEvent,
    typeLocation,
    setTypeLocation,
    setArrayLocationSelectRemind,

    arrayLocationSelectRemind,
  } = useContext(LocationContext);
  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    isLoadingRemind,
    isAddRemind,
    setIsAddRemind
  } = useContext(RemindersContext);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const [textDate, setTextDate] = useState('Choose one date');
  const [textTimeFrom, setTextTimeFrom] = useState('');
  const [textTimeTo, setTextTimeTo] = useState('');
  const [textLocation, setTextLocation] = useState('Add location');
  const [isRepeat, setIsRepeat] = useState(false);
  const [textDateAlert, setTextDateAlert] = useState('Fridey, Jul 8');
  const [textTimeFromAlert, setTextTimeFromAlert] = useState('9 PM');
  const [textTimeToAlert, setTextTimeToAlert] = useState('11 AM');
  const [typTimeSave, setTypTimeSave] = useState('date');
  const [arrayReaderTimeAlert, setArrayReaderTimeAlert] = useState([]);
  useEffect(() => {
      setIsAddRemind(false)
    setArrayLocationSelectRemind([])
    addReminders.data={}

  }, [])
  const onToggleSwitchTime = () => {
    setisSwitchOnTime(!isSwitchOnTime);
  };
  const onToggleSwitch = () => {
    setisSwitchOnLocation(!isSwitchOnLocation);
  };
  useEffect(() => {
    setTimeout(() => {
      if (isAddRemind == true) {
        navigation.navigate('Home');

      }
    }, 100);
  }, [isAddRemind]);
  useEffect(() => {
    console.log('arrayLocationSelectRemind',arrayLocationSelectRemind)
    setTimeout(() => {
      if (arrayLocationSelectRemind.length > 0) {
        setTextLocation(arrayLocationSelectRemind[0].name);
        addReminders.data.lat = arrayLocationSelectRemind[0].lat;
        addReminders.data.lng = arrayLocationSelectRemind[0].lng;

      }
    }, 100);
  }, [arrayLocationSelectRemind]);
  const onSelectTypeTime = (date) => {
    setTitleTime("Date")
    if (typTimeSave == 'T') {
      onChange( date);
    } else {
      onChangeAlert( date);
    }
  };
  const showDatepicker = () => {
    setTitleTime("Date")
    form_to=1
    setTypTimeSave('T');
    
    // setShow(false);
    
    setMode('date');

    setShow(true);
  };
  const onChange = ( selectedDate) => {
if (form_to === 5) {
    setShow(false);
}
    if (mode == 'date') {
      setTitleTime("Start Time")
      const currentDate = selectedDate || date;
      var dateData = new Date(selectedDate);

      setDate(currentDate);
      var locDate=monthNames[dateData.getMonth()] + ' ' + dateData.getDate()
      setTextDate(locDate);
      addReminders.data.date = dateData.toJSON();

      setMode('time');
      // setShow(false);
      // setShow(true);
    } else {
      if (form_to === 2) {
        setTitleTime("Date")
        setShow(false);


        form_to = 1;
        const currentDate = selectedDate || date;
        var dateData = new Date(selectedDate);

        var hours = dateData.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = dateData.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
        setDate(currentDate);
        setTextTimeTo(startTime);

        addReminders.data.endTime = dateData.toJSON();
      } else {
        setTitleTime("End Time")

        form_to = 2;
        // setMode('time');
        // setShow(false);

        // setShow(false);




        const currentDate = selectedDate || date;
        var dateData = new Date(selectedDate);
        var hours = dateData.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = dateData.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
        setDate(currentDate);
        setTextTimeFrom(startTime);
        addReminders.data.startTime = dateData.toJSON();
      }
    }
  };
  const showDatepickerForAlert = () => {
    setTypTimeSave('E');
    setIsAlert(true);
  };
  const onChangeAlert = (event, selectedDate) => {
    setShow(false);
    if (mode == 'date') {
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
      addReminders.data.reminderAlerts = arrayReaderTimeAlert;
    }, 100);
  }, [arrayReaderTimeAlert]);
  const showTimepicker = () => {
    setTypTimeSave('T');

    form_to = 1
    setShow(true);
  };
  return (
    <SafeAreaView>
    <ViewMain>
      <ScrollViewCenter>
        <ViewTopRowHeader>
          <BackScreen navigation={navigation} />

          <TextCenterName> Create Reminder</TextCenterName>
          <TouchableOpacity
            onPress={() => {
              reminderAddUser();
            }}>
            <TextCenterName>Add</TextCenterName>
          </TouchableOpacity>
        </ViewTopRowHeader>

        <TitleEventField>Reminder Title</TitleEventField>
        <InputEventField
          placeholderTextColor={'#999'}
          placeholder={'Reminder Title'}
          onChangeText={e => {
            addReminders.data.title = e;
          }}
        />
        <InputEventField
          placeholderTextColor={'#999'}
          placeholder={'Add notes'}
          onChangeText={e => {
            addReminders.data.notes = e;
          }}
        />
        <View style={{height:25,backgroundColor:"#0000"}}/>
        <ViewRowEventAdd>

          <TitleEventFieldAdd>TIME
          <TitleEventFieldAdd style={{color:colors.text.blueLight}}>     start-end</TitleEventFieldAdd></TitleEventFieldAdd>

          <Switch
            trackColor={{
              true: colors.text.blueLight,
              false: colors.text.blueLightGray,
            }}
            trackColor={{
              true: colors.text.blueLight,
              false: colors.text.blueLightGray,
            }}
            color={colors.text.blueLight}
            value={isSwitchOnTime}
            onValueChange={() => {
              onToggleSwitchTime();
            }}
          />
        </ViewRowEventAdd>
        {isSwitchOnTime ? (
          <ViewBoxTime>
            <ViewSwitch>
              <TouchableOpacity
                onPress={() => {
                  onToggleSwitchTime();
                }}>
                <TextCenterName>{textDate}</TextCenterName>
              </TouchableOpacity>
              <TouchableOpacity
              >
                <TextCenterName>{`${textTimeFrom}-${textTimeTo}`}</TextCenterName>
              </TouchableOpacity>
            </ViewSwitch>
          </ViewBoxTime>
        ) : null}
        <LineView></LineView>
        <View style={{height:15}}/>
        <ViewRowEventAdd>
          <TitleEventFieldAdd>LOCATION</TitleEventFieldAdd>
          <Switch
            trackColor={{
              true: colors.text.blueLight,
              false: colors.text.blueLightGray,
            }}
            color={colors.text.blueLight}
            value={isSwitchOnLocation}
            onValueChange={() => {
              onToggleSwitch(7);
            }}
          />
        </ViewRowEventAdd>
        {isSwitchOnLocation ? (
          <ViewBoxTime>
            <ViewSwitch>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GooglePlacesInput');
                  setTypeLocation('rimand');
                }}>
                <TextCenterName>{textLocation}</TextCenterName>
              </TouchableOpacity>
              {/* <TouchableOpacity
              onPress={() => {
                showTimepicker();
              }}>
              <TextCenterName>{`${textTimeFrom}-${textTimeTo}`}</TextCenterName>
            </TouchableOpacity> */}
            </ViewSwitch>
          </ViewBoxTime>
        ) : null}
        <ViewRowEventAdd>
          <TitleEventFieldAdd>Alert</TitleEventFieldAdd>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
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
        <TextBlue></TextBlue>
        <ViewSwitch>
          <TitleEventFieldAdd>REPEAT</TitleEventFieldAdd>
          {!isRepeat ? (
            <View style={{alignSelf: 'center', paddingRight: 15}}>
              <TouchableOpacity
                onPress={() => {
                  setIsRepeat(!isRepeat);
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
        <DateTimePickerModal
      isVisible={show}
      mode={mode}
      confirmTextIOS={`Confirm ${titleTime}`}
      onConfirm={onSelectTypeTime}
      onCancel={()=>{setShow(false)}}
    />
        {show === true ? (
          Platform.OS=='ios'?


      //     <DateTimePickerModal
      //   isVisible={show}
      //   mode={mode}
      //   confirmTextIOS={`Confirm ${titleTime}`}
      //   onConfirm={onSelectTypeTime}
      //   onCancel={()=>{setShow(false)}}
      // />
        null
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
      </ScrollViewCenter>
      <Indicator isShowIndicator={isLoadingRemind} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAlert}
        onRequestClose={() => {
          setIsAlert(false);
        }}>
        <AlertScreen value={setArrayReaderTimeAlert} show={setIsAlert} setIsAlert={setIsAlert} />
      </Modal>
      <RepeatCalender
      onDone={data=>
         {

           if(data.repeatDate!=0){
              addReminders.data.repeatEndTime=data.repeatDate

           }else{

                 addReminders.data.repeatEndCount=data.repeatCount
           }


           addReminders.data.repeatFrequency=data.repeatFrequency
        addReminders.data.repeatNum=data.repeatNum
      setIsRepeat(false)
    }
      }
      onClose={()=>
      {
        addReminders.data.repeatFrequency=0;
        setIsRepeat(false)}}
      visible={isRepeat}/>
    </ViewMain>
    </SafeAreaView>
  );
};
