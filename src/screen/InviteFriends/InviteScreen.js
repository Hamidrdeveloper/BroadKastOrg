/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, {useContext, useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
  Button,
} from 'react-native';
import {CollapsibleTabs} from 'react-native-collapsible-tabs';

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
  ViewRowSearchBar,
  FlatListAllTap,
} from './InviteScreen.styles';
// import Contacts from 'react-native-unified-contacts';
import SearchBar from './components/SearchBar';
import Avatar from './components/ListItem';
import Icon from 'react-native-vector-icons/AntDesign';

import {ListItem} from './components/ListItem';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors} from '../../infrastructure/theme/colors';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
import {checkUser} from '../../services/signup/dataPost';
import {FriendshipsContext} from '../../services/friendship/friendship.context';
import {ListItemFriendActive} from './components/ListItem/ListItemFriendActive';
import {addEvent} from '../../services/event/dataPost';
import {BackScreen} from '../../components/backScreen';

const data = {
  contacts: [],
};
import Contacts from 'react-native-contacts';

export const InvateScreen = ({navigation}) => {
  const {checkUserInvite, listValidUser} = useContext(AuthenticationContext);
  const [arryContacts, setArryContacts] = useState([]);
  const [arrayValid, setArrayValid] = useState([]);
  const [arrayUnValid, setArrayUnValid] = useState([]);
  const [phoneContacts, setPhoneContacts] = useState(null);
  const {setFriends, friends, setAddGestesEv, allContacts, setAllContacts} =
    useContext(FriendshipsContext);

  useEffect(() => {
    try {
    setTimeout(() => {
      if (friends != null) {
        var i = friends.map(object => {
          return {...object, desc: 0};
        });
        console.log(i);
        setFriends(i);
      }

      console.log('VALID', listValidUser);
      setArrayValid([]);
      setArrayUnValid(allContacts);

      if (allContacts != null) {
        var result = allContacts.filter(function (o1) {
          listValidUser.filter(function (o2) {
            if (o1.phoneNumbers[0] != null) {
              var value = o1.phoneNumbers[0].number;
              var newStr = value.replace(/\s/g, '');

              if (newStr == o2.phoneNumber) {
           
                  var value = {
                    fullName: o1.fullName,
                    phoneNumbers: o1.phoneNumbers,
                    id: o2.id,
                    userName: o2.userName,
                    isSelect: 0,
                  };
                  setArrayValid(old => [...old, value]);
             
              } else {
              }

              // return the ones with equal id
            }
          });
        });
      }

      // eslint-disable-next-line prettier/prettier
    }, 100);
  } catch(e) {
    console.log(e);
  }
  }, []);
  useEffect(() => {
    // setArryContacts([])
    try {
    setTimeout(() => {
      if (arrayUnValid != null && arrayValid != null) {
        var myArray = arrayUnValid.filter(
          ar =>
            !arrayValid.find(rm => rm.phoneNumbers[0] === ar.phoneNumbers[0]),
        );
        var array1 = arrayUnValid.filter(function (o1) {
          return arrayValid.filter(function (o2) {
            // eslint-disable-next-line keyword-spacing
            if (o1.phoneNumbers[0] != null) {
              // eslint-disable-next-line space-infix-ops
              // eslint-disable-next-line prettier/prettier
              if (o1.phoneNumbers[0].number == o2.phoneNumbers[0].number)
                return;
            }
          });
        });
        var interest = [];
        interest = [...arrayValid, ...arrayUnValid];

        setArryContacts(interest);
      }
    }, 100);
  }catch(e){
    console.log(e);
    
  }
  }, [arrayUnValid, arrayValid]);

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Friends'},
    {key: 'second', title: 'From contacts'},
  ]);

  const FirstRoute = () => (
    <View>
      <FlatListAllTap
        data={friends}
        renderItem={({index, item}) => (
          <ListItemFriendActive
            index={index}
            item={item}
            setArrayValid={setFriends}
            arrayValid={friends}
          />
        )}
      />
    </View>
  );

  const SecondRoute = () => (
    <View>
      <FlatListAllTap
        data={arryContacts}
        renderItem={({index, item}) => (
          <ListItem index={index} item={item} phoneContacts={arryContacts} />
        )}
      />
    </View>
  );
  const ThirdRoute = () => (
    <View>
      <FlatListAllTap
        data={[1, 2, 3, 4, 5]}
        renderItem={({index}) => <ListItem item={index} />}
      />
    </View>
  );
  const searchFilterFunction = text => {
    var interest = [];
    interest = [...arrayValid, ...arrayUnValid];

    const newData = interest.filter(item => {
      var itemData;

      if (item.displayName != null) {
        itemData = `${item.displayName.toUpperCase()}`;
      } else {
        if (item.fullName != null) {
          itemData = `${item.fullName.toUpperCase()}`;
        } else {
          itemData = `NULL`;
        }
      }

      const textData = text.toUpperCase();
      console.log(textData + '=====>' + itemData);
      return itemData.indexOf(textData) > -1;
    });

    setArryContacts(newData);
  };

  return (
    <>
      <SafeAreaView>
        <ViewMain>
          <ViewTopRowHeader>
            <BackScreen navigation={navigation} />

            <TextCenterName>Invite friends</TextCenterName>
            <TextCenterName></TextCenterName>
          </ViewTopRowHeader>

          <ViewRowSearchBar>
            <Icon name="search1" size={18} color="#000" />
            <View style={{width: 20}} />

            <TextInputSearch
              placeholder="Search friends"
              onChangeText={e => {
                searchFilterFunction(e);
              }}
            />
          </ViewRowSearchBar>
          <View style={{height: 25, width: 100}} />
          <View style={{height: `100%`, width: `100%`}}>
            <TabView
              navigationState={{index, routes}}
              renderTabBar={props => (
                <TabBar
                  {...props}
                  activeColor="black"
                  indicatorStyle={{backgroundColor: `${colors.text.blueLight}`}}
                  inactiveColor="#999"
                  style={{
                    backgroundColor: ' rgba(78, 205, 196, 0.05 )',
                    shadowColor: '#fff',
                  }}
                />
              )} // <-- add this line
              onIndexChange={setIndex}
              renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
              })}
            />
          </View>
        </ViewMain>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
});

const getAvatarInitials = textString => {
  if (!textString) return '';
  const text = textString.trim();
  const textSplit = text.split(' ');

  if (textSplit.length <= 1) return text.charAt(0);

  const initials =
    textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);

  return initials;
};
