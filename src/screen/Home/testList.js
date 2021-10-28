import React, { Component,useContext, useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {CardListEvent} from './component/cardListEvent';
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
  ViewBackModal
} from './homeScreen.styles';
import {CollapsibleTabs} from '../../components/collaps';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import {ItemListAllTab} from './component/itemListAllTab';
import {ItemListInvitesTab} from './component/itemListInvitesTab';
import { GroupsContext } from '../../services/group/group.context';
import { EventsContext } from '../../services/event/event.context';
import { RemindersContext } from '../../services/reminder/reminder.context';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { colors } from '../../infrastructure/theme/colors';
import { host } from '../../utils/env';
import { AuthenticationContext } from '../../services/signup/sgnup.context';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { InteractionManager } from 'react-native';

const Image_Http_URL={
  data:{uri: `services/signup/sgnup.context`}
};
var scr = [];
// const FirstRoute = (scr,navigation) => (
//     <View>
//       <FlatListAllTap

//     // onScrollBeginDrag={() => setIsShowBottom(false)}
//     // onScrollEndDrag={() => setIsShowBottom(true)}
//     // onScroll={(event)=>handleScroll(event)}

//     scrollEventThrottle={100}
//       data={scr}
//       renderItem={({item}) => <ItemListAllTab nav={navigation}item={item} />}
//     />
//       </View>
//   );
var arr3=[]

export const TestList=({navigation,setIsShowBottom})=>{
  const initialValue = [
    { id: 0, value: " --- Select a State ---" }];

  // static contextType = EventsContext

  // constructor(props) {
  //   super(props)
  //   this.state = { OTPActive: false, showAction: false }

  // }
// componentDidMount(){
  const[OTPActive,setOTPActive]= useState(false);

  const[scrollPosition,setScrollPosition]= useState(false);
  const[height,setHeight]= useState(110000);

  const[allList,setAllList]= useState(initialValue);
  const {
    groupListUser,
    groupDeleteUser,
    groupAcceptUser,
    groupUser
  }=useContext(GroupsContext);
  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    userReminders
  }=useContext(RemindersContext);
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
        setIsClickEvShow
  }=useContext(EventsContext);

  const {user} = useContext(AuthenticationContext)
// }
const _keyExtractor = (item, index) => item.key;


 useEffect(() => {
  // groupListUser();
  setTimeout(() => {
   arr3 = [...userReminders, ...userEvents]


  setAllList(arr3);


 }, 100); }, [userReminders,userEvents]);
 const handleScroll=()=>{
    setIsShowBottom(true)
 }
//  useEffect(() => {
//   setOTPActive(false)
//  }, 100); }, [navigation])
 const [index, setIndex] = React.useState(0);

 const [routes] = React.useState([
  { key: 'first', title: 'All' },
  { key: 'second', title: 'Going' },
  { key: 'third', title: 'Invites' },
]);

// .sort((a, b) => b.date.localeCompare(a.date))




 const _flatList = useRef()

const FirstRoute = () => {

    return(
        <View><FlatListAllTap
        keyExtractor={_keyExtractor}
        // onScrollBeginDrag={() => setIsShowBottom(false)}
        // onScrollEndDrag={() => setIsShowBottom(true)}
        // onScroll={(event)=>handleScroll(event)}
        ref={_flatList}
        scrollEventThrottle={100}
          data={allList}
          renderItem={({item}) => <ItemListAllTab nav={navigation}item={item} />}
        /></View>
    )

}
const [data, setData] = React.useState(null);
const [currentPos, setCurrentPos] = React.useState(0);

const ifCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
  var h=  layoutMeasurement.height+120;
  return h<contentOffset.y ;
};
useEffect(() => {
  setTimeout(() => {
    if(scrollPosition)
    _flatList.current.scrollToEnd()
  }, 100);
}, [scrollPosition])

const SecondRoute = () => (

  <View><FlatListAllTap
  keyExtractor={_keyExtractor}

    data={allList}
    renderItem={({item}) => <ItemListAllTab nav={navigation}item={item} />}
  /></View>
);
const ThirdRoute = () => (
  <View><FlatListAllTap
  keyExtractor={_keyExtractor}

    data={allList}
    renderItem={({item}) => <ItemListAllTab nav={navigation}item={item} />}
  /></View>
);

      return (

<>
      <TabView
  navigationState={{ index, routes }}
  renderTabBar={props =>
  <TabBar {...props} activeColor='black'     indicatorStyle={{ backgroundColor: `${colors.text.blueLight}` }}
  inactiveColor='#9cd7db' style={{backgroundColor: '#f5fafc',}}/>} // <-- add this line

  activeColor='green'
  inactiveColor='green'
  onIndexChange={setIndex}
  renderScene={SceneMap({
    first:FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  })}
/>

</>


  );

};
