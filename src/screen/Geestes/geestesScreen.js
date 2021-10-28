import React, { useContext, useEffect, useState } from 'react';
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
} from './geestesScreen.styles';
import Contacts from 'react-native-unified-contacts';
// import SearchBar from './components/SearchBar';
// import Avatar from './components/ListItem';
import Icon from 'react-native-vector-icons/AntDesign';
import { BackScreen } from '../../components/backScreen';

import {ListItem} from './components/ListItem';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
import toastShow from '../../components/toastShow';
import { addEvent } from '../../services/event/dataPost';

type Props = {};
export const GeestesScreen= ({navigation})=> {
  const {friendshipListUser,friends,friendshipListUserActive} = useContext(FriendshipsContext)
  const [friendsActive, setFriendsActive] = useState(null)
  const addToBroadKast=(index)=>{
    let visitesList = [...friendsActive]; // copying the old datas array
    visitesList[index].desc = 1;


    setFriendsActive(visitesList)

        var friend = {id:visitesList[index].id,userId:visitesList[index].userId}
        addEvent.data.eventGuests=[...addEvent.data.eventGuests,friend]
    toastShow.show("Add Friend")
    friendshipListUserActive(addEvent.data.eventGuests)

  }
  const removePeople=(e)=> {
    var array = [...addEvent.data.eventGuests]; // make a separate copy of the array
    var index = array.findIndex(obj => obj.id === e.id);
    if (index !== -1) {
      array.splice(index, 1);
      addEvent.data.eventGuests=array;
      friendshipListUserActive(array)
    }
  }
  const undoToBroadKast=(index)=>{
    let visitesList = [...friendsActive]; // copying the old datas array
    visitesList[index].desc = 0;


    var removeIndex= {id:visitesList[index].id,userId:visitesList[index].userId}
    removePeople(removeIndex)
        setFriendsActive(visitesList)
    // addEvent.eventGuests=[...addEvent.eventGuests,]
    toastShow.show("Add Friend")

  }


  useEffect(() => {
    setTimeout(() => {  setFriendsActive(friends);

    }, 100);

}, [friends])


  // _checkIfUserCanAccessContacts() {
  //   Contacts.userCanAccessContacts( canUserAccessContacts => {
  //     this.setState( { canUserAccessContacts } );
  //   } );
  // }

  // _checkIfAlreadyRequestedAccessToContacts() {
  //   Contacts.alreadyRequestedAccessToContacts( alreadyRequestedAccessToContacts => {
  //     this.setState( { alreadyRequestedAccessToContacts } );
  //   } );
  // }
  // _requestAccessToContacts() {
  //   Contacts.requestAccessToContacts( canUserAccessContacts => {
  //     this.setState( {
  //       canUserAccessContacts,
  //       alreadyRequestedAccessToContacts: true
  //     } );
  //   } );
  // }
  // _getContacts() {

  //   Contacts.getContacts( ( error, contacts ) =>  {
  //     if ( error ) {
  //       console.error( error );
  //       this.setState({ loading: false });
  //       console.log("Startloading");
  //     }
  //     else {
  //          this.setState({ contacts, loading: false });
  //          console.log(contacts);
  //     }
  //   } );
  // }
  // async componentDidMount() {
  //   console.log("Start");

  //   if (Platform.OS === "android") {
  //     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //       title: "Contacts",
  //       message: "This app would like to view your contacts."
  //     }).then(() => {
  //       console.log("Start_getContacts");

  //      this._getContacts();
  //     });
  //   } else {
  //     console.log("Start_getContacts");
  //     this._getContacts();
  //   }
  // }

  // search(text) {
  //   const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
  //   const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  //   if (text === "" || text === null) {
  //     this.loadContacts();
  //   } else if (phoneNumberRegex.test(text)) {
  //     Contacts.getContactsByPhoneNumber(text).then(contacts => {
  //       this.setState({ contacts });
  //     });
  //   } else if (emailAddressRegex.test(text)) {
  //     Contacts.getContactsByEmailAddress(text).then(contacts => {
  //       this.setState({ contacts });
  //     });
  //   } else {
  //     Contacts.getContactsMatchingString(text).then(contacts => {
  //       this.setState({ contacts });
  //     });
  //   }
  // }

  // onPressContact(contact) {
  //   var text = this.state.typeText;
  //   this.setState({ typeText: null });
  //   if (text === null || text === '')
  //     Contacts.openExistingContact(contact)
  //   else {
  //     var newPerson = {
  //       recordID: contact.recordID,
  //       phoneNumbers: [{ label: 'mobile', number: text }]
  //     }
  //     Contacts.editExistingContact(newPerson).then(contact => {
  //       //contact updated
  //     });
  //   }
  // }

  // addNew() {
  //   Contacts.openContactForm({}).then(contact => {
  //     // Added new contact
  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //       loading: false
  //     }));
  //   })
  // }


    return (
      <SafeAreaView>
      <ViewMain>
        <ViewTopRowHeader>
          <BackScreen navigation={navigation}/>

          <TextCenterName>Geestes</TextCenterName>
          <TextCenterName></TextCenterName>
        </ViewTopRowHeader>

        <ViewRowSearchBar>
          <Icon name="search1" size={18} color="#000" />
          <View style={{width: 20}} />

          <TextInputSearch placeholder="Type Here..." />
        </ViewRowSearchBar>
        <View style={{height: 25}} />
        <CollapsibleTabs
          barColor="#f5fafc"

          activeTextColor="black"
          indicatorColor="#9cd7db"
          inactiveTextColor="#6b6b6b"
          tabs={[
            {
               label: 'Friends',
              component: (
                <FlatListAllTap
                  data={friendsActive}
                  renderItem={({item,index}) => <ListItem undoToBroadKast={undoToBroadKast} addToBroadKast={addToBroadKast}index={index}item={item} />}
                />
              ),
            },

          ]}
        />

        {/* {
          this.state.loading === true ?
            (
              <View style={styles.spinner}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : (
              <ScrollView style={{ flex: 1 }}>
                {this.state.contacts.map(contact => {
                  return (
                    <ListItem
                      leftElement={
                        <Avatar
                          // img={
                          //   require("../../../assets/vega.jpg")
                          // }
                          placeholder={getAvatarInitials(
                            `${contact.givenName} ${contact.familyName}`
                          )}
                          width={40}
                          height={40}
                        />
                      }
                      key={contact.recordID}
                      title={`${contact.givenName} ${contact.familyName}`}
                      description={`${contact.company}`}
                      onPress={() => this.onPressContact(contact)}
                      onDelete={() =>
                        Contacts.deleteContact(contact).then(() => {
                          this.loadContacts();
                        })
                      }
                    />
                  );
                })}
              </ScrollView>
            )
        } */}
      </ViewMain>
      </SafeAreaView>
    );
  }


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
