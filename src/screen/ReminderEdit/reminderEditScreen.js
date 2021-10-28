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
} from './reminderEditScreen.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BackScreen } from '../../components/backScreen';
import RepeatCalender from  '../../components/repeat/RepeatCalender'

import {Switch} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {View} from 'react-native';
import { RemindersContext } from '../../services/reminder/reminder.context';
import { TouchableOpacity } from 'react-native';
import { addReminders, editReminders } from '../../services/reminder/dataPost';
import Indicator from '../../components/Indicator';
import { LocationContext } from '../../services/location/location.context';
import { FlatList } from 'react-native';
import { ItemShowTimeAlert } from '../../components/itemShowTimeAlert';
import { AlertScreen } from '../../components/AlertScreen';
import { Modal } from 'react-native';
import { RepetScreen } from '../../components/RepetScreen';
import { colors } from '../../infrastructure/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DateTimePickerModal } from '../../components/datePicker/DateTimePickerModal';

let form_to = 1;
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
var dateArrayAlert = {
  date: "",
  startTime: "1995-03-18T18:05:01.859Z",
  endTime: "2019-02-13T17:48:09.193Z"}
let dateArrayAdd = [];
let dateArrayAlertAdd = [];
export const ReminderEditScreen = ({navigation}) => {
  const [isSwitchOnTime, setisSwitchOnTime] = useState(false);
  const [isSwitchOnLocation, setisSwitchOnLocation] = useState(true);

  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    reminderDataShowUser,
    isLoadingEditRemind,
    isLoadingRemind,
    setIsLoadingEditRemind
  }=useContext(RemindersContext);
  const {arrayLocationSelectEvent,
    setArrayLocationSelectEvent,
    typeLocation,
    setTypeLocation,
    setArrayLocationSelectRemind,
    arrayLocationSelectRemind} = useContext(LocationContext)
  const [date, setDate] = useState(new Date(reminderDataShowUser.startTime));
  const [dateT, setDateT] = useState(new Date(reminderDataShowUser.date));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [titleTime,setTitleTime]=useState("Date");


  const [arrayReaderTimeAlert, setArrayReaderTimeAlert] = useState(reminderDataShowUser.reminderAlerts);

  const [isRepeat, setIsRepeat] = useState(false);

  var hours = date.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = date.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
  startTime;
  let dateEndTime = new Date(reminderDataShowUser.endTime);
  var hoursEndTime = dateEndTime.getHours(); // gives the value in 24 hours format
  var AmOrPm = hoursEndTime >= 12 ? 'PM' : 'AM';
  hoursEndTime = hoursEndTime % 12 || 12;
  hoursEndTime = hoursEndTime < 10 ? '0' + hoursEndTime : hoursEndTime;
  var minutes = dateEndTime.getMinutes();
  var endTime = hoursEndTime + ':' + minutes + ' ' + AmOrPm;
  endTime;
  const [textDate, setTextDate] = useState(`${monthNames[dateT.getMonth()]} ${dateT.getDate()}`);
  const [textTimeFrom, setTextTimeFrom] = useState(startTime);
  const [textTimeTo, setTextTimeTo] = useState(endTime);
  const [textLocation, setTextLocation] = useState(reminderDataShowUser.locationTitle);
  const [textDateAlert, setTextDateAlert] = useState('Fridey, Jul 8');
  const [textTimeFromAlert, setTextTimeFromAlert] = useState('9 PM');
  const [textTimeToAlert, setTextTimeToAlert] = useState('11 AM');
  const [typTimeSave, setTypTimeSave] = useState('date');

  useEffect(() => {
    setTimeout(() => {
    editReminders.dataPut=reminderDataShowUser;
    if(reminderDataShowUser.startTime!=null){
      setisSwitchOnTime(true)

    }else{
      setisSwitchOnTime(false)

    }
  }, 100); }, [])
  useEffect(() => {
    setTimeout(() => {
    if(arrayLocationSelectRemind.length>0){
      if(arrayLocationSelectRemind[0].name!=null){
        setTextLocation(arrayLocationSelectRemind[0].name)
        editReminders.dataPut.lat=arrayLocationSelectRemind[0].lat
        editReminders.dataPut.lng=arrayLocationSelectRemind[0].lng
        editReminders.dataPut.locationTitle=arrayLocationSelectRemind[0].name
      }



    }
  }, 100); }, [arrayLocationSelectRemind])


  const onToggleSwitchTime = () => {
    setisSwitchOnTime(!isSwitchOnTime);
  };
  const onToggleSwitch = () => {
    setisSwitchOnLocation(!isSwitchOnLocation);
  };

  const onSelectTypeTime=(event, selectedDate)=>{
    if(typTimeSave=='T'){
     onChange(event, selectedDate);
    }else{
     onChangeAlert(event, selectedDate);
    }


      }


  const showDatepicker = () => {
    setTypTimeSave('T');
    setMode('date');
    form_to=1
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
      editReminders.dataPut.date = dateData.toJSON();

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

        editReminders.dataPut.endTime = dateData.toJSON();
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
        editReminders.dataPut.startTime = dateData.toJSON();
      }
    }
  };
  const showDatepickerForAlert=()=>{

    setIsAlert(true);

    }
      const onChangeAlert = (event, selectedDate) => {

      setShow(false);
        if (mode == 'date') {
          var currentDate = selectedDate ;
          // setShow(Platform.OS === 'ios');


          var dateValue = new Date(selectedDate);
          dateArrayAlertAdd.date=dateValue.toISOString();

          // setTextDate(dateValue.toJSON());
          // addEvent.date = dateValue.toJSON();
          setMode('time');
          setShow(false);
          setShow(true);

          dateArrayAlertAdd.push()

          // console.log('oldArray',arrayReaderTime)

          // console.log('newArray',arrayReaderTime)
          dateArrayAlert.date=dateValue;


        } else {
          if (form_to== 2) {
            const currentDate = selectedDate ;
            form_to = 1;
              setMode('date');
              setDate(new Date(1598051730000));
            var dateValue = new Date(selectedDate);
            setTextTimeToAlert(dateValue.getHours());


            dateArrayAlert.endTime=dateValue;



            setShow(false);
            setShow(false);
            var t=new Date(dateArrayAlert.startTime)
            var d=new Date(dateArrayAlert.date)
            let dateOrg = new Date(dateArrayAlert.date);
            let date = new Date(dateArrayAlert.startTime);

            var dayOp = { day: '2-digit'};
            var yearOp = { year: 'numeric'};
            var monthOp = { month: '2-digit'};
            var valueDay =new Intl.DateTimeFormat('en-GB', dayOp).format(d);
            var valueYear  =new Intl.DateTimeFormat('en-US', yearOp).format(d);
            var valueMonth=new Intl.DateTimeFormat('en-US', monthOp).format(d);
            var valueTime = new Intl.DateTimeFormat('en-GB', {
              hour: '2-digit', minute: '2-digit', second: '2-digit',
              hour12: false
            }).format(t);



             var time =`${d.getFullYear()}-${valueMonth}-${valueDay}T${valueTime}Z`
             setArrayReaderTimeAlert(oldArray => [...oldArray, {agoMinute:time}]);

          } else {
            var dateValue = new Date(selectedDate);

            const currentDate = selectedDate ;


            setTextTimeFromAlert(dateValue.getHours());

            form_to = 2;
            setMode('time');
            setShow(false);
            setShow(true);


            dateArrayAlert.startTime=dateValue;


          }
        }


  }
  useEffect(() => {
    setTimeout(() => {
   if(isLoadingEditRemind){

    navigation.navigate("ReminderShowScreen")
          setIsLoadingEditRemind(false)
   }

  }, 100); }, [isLoadingEditRemind])

  useEffect(() => {
    setTimeout(() => {
    editReminders.dataPut.reminderAlerts=arrayReaderTimeAlert;

  }, 100);
}, [arrayReaderTimeAlert]);

  const showTimepicker = () => {
    form_to = 1;
    setShow(false);
    setMode('time');
    setShow(true);
  };
  return (
    <SafeAreaView>
    <ViewMain>
      <ScrollViewCenter>
        <ViewTopRowHeader>
          <BackScreen navigation={navigation}/>

          <TextCenterName> Create Reminder</TextCenterName>
          <TouchableOpacity
          onPress={()=>{reminderEditUser()}}>
          <TextCenterName>Save</TextCenterName>

          </TouchableOpacity>
        </ViewTopRowHeader>

        <TitleEventField>Reminder Title</TitleEventField>
        <InputEventField value={reminderDataShowUser.title}
        onChangeText={(e)=>{ editReminders.dataPut.title=e}}/>
        <InputEventField value={reminderDataShowUser.notes}
        onChangeText={(e)=>{ editReminders.dataPut.notes=e}} />
        <View style={{marginTop:15}}/>
        <ViewRowEventAdd>
          <TitleEventFieldAdd>TIME</TitleEventFieldAdd>
          <Switch
                            trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}

            value={isSwitchOnTime}
            onValueChange={() => {
              onToggleSwitchTime();
            }}
          />
        </ViewRowEventAdd>
        {isSwitchOnTime?
        <ViewBoxTime>

          <ViewSwitch>
            <TouchableOpacity
              onPress={() => {
                showDatepicker();
              }}>
              <TextCenterName>{textDate}</TextCenterName>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                showTimepicker();
              }}>
              <TextCenterName>{`${textTimeFrom}-${textTimeTo}`}</TextCenterName>
            </TouchableOpacity>
          </ViewSwitch>
        </ViewBoxTime>
        :null}
        <LineView></LineView>
        <View style={{marginTop:15}}/>
        <ViewRowEventAdd>
          <TitleEventFieldAdd>LOCATION</TitleEventFieldAdd>
          <Switch
                            trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}

            value={isSwitchOnLocation}
            onValueChange={() => {
              onToggleSwitch(7);
            }}
          />

        </ViewRowEventAdd>
        {isSwitchOnLocation?
        <ViewBoxTime>

          <ViewSwitch>
            <TouchableOpacity
             onPress={() => {navigation.navigate('GooglePlacesInput')
             setTypeLocation('rimand')
             }}
             >
              <TextCenterName>{textLocation==null?"Add location":textLocation}</TextCenterName>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                showTimepicker();
              }}>
              <TextCenterName>{`${textTimeFrom}-${textTimeTo}`}</TextCenterName>
            </TouchableOpacity> */}
          </ViewSwitch>
        </ViewBoxTime>
        :null}
       <ViewRowEventAdd>
          <TitleEventFieldAdd>Alert</TitleEventFieldAdd>
          <TouchableOpacity
          style={{alignSelf:'center'}}
          onPress={()=>{showDatepickerForAlert()}}>
          <ViewBackIcon>
            <Icon name="plus" size={15} color="#000" />
          </ViewBackIcon>
          </TouchableOpacity>
        </ViewRowEventAdd>
        <ViewBoxTime>

          <LineView></LineView>
          <FlatList
            data={arrayReaderTimeAlert}
            renderItem={({item, index}) => (<ItemShowTimeAlert item={item} index={index}/>)}
          />
        </ViewBoxTime>
        <TextBlue></TextBlue>
        <ViewSwitch>
          <TitleEventFieldAdd>REPEAT</TitleEventFieldAdd>
          {!isRepeat?
          <View style={{alignSelf:'center',paddingRight:15}}>
             <TouchableOpacity
             onPress={()=>{
               setIsRepeat(!isRepeat)
             }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>



            <TextCenterName>Never</TextCenterName>
            <View style={{width: 10}} />
            <Icon name="right" size={15} color="#000" />
          </View>
          </TouchableOpacity>
          </View>
          :null}
        </ViewSwitch>

        <DateTimePickerModal
      isVisible={show}
      mode={mode}
      confirmTextIOS={`Confirm ${titleTime}`}
      onConfirm={onSelectTypeTime}
      onCancel={()=>{setShow(false)}}
      />
        {Platform.OS=='ios'?
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
        }


      </ScrollViewCenter>
      <Indicator isShowIndicator={isLoadingRemind} />
      <Modal
              animationType="slide"
              transparent={true}
              visible={isAlert}
              onRequestClose={() => {
                setIsAlert(false);
              }}>
              <AlertScreen value={setArrayReaderTimeAlert} show={setIsAlert} />
            </Modal>
            <RepeatCalender
            onDone={data=>
               {

                 if(data.repeatDate!=0){
                  editReminders.dataPut.repeatEndTime=data.repeatDate

                 }else{

                     editReminders.dataPut.repeatEndCount=data.repeatCount
                 }


               editReminders.dataPut.repeatFrequency=data.repeatFrequency
            editReminders.dataPut.repeatNum=data.repeatNum
            setIsRepeat(false)
          }
            }
            onClose={()=>
            {
            editReminders.dataPut.repeatFrequency=0;
              setIsRepeat(false)}}
            visible={isRepeat}/>
    </ViewMain>
    </SafeAreaView>
  );
};
