import { TouchableOpacity } from "react-native";
import { TextCenterName, ViewSwitch } from "./itemShowTime.style";
import React from 'react'
export const ItemShowTimeAlert=({item})=>{
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
    let dateOrg = new Date(item.agoMinute);
  let date = new Date(item.agoMinute);
  var hours = date.getUTCHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = date.getUTCMinutes();
  var startTime = hours + ':' + minutes + ' ' + AmOrPm;
  var time = 0;


  var h = item.agoMinute/60
  var m = item.agoMinute/60%24
  var s = item.agoMinute%60;
  if(h>0){
    time =h+' hours ago';
    if((h/24)>=1){
      time =h/24+' days ago';

    }
  }
  if(s>0){
    time =s+' minutes ago';
  }


    return(
     <>
  <ViewSwitch>
            <TouchableOpacity
             >
              {/* <TextCenterName>{monthNames[dateOrg.getMonth()] + ' ' + dateOrg.getDate()}</TextCenterName> */}
            </TouchableOpacity>
            <TouchableOpacity
            >
            <TextCenterName>{time}</TextCenterName>
            </TouchableOpacity>
          </ViewSwitch>
     </>
    )
}