import React, {useContext, useEffect, useState} from 'react';
import { Alert } from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { BackScreen } from '../../components/backScreen';
import { OpenImagePicker } from '../../components/imagePickerStructure';
import { FileUploadContext } from '../../services/fileUpload/fileUpload.context';
import { editUser } from '../../services/signup/dataPost';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
import { host } from '../../utils/env';
import {ProfileEditor} from './profileEdite';
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
} from './profileScreen.styles';


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
export const ProfileScreen = ({navigation}) => {
  const {accountProfileUser, userProfile, isUpdate, changeViewEdite} = useContext(
    AuthenticationContext,
  );
  const {fileUploadUserProfile} = useContext(FileUploadContext)

  const [imagePicker, setImagePicker] = useState(null)

  const [isEdite, setIsEdite] = useState(true);
  useEffect(() => {
    setTimeout(() => {
    accountProfileUser();
  }, 100); }, []);

  useEffect(() => {
    setTimeout(() => {
    let Image_Http_URL = {uri: `${host}/${userProfile.photo}`};
    console.log("===>",Image_Http_URL);
    setImagePicker(Image_Http_URL)
    editUser.dataEdit = userProfile;
  }, 100); }, [userProfile])
  const editDataUser = () => {
    navigation.navigate("ProfileEditor")
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
        let source = { uri: response.assets[0].uri};
        console.log(response)
        // ADD THIS

        setImagePicker({uri:response.assets[0].uri})
        fileUploadUserProfile(response.assets[0])
      }
    });

  }


  return (
    <>

<SafeAreaView>
        <ViewMain>
          <ViewTopRowHeader>
           <BackScreen navigation={navigation}/>
            <TextCenterName  style={{
                    fontFamily: "TRYFinder-Light",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}>Profile</TextCenterName>
            <TouchableOpacity onPress={() => editDataUser()}>
              <TextCenterName  style={{
                    fontFamily: "TRYFinder-Light",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}>Edit</TextCenterName>
            </TouchableOpacity>
          </ViewTopRowHeader>
          <TouchableOpacity onPress={() => editImageEditor()}>
          <ImagePro source={imagePicker} />
          <View style={{height: 10}} />
          <TextCenterProfile>Edit Your Photo </TextCenterProfile>
          <View style={{height: 50}} />
          </TouchableOpacity>
          <ViewTopRow>
            <TextCenterName>Name </TextCenterName>
            <TextCenterName>{userProfile.fullname} </TextCenterName>
          </ViewTopRow>
          <ViewTopRow>
            <TextCenterName>Username </TextCenterName>
            <TextCenterName>{userProfile.username} </TextCenterName>
          </ViewTopRow>
          <ViewTopRow>
            <TextCenterName>Phone Number </TextCenterName>
            <TextCenterName>{userProfile.phoneNumber}</TextCenterName>
          </ViewTopRow>

          <View style={{height: 50}} />

        </ViewMain>
        </SafeAreaView>
    </>
  );
};
