import React, { useContext, useEffect, useState } from 'react';
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
} from './GroupEditScreen.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { BackScreen } from '../../components/backScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Switch } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { GroupsContext } from '../../services/group/group.context';
import { addGroup, addGroupEdit } from '../../services/group/dataPost';
import { TouchableOpacity } from 'react-native';
import { FileUploadContext } from '../../services/fileUpload/fileUpload.context';
import { launchImageLibrary } from 'react-native-image-picker';
import { host } from '../../utils/env';
import { Alert } from 'react-native';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
import { ItemAvatar } from '../../components/itemAvatar';
import Indicator from '../../components/Indicator';
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
export const GroupEditScreen = ({ navigation }) => {
  const [isSwitchOnEveryone, setisSwitchOnEveryone] = useState(false);
  const [isSwitchOnMembers, setisSwitchOnMembers] = useState(false);
  const [imagePicker, setImagePicker] = useState(null)

  const {
    groupListUser,
    groupAddUser,
    groupEditUser,
    groupDeleteUser,
    groupAcceptUser,
    groupShowData,
    groupShowUser,
    setIsValidEdit,
    isValidEdit,
    isLoadingGroups
  } = useContext(GroupsContext);
  const { setTypeGestes, addGestesGu, setAddGestesGu } = useContext(FriendshipsContext)

  useEffect(() => {
    setTimeout(() => {
      if (isValidEdit) {
        navigation.navigate("GroupShowScreen")
        setIsValidEdit(false)
      }

    }, 100);
  }, [isValidEdit])
  useEffect(() => {

      setAddGestesGu(groupShowData.groupMembers);

      let Image_Http_URL = { uri: `${host}/${groupShowData.photo}` };

      setImagePicker(Image_Http_URL)
      addGroupEdit.dataUpdate = groupShowData;


  }, [])
  useEffect(() => {
    setTimeout(() => {
      console.log('addGestesEv', addGestesGu)

      addGroupEdit.dataUpdate.groupMembers = addGestesGu;
    }, 100);
  }, [addGestesGu])
  const { fileUploadUser ,isLoadingImage} = useContext(FileUploadContext)
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
        let source = { uri: response.assets[0].uri };
        console.log(response)
        // ADD THIS
        setImagePicker({ uri: response.assets[0].uri })

        fileUploadUser(response.assets[0], 'groupEdit')
      }
    });

  }
  return (
    <SafeAreaView>
      <ViewMain>

        <ScrollViewCenter>
          <ViewTopRowHeader>
            <BackScreen navigation={navigation} />

            <TextCenterName>Group Setting</TextCenterName>
            <TouchableOpacity
              onPress={() => {if(!isLoadingImage){ groupEditUser()} }}>
              <TextCenterName>save</TextCenterName>
            </TouchableOpacity>
          </ViewTopRowHeader>

          <TouchableOpacity onPress={() => editImageEditor()}>
            <ImagePro source={imagePicker} />
            <ViewIconImage>
              <Icon name="plus" size={15} color="#000" />
            </ViewIconImage>
          </TouchableOpacity>
                  <View style={{height: 30}}/>
          <TitleEventField>GROUP NAME</TitleEventField>
          <InputEventField
            onChangeText={e => {
              addGroupEdit.dataUpdate.name = e
            }}
            placeholderTextColor={"#999"}

            placeholder={groupShowData.name}
          />
                  <View style={{height: 30}}/>
          <ViewRowEventAdd>
            <TitleEventFieldAdd>MEMBERS</TitleEventFieldAdd>
            <View style={{ flex: 1, height: 30, flexDirection: 'row-reverse', alignItems: 'center', }}>

              {addGestesGu != null ?
                addGestesGu.map((person, index) => {
                  return (<View><ItemAvatar person={person} index={index} /></View>)
                }) : null
              }
            </View>
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
              setTypeGestes('group')
              navigation.navigate('InvateScreen')
            }}>
              <ViewBackIcon>
                <Icon name="plus" size={15} color="#000" />
              </ViewBackIcon>
            </TouchableOpacity>
          </ViewRowEventAdd>
          <LineView></LineView>
                  <View style={{height: 15}}/>
          <View style={{ marginTop: 15 }} />
          <TitleEventField>DESCRIPTION</TitleEventField>
          <InputEventField
            editable={true}
            multiline={true}

            onChangeText={e => {
              addGroupEdit.dataUpdate.description = e
            }}
            placeholderTextColor={"#999"}

            placeholder={groupShowData.description}
          />
        </ScrollViewCenter>
        <Indicator isShowIndicator={isLoadingGroups} />
<Indicator isShowIndicator={isLoadingImage} />
      </ViewMain>
    </SafeAreaView>
  );
};
