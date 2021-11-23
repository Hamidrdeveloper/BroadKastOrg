import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  TextCenterName,
  ViewTopRowHeader,
} from '../screen/InviteFriends/InviteScreen.styles';
import {addEvent,addEventEdit} from '../services/event/dataPost';
import {LocationContext} from '../services/location/location.context';
import {addReminders,editReminders} from '../services/reminder/dataPost';
import {GooglePlacesAutocomplete} from './GooglePlacesAutocomplete';
import {ItemListLocation} from './ItemListLocation';
import toastShow from './toastShow';

const GooglePlacesInput = ({type, navigation: {goBack}}) => {
  const [arryLocation, setArryLocation] = useState([]);
  const [isFlatList, setIsFlatList] = useState(true);
  const {
    arrayLocationSelectEvent,
    setArrayLocationSelectEvent,
    typeLocation,
    setTypeLocation,
    setArrayLocationSelectRemind,
    arrayLocationSelectRemind,
  } = useContext(LocationContext);

  useEffect(() => {
    console.log('arrayLocationSelectEvent', arrayLocationSelectEvent);
    if (typeLocation == 'event') {
      setTimeout(() => {
        setArryLocation(arrayLocationSelectEvent);
        if (arrayLocationSelectEvent != null) {
        }

        setIsFlatList(true);
      }, 1000);
    }
    if (typeLocation == 'rimand') {
      if (arryLocation != null) {
        setArrayLocationSelectRemind(arryLocation);
      }
    }
  }, []);
  useEffect(() => {
    console.log('arryLocation', arryLocation);
    if (arryLocation != null) {
      switch (typeLocation) {
        case 'event':
          var array = [];
          if (arryLocation.length > 0) {
            addEvent.data.eventLocationPolls = arryLocation;

            console.log('eventLocationPolls', addEvent.data.eventLocationPolls);
            setArrayLocationSelectEvent([]);

            setTimeout(() => {
              setArrayLocationSelectEvent(arryLocation);
            }, 100);
          }
          break;
        case 'eventEdit':
          var array = [];
          if (arryLocation.length > 0) {
            addEventEdit.dataUpdate.eventLocationPolls = arryLocation;
            setArrayLocationSelectEvent([]);

            setTimeout(() => {
              setArrayLocationSelectEvent(arryLocation);
            }, 100);
          }
          break;

        case 'remind':
          if (arryLocation.length > 0) {
            addReminders.locationDetail = arryLocation[0].detail;
            addReminders.locationTitle = arryLocation[0].name;
          }
          break;
        case 'remindEdit':
          if (arryLocation.length > 0) {
            editReminders.dataPut.locationDetail = arryLocation[0].detail;
            editReminders.dataPut.locationTitle = arryLocation[0].name;
          }
          break;
        case 'rimand':
          setArrayLocationSelectRemind(arryLocation);
          break;
        default:
      }
    }
  }, [arryLocation]);

  const removeLocation = index => {
    var reArry = arryLocation;

    reArry.splice(index, 1);
    console.log(reArry);
    setArryLocation(null);
    setTimeout(() => {
      setArryLocation(reArry);
    }, 10);
    // setArryLocation(reArry);
  };
  return (
    <>
      <SafeAreaView>
        <View style={{height: `100%`}}>
          <ViewTopRowHeader>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}>
              <Icon name="arrowleft" size={20} color="#000" />
            </TouchableOpacity>

            <TextCenterName style={{textAlign: 'center'}}>
              {'Add Location'}
            </TextCenterName>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}>
              <TextCenterName>{'Save'}</TextCenterName>
            </TouchableOpacity>
          </ViewTopRowHeader>
          <GooglePlacesAutocomplete
            placeholder="Search"
            onChangeTextFlag={text => {
              setIsFlatList(false);
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log('data', data);
              console.log('details', details);
              if (arryLocation != null) {
                if (typeLocation == 'rimand') {
                  if (arryLocation.length < 1) {
                    var loc = {
                      name: data.place_name,
                      detail: data.text,
                      lat: data.center[0],
                      lng: data.center[1],
                    };
                    setArryLocation(oldArray => [...oldArray, loc]);
                    goBack();
                  } else {
                    toastShow.show('You are allowed to choose 1 places.');
                  }
                } else {
                  if (arryLocation.length < 4) {
                    var loc = {
                      name: data.place_name,
                      detail: data.text,
                      lat: data.center[0],
                      lng: data.center[1],
                    };
                    setArryLocation(oldArray => [...oldArray, loc]);
                  } else {
                    toastShow.show('You are allowed to choose 4 places.');
                  }
                }
              } else {
                setArryLocation(data);
              }

              setIsFlatList(true);
            }}
            query={{
              key: 'AIzaSyDnybmUyqZSusAtTOJ-FILf5DUz5b6Rwd0',
              language: 'en',
            }}
          />
          {isFlatList === true ? (
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 8,
                alignSelf: 'center',
                position: 'absolute',
                top: 120,
                width: `95%`,
                height: `70%`,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 3,
              }}>
              <FlatList
                style={{width: `100%`, height: `100%`, padding: 15}}
                data={arryLocation}
                renderItem={({item, index}) => (
                  <ItemListLocation
                    removeLocation={removeLocation}
                    index={index}
                    item={item}
                  />
                )}
              />
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </>
  );
};

export default GooglePlacesInput;
