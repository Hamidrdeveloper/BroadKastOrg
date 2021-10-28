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
} from './GroupCreateScreen.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { BackScreen } from '../../components/backScreen';

import {Switch} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {View} from 'react-native';
import { GroupsContext } from '../../services/group/group.context';
import { addGroup, addGroupDefualt } from '../../services/group/dataPost';
import { TouchableOpacity } from 'react-native';
import { FileUploadContext } from '../../services/fileUpload/fileUpload.context';
import { launchImageLibrary } from 'react-native-image-picker';
import { Alert } from 'react-native';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
import { ItemAvatar } from '../../components/itemAvatar';
import Indicator from '../../components/Indicator';
import { colors } from '../../infrastructure/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';

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
}
export const GroupCreateScreen = ({navigation}) => {
  const [isSwitchOnEveryone, setisSwitchOnEveryone] = useState(false);
  const [isSwitchOnMembers, setisSwitchOnMembers] = useState(false);
  const [imagePicker, setImagePicker] = useState(null)
  const {setTypeGestes,addGestesGu,setAddGestesGu,friendshipListUser} = useContext(FriendshipsContext)
const {fileUploadUser,isLoadingImage} = useContext(FileUploadContext)
  const {
    groupListUser,
    groupAddUser,
    groupEditUser,
    groupDeleteUser,
    groupAcceptUser,
    isValidAdd,
    setIsValidAdd,
    isLoadingGroups
  }=useContext(GroupsContext);

useEffect(() => {
  setTimeout(() => {
  if(isValidAdd){
    navigation.navigate("Home")
    setIsValidAdd(false);
  }
}, 100);
}, [isValidAdd]);


useEffect(() => {
  friendshipListUser()
  setTimeout(() => {
  // setIsAddEvent(false);
   addGroup.data=addGroupDefualt;
   setAddGestesGu([]);

  }, 100);
}, [])
const editImageEditor = ()=>{
  launchImageLibrary(options, response => {
    if (response.didCancel) {
      Alert.alert('You did not select any image');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      let source = { uri: response.assets[0].uri };
      console.log(response)
      // ADD THIS
      setImagePicker({uri:response.assets[0].uri })

      fileUploadUser(response.assets[0],'group')
    }
  });

}
useEffect(() => {
  console.log('groupMembers',addGestesGu);

  addGroup.data.groupMembers = addGestesGu;

}, [addGestesGu])

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
      // adjust the value here if you need more padding
       style = {{ height: `100%`,width:`100%`,
       backgroundColor: `rgba(78, 205, 196, 0.05 )`
      }}
       behavior = "padding"
      >
      <ScrollView>
    <ViewMain>
      <ScrollViewCenter>
        <ViewTopRowHeader>
          <BackScreen navigation={navigation}/>

          <TextCenterName>Create GROUP</TextCenterName>
          <TouchableOpacity
          onPress={()=>{if(!isLoadingImage){groupAddUser()}}}>
          <TextCenterName>save</TextCenterName>
          </TouchableOpacity>
        </ViewTopRowHeader>

        <TouchableOpacity onPress={() => editImageEditor()}>
          <ImagePro  source={imagePicker}/>
          <ViewIconImage>
            <Icon name="plus" size={15} color="#000" />
          </ViewIconImage>
          </TouchableOpacity>
          <View style={{height: 30}}/>
        <TitleEventField>GROUP NAME</TitleEventField>
        <InputEventField
        onChangeText={e=>{
          addGroup.data.name=e
        }}
        placeholder={'Group name'} />
                <View style={{height: 30}}/>
        <ViewRowEventAdd>
          <TitleEventFieldAdd>MEMBERS</TitleEventFieldAdd>
          <View style={{flex:1,height:30,flexDirection:'row-reverse',alignItems:'center',}}>

            {addGestesGu!=null?
          addGestesGu.map((person, index)=>{
           return ( <View><ItemAvatar person={person}index={index}/></View>)
          }):null
        }
          </View>
          <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
            setTypeGestes('group')
            navigation.navigate('InvateScreen')}}>
          <ViewBackIcon>
            <Icon name="plus" size={15} color="#000" />
          </ViewBackIcon>
          </TouchableOpacity>
        </ViewRowEventAdd>
        <LineView></LineView>
        <View style={{height: 30}}/>
        <ViewRowEventAdd>
          <TitleEventFieldAdd>PERMISSIONS</TitleEventFieldAdd>
        </ViewRowEventAdd>
        <ViewBoxTime>
          <ViewSwitch>
            <TextCenterName>Everyone can create events</TextCenterName>
            <Switch
                              trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}

              value={isSwitchOnEveryone}
              onValueChange={() => {
                setisSwitchOnEveryone(!isSwitchOnEveryone);
                addGroup.data.everyoneCanCreateEvent=isSwitchOnEveryone;
              }}
            />
          </ViewSwitch>
          <View style={{height: 15}}/>
          <LineView></LineView>
          <View style={{height:15}}/>
          <ViewSwitch>
            <TextCenterName>All members can add members</TextCenterName>
            <Switch
                              trackColor={{true: colors.text.blueLight, false: colors.text.blueLightGray}}

              value={isSwitchOnMembers}
              onValueChange={() => {
                setisSwitchOnMembers(!isSwitchOnMembers);


                addGroup.data.allMemmberCandAddMemmber=isSwitchOnMembers;

              }}
            />
          </ViewSwitch>
        </ViewBoxTime>

        <View style={{marginTop: 15}} />
        <TitleEventField>DESCRIPTION</TitleEventField>
        <InputEventField
         onChangeText={e=>{
          addGroup.data.description=e
        }}
        placeholder={'Sample Music'} />
      </ScrollViewCenter>

    </ViewMain>
    </ScrollView>

    </KeyboardAvoidingView>
    <Indicator isShowIndicator={isLoadingGroups} />
    <Indicator isShowIndicator={isLoadingImage} />
    </SafeAreaView>
  );
};
