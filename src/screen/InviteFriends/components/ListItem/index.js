/* eslint-disable prettier/prettier */
import React, {Component, useContext, useEffect, useState} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Platform,
  Image,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Avatar, Button} from 'react-native-paper';
import {AuthenticationContext} from '../../../../services/signup/sgnup.context';
import {host} from '../../../../utils/env';
import {FriendshipsContext} from '../../../../services/friendship/friendship.context';
import {colors} from '../../../../infrastructure/theme/colors';
import {Share} from 'react-native';

export const ListItem = ({item, index, phoneContacts}) => {
  const [arrPhone, setArrPhone] = useState([]);
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState(null);
  const {checkUserInvite, listValidUser} = useContext(AuthenticationContext);
  const {friendshipAddUser} = useContext(FriendshipsContext);

  useEffect(() => {
    setTimeout(() => {
      if (phoneContacts != null) {
        if(phoneContacts[index].phoneNumbers!=null){
      
        if (phoneContacts[index].phoneNumbers[0] != null) {
          if (phoneContacts[index].phoneNumbers[0].number != null) {
            setPhone(phoneContacts[index].phoneNumbers[0].number);
          }
         
          if (phoneContacts[index].phoneNumbers[0].label != null) {
            setName(phoneContacts[index].phoneNumbers[0].label);
          }
        }
      }
    }
      //   var arrayCehck =[];
      //   listValidUser.fi
      // arrayCehck.findIndex(phone,)
    }, 100);
  }, []);

  const addUser = id => {
    friendshipAddUser(id);
  };
  const share = () => {
    try {
      Share.share({
        title: 'React Native Share',
        message: 'Let me share this text with other apps',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  var IMAGE_HTTP = {uri: `${host}/f/Profiles/${item.id}.jpg`};

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          alignItems: 'center',
          paddingLeft: 15,
        }}>
        <Image
          style={{
            width: 35,
            height: 35,
            borderRadius: 40,
            backgroundColor: colors.text.blueLight,
          }}
          source={IMAGE_HTTP}
        />
        {/* <Avatar.Text size={24} label={item.fullName} /> */}
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily: 'TRYFinder-Light',
            }}>
            {item.fullName == null ? item.displayName : item.fullName}
          </Text>
          {(name != null) & (item.userName == null) ? (
            <Text>{name}</Text>
          ) : null}
          <Text>{item.userName != null ? item.userName : phone}</Text>
        </View>
        {item.userName != null ? (
          <Button
            onPress={() => {
              addUser(item.id);
            }}
            style={{
              width: 100,
              height: 40,
              borderRadius: 30,
              borderColor: 'rgba(78, 205, 196, 1)',
              borderWidth: 1,
              backgroundColor: 'rgba(78, 205, 196, 0.4)',
              position: 'absolute',
              right: 15,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'TRYFinder-Light',
              }}>
              Request
            </Text>
          </Button>
        ) : (
          <Button
            onPress={() => {
              share();
            }}
            style={{
              width: 100,
              height: 40,
              borderRadius: 30,
              borderColor: '#fff',
              borderWidth: 1,
              backgroundColor: '#ffff',
              position: 'absolute',
              right: 15,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'TRYFinder-Light',
              }}>
              Invite
            </Text>
          </Button>
        )}
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#4ECDC4',
          marginTop: 5,
        }}
      />
    </View>
  );
};

export default ListItem;
