import React, {useContext, useEffect, useState} from 'react';
import { Alert } from 'react-native';
import {AsyncStorage} from 'react-native';
import {View, Text, TouchableOpacity,TextInput} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { FileUploadContext } from '../../services/fileUpload/fileUpload.context';
import { editUser } from '../../services/signup/dataPost';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
import { host } from '../../utils/env';
import { BackScreen } from '../../components/backScreen';

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
  TextInputCenterProfile,
  ViewOTPCenter,
  ViewOTP,
} from './profileScreen.styles';
import { ButtonSugg, TitleButton, ViewRowButtonSugg } from '../EventShow/eventShowScreen.styles';
import { Modal } from 'react-native';
import Indicator from '../../components/Indicator';
import PhoneInput from 'react-native-phone-number-input';
import { colors } from '../../infrastructure/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
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
export const ProfileEditor = ({navigation}) => {
  const {fileUploadUser,isLoadingImage} = useContext(FileUploadContext)
  const [imagePicker, setImagePicker] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordTwo, setPasswordTwo] = useState('')
  const [OTPActive, setOTPActive] = useState(null)
  const {profileUpdateUser,user,userProfile,setPasswordUser,isPassword} = useContext(AuthenticationContext);


  useEffect(() => {
    setTimeout(() => {
    if(
      isPassword
    ){
      setOTPActive(false);
    }

  }, 100); }, [isPassword])
  useEffect(() => {
    console.log('user',user);
    setTimeout(() => {
    let Image_Http_URL = {uri: `${host}/${user.photo}`};
    setImagePicker(Image_Http_URL)

    editUser.dataEdit = user;
  }, 100); }, [])

  var token;
  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem('dataUser');

      var pars = JSON.parse(userAge);
      token = pars.data;
    } catch (e) {
    }
  };


  const editDataUser = () => {
    profileUpdateUser();
  };



  const editImageEditor = ()=>{
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
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
        fileUploadUser(response.assets[0],'profile')
      }
    });

  }
  return (
    <SafeAreaView>
    <ViewMain>
      <ViewTopRowHeader>
        <BackScreen navigation={navigation}/>

        <TextCenterName>Profile</TextCenterName>
        <TouchableOpacity onPress={() => {if(!isLoadingImage){editDataUser()}}}>
          <TextCenterName>Save</TextCenterName>
        </TouchableOpacity>
      </ViewTopRowHeader>


      <View style={{height: 10}} />
      <TextCenterProfile>Edit Your Photo </TextCenterProfile>
      <View style={{height: 30}} />
      <ViewTopRow>
        <TextCenterName>Name </TextCenterName>
        <TextInputCenterProfile
          value={userProfile.fullname}
          onChangeText={e => {
            editUser.dataEdit.fullname = e;
          }}
        />
      </ViewTopRow>
      <ViewTopRow>
        <TextCenterName>Username </TextCenterName>
        <TextInputCenterProfile
          value={userProfile.username}
          onChangeText={e => {
            editUser.dataEdit.username = e;
          }}
        />
      </ViewTopRow>
      <ViewTopRow style={{
        flexDirection:'column'
        ,alignItems:"start",
        justifyContent:'start'}}>
        <TextCenterName>Phone Number </TextCenterName>
         <View style={{height:10}}/>
               <PhoneInput


defaultCode="US"
layout="first"
withShadow

autoFocus
containerStyle={ {
  width: 400,
  color: `#000`,
  backgroundColor: `${colors.text.inverse}`,
}}
maxLength={10}
textInputStyle={{ color: `#000`,}}
codeTextStyle={{color: `#000`,}}
textContainerStyle={{
  paddingVertical: 0,
  backgroundColor: `${colors.text.inverse}`,
  color: `#000`,
}}
onChangeFormattedText={p => {
  editUser.dataEdit.phoneNumber = p;
}}
/>
      </ViewTopRow>

      <ViewTopRow>
      <TouchableOpacity
      onPress={()=>{setOTPActive(true)}}>
           <ViewTopRow>
        <TextCenterName>Password </TextCenterName>
        <Icon name="right" size={18} color="#000" />
        </ViewTopRow>
        </TouchableOpacity>
      </ViewTopRow>


      <View style={{height: 50}} />
      <TextCenterInfo>Private Info </TextCenterInfo>

      <ViewTopRow>
        <TextCenterName>Email </TextCenterName>
        <TextInputCenterProfile
          value={userProfile.email==null?"test369@gmail.com":null}
          onChangeText={e => {
            editUser.dataEdit.email = e;
          }}
        />
      </ViewTopRow>
      <Modal
            animationType="slide"
            transparent={true}
            visible={OTPActive}
            onRequestClose={() => {
              setOTPActive(false);
            }}>
              <View style={{backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',width:`100%`,height:`100%`}}></View>
            <ViewOTPCenter>
              <ViewOTP>

        <TextInput
        onChangeText={(text) =>   setPassword(text) }
        secureTextEntry={true}
        placeholder={user.hasPassword?"Please enter current Password":"Please enter new Password"}
        style={{borderWidth: 1,
           borderRadius: 8
           ,width:`100%`,
           textAlign: 'center'
           ,height: 48
           ,alignSelf:'center'
         ,  padding: 8,
       }}/>
       <View style={{height: 15}}/>
       {user.hasPassword?
        <TextInput
        onChangeText={(text)=> setPasswordTwo(text)}
        secureTextEntry={true}
        placeholder="Please enter new Password"
        style={{borderWidth: 1,
           borderRadius: 8
           ,width:`100%`,
           textAlign: 'center'
           ,height: 48
           ,alignSelf:'center'
         ,  padding: 8,
       }}/>:null}
<ViewRowButtonSugg>
              {/* <TouchableOpacity>
                <ButtonSugg>
                  <TitleButton>{'Decline'}</TitleButton>
                </ButtonSugg>
              </TouchableOpacity> */}
              <View style={{marginTop:15}}/>
              <TouchableOpacity
               onPress={()=>{setPasswordUser(password,user.token,userProfile,passwordTwo,user.hasPassword)}}>
                <ButtonSugg
                  style={{backgroundColor: 'rgba(78, 205, 196, 0.1 )'}}

                  styleDisabled={{color: 'red'}}
                  title="Submit">
                  <TitleButton style={{padding: 0}}>{'Set Password'}</TitleButton>
                </ButtonSugg>
              </TouchableOpacity>
            </ViewRowButtonSugg>
              </ViewOTP>
            </ViewOTPCenter>
          </Modal>
          <Indicator isShowIndicator={!isPassword} />
<Indicator isShowIndicator={isLoadingImage} />
    </ViewMain>
    </SafeAreaView>
  );
};
