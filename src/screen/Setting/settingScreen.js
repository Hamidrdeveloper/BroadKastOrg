import React, { useState } from 'react';
import { View ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ViewMain,
  ImagePro,
  TextCenterName,
  ViewTopRow,
  ViewBackIcon,
  TextCenterProfile,
  FlatListHorGroup,
  ViewHeaderMain,
  ViewBackHeader,
  TextNumberNotify,
  TextCenterInfo,
  ViewTopRowHeader,
  TextInputSearch,
  ViewRowSearchBar
} from './settingScreen.styles'
import { BackScreen } from '../../components/backScreen';

import { Switch } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';
export const Settingcreen = ({navigation}) => {
  const [ search,setSearch ] = useState('t');
  const [ Flag,setFlag] = useState('t');
  const [isSwitchOn, setIsSwitchOn] = useState([false,false,false,false,false,false,false,false]);
  const onToggleSwitch = (index) =>{
    let flag =isSwitchOn;

    let item = !flag[index];
    flag[index]=item;
    // console.log(flag)
    setIsSwitchOn(flag)
    setFlag(index+flag);

   };

  return (
    <SafeAreaView>
    <ViewMain>

        <ViewTopRowHeader>

        <BackScreen navigation={navigation}/>

        <TextCenterName>Setting</TextCenterName>
        <TextCenterName>Save</TextCenterName>


        </ViewTopRowHeader>




    <View style={{height:25}}/>
    <TextCenterInfo>NOTIFICTIONS</TextCenterInfo>
    <ViewTopRow>
    <TextCenterName>Pause all Notifictions </TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[0]} onValueChange={()=> {onToggleSwitch(0)}} />
    </ViewTopRow>
    <ViewTopRow>
    <TextCenterName>New groups </TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[1]} onValueChange={()=> {onToggleSwitch(1)}} />
    </ViewTopRow>
    <ViewTopRow>
    <TextCenterName>New events</TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[2]} onValueChange={()=> {onToggleSwitch(2)}} />
    </ViewTopRow>
    <ViewTopRow>
    <TextCenterName>New messages </TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[3]} onValueChange={()=> {onToggleSwitch(3)}} />
    </ViewTopRow>
    <View style={{height:25}}/>
    <TextCenterInfo>LOCATION </TextCenterInfo>
    <ViewTopRow>
    <TextCenterName>Allow location access </TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[4]} onValueChange={()=> {onToggleSwitch(4)}} />
    </ViewTopRow>
    <View style={{height:25}}/>
    {/* <ViewTopRow>
    <TextCenterName>Enable google calender</TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[5]} onValueChange={()=> {onToggleSwitch(5)}} />
    </ViewTopRow> */}
    {/* <ViewTopRow>
    <TextCenterName>Contacts</TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[6]} onValueChange={()=> {onToggleSwitch(6)}} />
    </ViewTopRow> */}
    {/* <ViewTopRow>
    <TextCenterName>Photo library </TextCenterName>
    <Switch                   trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}
value={isSwitchOn[7]} onValueChange={()=> {onToggleSwitch(7)}} />
    </ViewTopRow> */}
    </ViewMain>
    </SafeAreaView>
  );
};
