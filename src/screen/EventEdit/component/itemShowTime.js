import { TouchableOpacity } from "react-native";
import { TextCenterName, ViewSwitch } from "./itemShowTime.style";
import React from 'react'
export const ItemShowTime=({item})=>{
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
    let dateOrg = new Date(item.date);
  let date = new Date(item.startTime);
  var hours = date.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = date.getMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;

  let dateEnd = new Date(item.endTime);
  var hours = dateEnd.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = dateEnd.getMinutes();
  var endTime = hours + ':' + minutes + ' ' + AmOrPm;


    return(
     <>
  <ViewSwitch>
            <TouchableOpacity
             >
              <TextCenterName>{monthNames[dateOrg.getMonth()] + ' ' + dateOrg.getDate()}</TextCenterName>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <TextCenterName>{`${startTime} - ${endTime}`}</TextCenterName>
            </TouchableOpacity>
          </ViewSwitch>
     </>
    )
}