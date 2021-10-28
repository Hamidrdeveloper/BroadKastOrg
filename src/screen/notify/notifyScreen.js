import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {CardListNotify} from './component/cardListNotify';
import {
  ViewMain,
  ImagePro,
  TextCenterName,
  ViewTopRow,
  ViewBackIcon,
  FlatListHorGroup,
  ViewHeaderMain,
  ViewBackHeader,
  TextNumberNotify
} from './NotifyScreen.styles';
import { BackScreen } from '../../components/backScreen';
import { HubConnection } from '../../services/hubConnection/hubConnection.context';
import { EventsContext } from '../../services/event/event.context';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
import Indicator from '../../components/Indicator';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthenticationContext } from '../../services/signup/sgnup.context';
export const NotifyScreen = ({navigation}) => {
  const {notifyHub} = useContext(HubConnection)
  const [typeActiveItem, setTypeActiveItem] = useState(false);

  const {
    eventListUser,
    eventAddUser,
    eventEditUser,
    eventDeleteUser,
    eventAcceptUser,
    userEvents,
    userInvateEvents,
    userGoingEvents,
    eventShowData,
    isClickEvShow,
    setIsClickEvShow,
    typeLoadingEv,
    isLoadingEv,
    eventShowUser
  } = useContext(EventsContext);
  const {user,userProfile,checkUserInvite} = useContext(AuthenticationContext);

  const {friendshipListUser,setFriends,friends,
    setAddGestesEv,allContacts, setAllContacts,friendshipAcceptUser,friendshipDeclinedUser,setIsLoadingFriendsh,isLoadingFriendsh} = useContext(FriendshipsContext)
    useEffect(() => {
      setTimeout(() => {
      if (isClickEvShow) {
        if(typeActiveItem==true){
          setIsClickEvShow(false);
          navigation.navigate('EventShowScreen');
        }else{


        if (eventShowData.id != ' ') {
          if (eventShowData.creatorId != user.id) {


            navigation.navigate('EventInviteScreen');
            setIsClickEvShow(false);
          } else {
            navigation.navigate('EventShowScreen');
            setIsClickEvShow(false);
          }
        }
      }
      }

    }, 100); }, [eventShowData]);
  return (
    <SafeAreaView>
    <ViewMain>
      <ViewHeaderMain>
      <ViewBackHeader>
        <ViewTopRow>

        <BackScreen navigation={navigation}/>

        <TextCenterName>Notifications</TextCenterName>
          <ViewBackIcon>
          <TextNumberNotify>{notifyHub.length}</TextNumberNotify>
            <Icon name="bells" size={17} color={' rgba(78, 205, 196, 1)'} />

          </ViewBackIcon>
        </ViewTopRow>
        </ViewBackHeader>
        <FlatListHorGroup
          data={notifyHub}

          showsHorizontalScrollIndicator={false}
          renderItem={({item ,index})=> {
            return <CardListNotify
            onAddEv ={eventAcceptUser}
            onAddFreind={friendshipAcceptUser}
             onRejectEv ={eventDeleteUser}
             onRejectFreind={friendshipDeclinedUser}
             onShowEv= {eventShowUser}
             setIsClickEvShow={setIsClickEvShow}
             setTypeActiveItem={setTypeActiveItem}
             item={item}
             index={index}/>;
          }}
          keyExtractowr={item => item}
        />
      </ViewHeaderMain>
      
    </ViewMain>
    </SafeAreaView>
  );
};
