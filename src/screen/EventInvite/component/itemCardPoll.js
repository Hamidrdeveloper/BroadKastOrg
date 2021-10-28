import {Text, View} from 'react-native';
import {
  CardItem,
  TextCard,
  ViewRow,
  TextCardBlueLight,
  CardLine,
  CardRemind,
  TextCardSmall,
  TextCardSmallBold,
  ViewLoction,
  ViewIconRelod,
} from './itemCardPoll.styles';
import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';

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


export const ItemCardPoll= ({item,index,activeLocation,type}) => {


  let dateEnd = new Date(item.endTime);
  var hours = dateEnd.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = dateEnd.getMinutes();
  var finalTime = hours + ':' + minutes + ' ' + AmOrPm;
  finalTime; // final time Time - 22:10

  let date = new Date(item.startTime);
  var hours = date.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = date.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
  startTime;
  return (
      <>
      {type=="Time"?

      <TouchableOpacity
      onPress={()=>activeLocation(index)}>
       <CardItem style={[{ borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,},item.desc==1?{backgroundColor:`${colors.text.blueLight}`}:{backgroundColor:'#fff'}]}>

            <TextCardSmallBold style={{flex:0.3,marginTop:15}}>{weekday[date.getDay()]}</TextCardSmallBold>
            <TextCardSmallBold style={{flex:0.3}}>{monthNames[date.getMonth()] + ' ' + date.getDate()}</TextCardSmallBold>
            <TextCardSmallBold style={{flex:0.5,fontSize:12}}>{startTime+"-"+finalTime}</TextCardSmallBold>


        </CardItem>

        </TouchableOpacity>


      :

      <TouchableOpacity
      onPress={()=>activeLocation(index)}>
       <CardItem style={[{ borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,},item.desc==1?{backgroundColor:`${colors.text.blueLight}`}:{backgroundColor:'#fff'}]}>

            <TextCardSmallBold style={{flex:0.3,marginTop:15}}>{item.name}</TextCardSmallBold>
            <TextCardSmallBold style={{flex:0.3,fontSize:13}}>{item.detail}</TextCardSmallBold>
            {/* <TextCardSmallBold style={{flex:0.5}}>{'sd'}</TextCardSmallBold> */}


        </CardItem>

        </TouchableOpacity>
      }
    </>
  );
};
