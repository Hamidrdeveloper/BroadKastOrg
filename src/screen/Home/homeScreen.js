import React, {Component,useContext, useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import SwipeUpDown from 'react-native-swipe-up-down';
import {Calendar} from 'react-native-calendars';
import {CardListEvent} from './component/cardListEvent';
import {SwipeUp} from './component/swipeUp'
import moment from 'moment'

import {
  ViewMain,
  ImagePro,
  TextCenterName,
  ViewTopRow,
  ViewBackIcon,
  FlatListHorGroup,
  ViewHeaderMain,
  ViewFlctin,
  FlatListAllTap,
  ViewFlctinPlus,
  ViewOTPCenter,
  ViewOTP,
  TextOTP,
  ViewCreate,
  IconBackCreateEvent,
  ViewRowCreate,
  TextCreate,
  IconBackCreateGroup,
  IconBackCreateReminder,
  ViewBackModal,
  ViewBackImage,
} from './homeScreen.styles';
import {CollapsibleTabs} from '../../components/collaps';
import {FlatList, Modal, Text, Animated,TouchableOpacity, View} from 'react-native';
import {ItemListAllTab} from './component/itemListAllTab';
import {ItemListInvitesTab} from './component/itemListInvitesTab';
import {GroupsContext} from '../../services/group/group.context';
import {EventsContext} from '../../services/event/event.context';
import {RemindersContext} from '../../services/reminder/reminder.context';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors} from '../../infrastructure/theme/colors';
import {host} from '../../utils/env';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
import {CommonActions, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {InteractionManager} from 'react-native';
import {TestList} from './testList';
import Indicator from '../../components/Indicator';
import { HubConnection } from '../../services/hubConnection/hubConnection.context';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
import Contacts from 'react-native-contacts';
import {  MaskedViewPlus } from '../../components/maskedView';
import { MaskElement } from '../../components/maskElement';
import { checkUser } from '../../services/signup/dataPost';
import { MainContext } from '../../services/main/Main.context';
import { PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform ,Image} from 'react-native';

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

const Image_Http_URL = {
  data: {uri: `services/signup/sgnup.context`},
};
var scr = 0;
export const HomeScreen = ({navigation}) => {
  const initialValue = [{id: 0, value: ' --- Select a State ---'}];

  // static contextType = EventsContext

  // constructor(props) {
  //   super(props)
  //   this.state = { OTPActive: false, showAction: false }

  // }
  // componentDidMount(){
  const [OTPActive, setOTPActive] = useState(false);
  const [typeActiveItem, setTypeActiveItem] = useState(false);
  const [imagePro, setImagePro] = useState('');
  const [isShowBottom, setIsShowBottom] = useState(false);
  const [isShowIndicator, setIsShowIndicator] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(110000);
const animationValue = useRef(new Animated.Value(70)).current;
    const [isShowAnim, setIsShowAnim] = useState(false);

  const animatedStyle = {
        height : animationValue
      }
  const [allList, setAllList] = useState([]);
  const [isShowCalendar,setIsShowCalendar]=useState(false)
  const [listGoing, setListGoing] = useState([]);
  const [listInvites, setListInvites] = useState([]);
   const [markerEvent, setMarkerEvent] = useState([]);
  const {groupListUser, groupDeleteUser, groupAcceptUser, groupUser,isLoadingGroups} =
    useContext(GroupsContext);
    const {
      conectTo} =
    useContext(HubConnection);
  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    userReminders,
    isLoadingRemind
  } = useContext(RemindersContext);
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
    isLoadingEv
  } = useContext(EventsContext);

  const {friendshipListUser,setFriends,friends,setAddGestesEv,allContacts, setAllContacts} = useContext(FriendshipsContext)
  const {useMainContext} = useContext(MainContext)
  const {notifyHub,GetNotifications} = useContext(HubConnection)

  const {user,userProfile,checkUserInvite} = useContext(AuthenticationContext);
  const [numberNotify, setNumberNotify] = useState(0)
  let swipeUpDownRef =useRef(null);
  // }
  const _keyExtractor = (item, index) => item.id;
  useEffect(() => {
    setTimeout(() => {
    setNumberNotify(notifyHub.length);
  }, 100); }, [notifyHub])
  const requestCameraPermission = async () => {

    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
            title: 'Hey you need to give us CONTACTS permissions!',
            message: 'We need to read your CONTACTS so we can sell them to advertisers.'
        }
    )
    return granted === PermissionsAndroid.RESULTS.GRANTED

};
  const requestCameraPermissionCheck = async () => {

    const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    ).then(res =>{
      if (res === true){
        //Open scanner
        Contacts.getAll().then(valueC => {

          if (valueC==null) {


          }
          else {

            setAllContacts(valueC);

          }
        });

    }
    else if (res === false){
        Alert("Please enable CONTACTS permission in device settings.")
        requestCameraPermission();

    }

    }).catch(err=>{
      Alert("Please enable CONTACTS permission in device settings.")
    })


  };

  useEffect(() => {

    setTimeout(() => {
      if(Platform.OS=='ios'){
        Contacts.getAll().then(contacts => {
          if (contacts==null) {


          }
          else {

            setAllContacts(contacts);
          }
        })
      }

      if(Platform.OS=='android'){
        requestCameraPermissionCheck();

      }


    setAddGestesEv([]);
    setFriends([])
  }, 100); }, [])

  useEffect(() => {
    setTimeout(() => {
      var arryList =[];


    if(allContacts.length>0){
      allContacts.map((item, index)=>{
        console.log('allContacts',index)
        if(item.phoneNumbers.length>0){

          var value= item.phoneNumbers[0].number;
          var newStr = value.replace(/\s/g, "");
          arryList.push(newStr)
          checkUser.array=arryList;

        }


      if(index==allContacts.length-1){
        checkUserInvite();
        friendshipListUser()
      }

      })
    }

  }, 100); }, [allContacts]);
  useEffect(() => {
    setTimeout(() => {
    setIsShowIndicator(isLoadingEv);
  }, 100); }, [isLoadingEv]);
  useEffect(() => {
    setTimeout(() => {
    setIsShowIndicator(isLoadingRemind);
  }, 100); }, [isLoadingRemind]);

  useEffect(() => {
    setTimeout(() => {
    // groupListUser();

    const arr3 = [...userReminders, ...userEvents];
    var arrGo = [];
    var arrIn = [];
    userEvents.map(v => {
      if (v.accepted != null) {
        arrGo.push(v);
      } else {
        if (v.creatorId==user.id) {
          arrGo.push(v);
        }else{
          arrIn.push(v);

        }
      }
    });
    setListGoing(arrGo.sort((a,b)=>new Date(b.date ) - new Date(a.date)));
    setListInvites(arrIn.sort((a,b)=>new Date(b.date ) - new Date(a.date)));

    setAllList(arr3.sort((a,b)=>new Date(b.date ) - new Date(a.date)));

    const _format = 'YYYY-MM-DD'
    const _today = moment().format(_format)
    let arr = []
    let entry
    let checkDate

    const arrDates =arr3.filter((d,index) => {

const _today =moment(d.date).format(_format)
  if(!arr3.some(o => o.date === d.date)){
    entry = { [_today]:   {dots: [massage, workout], disabled: false}}

  }else{
    if(d.locationName== null){
      entry = { [_today]:   {dots: [massage], disabled: false}}

    }else{
      entry = { [_today]:    {dots: [ workout], disabled: false}}

    }

  }

arr.push(entry)

console.log('calender',entry)

// const markedDay = moment(d.value).format(_format)
// if (_today !== markedDay) {
    // console.log('push: ', markedDay)
// } else if () {
    // console.log('splice: ', d, i)
// }
})
arr = arr.map((a) => {
  // if(JSON.stringify(a): string).slice(1, -1)){
  //   var data = a.
  //   console.log('calendar=>',);
  //   return (JSON.stringify(a): string).slice(1, -1)
  // }else{
    return (JSON.stringify(a): string).slice(1, -1);
  // }

})

let arrString = arr.join(',')
let markedDates = JSON.parse('{' + arrString + '}')
console.log('calendar=>',markedDates);
setMarkerEvent(markedDates)
  }, 100); }, [userReminders, userEvents]);
  //  useEffect(() => {
  //   setOTPActive(false)
  //  }, 100); }, [navigation])
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Going'},
    {key: 'third', title: 'Invites'},
  ]);

  // .sort((a, b) => b.date.localeCompare(a.date))

  useEffect(() => {
    setTimeout(() => {
    if (isClickEvShow) {
      if(typeActiveItem==true){
        setIsClickEvShow(false);
        if (eventShowData.creatorId != user.id) {


          navigation.navigate('EventInviteScreen');
          setIsClickEvShow(false);
        } else {
          navigation.navigate('EventShowScreen');
          setIsClickEvShow(false);
        }
      }else{



        if (eventShowData.creatorId != user.id) {


          navigation.navigate('EventInviteScreen');
          setIsClickEvShow(false);
        } else {
          navigation.navigate('EventShowScreen');
          setIsClickEvShow(false);
        }
      }

    }

  }, 100); }, [eventShowData]);

  const handleScroll = event => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
    // if (this.ready && scrollPosition < SCROLL_TRIGGER) {
    //   // load more stuff here
    // }
  };
  const handleSize = (width, he) => {
    const position = scrollPosition + he - height;

    setHeight(he);
  };
useEffect(()=>{
  if(isShowCalendar){
    swipeUpDownRef.current.showFull()

    Animated.timing(animationValue, {
    toValue : 100,
    timing : 1500
    }).start(()=>{
    setIsShowAnim(true)
    });
  }else{

  }
},[isShowCalendar])
const toggleAnimation=()=>{

    if(isShowCalendar== false){
setIsShowCalendar(true);
eventListUser('')
reminderListUser('')
    }
    else{
        // swipeUpDownRef.current.showFull()
      Animated.timing(animationValue, {
        toValue : 70,
        timing : 1500
      }).start(      setIsShowAnim(false)

      );
      setIsShowCalendar(false);
    }
  }
  const monthsChangeData= (month)=>{
    eventListUser(month)

    reminderListUser(month)
  }
  const _flatList = useRef();

  const FirstRoute = () => (
    <View>
      <FlatListAllTap
       ref={_flatList}
       Inverting
       keyExtractor={(item, index) => String(index)}
       data={allList}
        renderItem={({item}) => <ItemListAllTab setTypeActiveItem={setTypeActiveItem} nav={navigation} item={item} />}
      />

    </View>
  );

  const SecondRoute = () => (
    <View>
      <FlatListAllTap
keyExtractor={(item, index) => String(index)}
  data={listGoing}
        renderItem={({item}) => <ItemListAllTab setTypeActiveItem={setTypeActiveItem} nav={navigation} item={item} />}
      />
    </View>
  );
  const ThirdRoute = () => (
    <View>
      <FlatListAllTap
keyExtractor={(item, index) => String(index)}
data={listInvites}
        renderItem={({item}) => <ItemListAllTab setTypeActiveItem={setTypeActiveItem} nav={navigation} item={item} />}
      />
    </View>
  );

  useEffect(() => {
    setTimeout(() => {
    Image_Http_URL.data = {uri: `${host}/${userProfile.photo}`};

    setImagePro(Image_Http_URL.data)
  }, 100); }, [userProfile]);

  useEffect(() => {
    // console.log("UserList","contacts");




    // friendshipListUser();

  useMainContext();


  }, [])
  return (
    <SafeAreaView>
    <ViewMain>
      <ViewHeaderMain>
        <ViewTopRow>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
           {userProfile.photo!=null?
            <ImagePro source={imagePro} />
          :<ViewBackImage/>}
          </TouchableOpacity>
          <TextCenterName>Bugle</TextCenterName>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NotifyScreen');
            }}>
            <ViewBackIcon>
            <Text>{numberNotify}</Text>
              <Icon name="bells" size={17} color={' rgba(78, 205, 196, 1)'} />

            </ViewBackIcon>

          </TouchableOpacity>
        </ViewTopRow>
       <View style={{width:`100%`,height:100}}>
       <MaskedViewPlus

element={<MaskElement>


</MaskElement>
}
>
<FlatListHorGroup
          data={groupUser}
          horizontal={true}
          keyExtractor={(item, index) => String(index)}

          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CardListEvent nav={navigation} item={item} />;
          }}

        />
</MaskedViewPlus>



       </View>


      </ViewHeaderMain>

      <TabView
        navigationState={{index, routes}}
        renderTabBar={props => (
          <TabBar
            {...props}
            activeColor="black"
            indicatorStyle={{backgroundColor: `${colors.text.blueLight}`}}
            inactiveColor="#999"
            style={{backgroundColor: '#f5fafc'}}
          />
        )} // <-- add this line
        activeColor="green"
        inactiveColor="green"
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
      />


      <Modal
        animationType="slide"
        transparent={true}
        visible={OTPActive}
        onRequestClose={() => {
          setOTPActive(false);
        }}>
        <TouchableOpacity
          onPress={() => {
            setOTPActive(false);
          }}>
        <ViewBackModal>
          <ViewOTPCenter>
          <TextCreate style={{color:"#fff",bottom:20}}>Create</TextCreate>

            <ViewCreate>
              <TouchableOpacity
                onPress={() => {
                  setOTPActive(false);

                  navigation.navigate('EventCreateScreen');
                }}>
                <ViewRowCreate>
                  <IconBackCreateEvent>
                    <Icon name="calendar" size={25} />
                  </IconBackCreateEvent>
                  <TextCreate>Event</TextCreate>
                </ViewRowCreate>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOTPActive(false);

                  navigation.navigate('GroupCreateScreen');
                }}>
                <ViewRowCreate>
                  <IconBackCreateGroup>
                    <Icon name="addusergroup" size={25} />
                  </IconBackCreateGroup>
                  <TextCreate>Group</TextCreate>
                </ViewRowCreate>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOTPActive(false);

                  navigation.navigate('ReminderScreen');
                }}>
                <ViewRowCreate>
                  <IconBackCreateReminder>
                    <Icon name="gift" size={25} />
                  </IconBackCreateReminder>
                  <TextCreate>Reminder</TextCreate>
                </ViewRowCreate>
              </TouchableOpacity>
            </ViewCreate>
          </ViewOTPCenter>
        </ViewBackModal>
          </TouchableOpacity>
      </Modal>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 65,
          right: 10,
          width: 50,
          height: 50,
          width: 50,

          height: 50,
        }}
        onPress={() => {
          setOTPActive(false);
          setOTPActive(true);
        }}></TouchableOpacity>

     <Indicator isShowIndicator={isLoadingEv} />
     <Indicator isShowIndicator={isLoadingGroups} />
     <Indicator isShowIndicator={isLoadingRemind} />
     {isShowCalendar==true?
     <View
     style={ {

       position: 'absolute',
       height:`40%`,
       width: `100%`,
       top: 40,


     }}>

      <SwipeUpDown


                itemFull={<Calendar
                  markingType={'multi-dot'}
                  onVisibleMonthsChange={(months) =>
                    {monthsChangeData(months[0].dateString)}
                  }

                    markedDates={markerEvent}

                />
                          }

onShowMini={() =>toggleAnimation()}

ref={swipeUpDownRef}
animation="easeInEaseOut"

onMoveDown={() => console.log('down')}
onMoveUp={() => console.log('up')}
disablePressToShow={false} // Press item mini to show full
style={{ backgroundColor: 'transparent' }} // style for swipe
/>
</View>:null
}
{isShowBottom == false ? (
  <View style={{position: 'absolute',right: 15,bottom: -30}}>
  <TouchableOpacity

    onPress={() => {
      setOTPActive(false);
      setOTPActive(true);
    }}>
    <ViewFlctinPlus>
      <Icon name="plus" size={17} />
    </ViewFlctinPlus>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{
toggleAnimation();
}}>
   <Animated.View style={[{
     color: colors.brand.primary,
   backgroundColor: `${colors.ui.quaternary}`,


   width: 50,
   height: 50,
   alignItems: 'center',
   justifyContent: 'center',
   borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
   shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
 }, animatedStyle]} >
       {
         isShowCalendar?
         <Image resizeMode={'cover'} style={{width: 18,height: 18,top:10}}source={require('../../../assets/fill.png')}  />
:
<Image resizeMode={'cover'} style={{width: 18,height: 18}}source={require('../../../assets/fill.png')}  />

       }

      </Animated.View>
</TouchableOpacity>
  </View>
) : null}
    </ViewMain>

    </SafeAreaView >
  );
};
