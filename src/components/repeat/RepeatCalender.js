import React, { Component, useContext, useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { View, FlatList, Modal, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from '../infrastructure/theme/colors';
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { Checkbox } from 'react-native-paper';
import { DateTimePickerModal } from '../datePicker/DateTimePickerModal';

const Title = ['Day', 'Week', 'Month', 'Year'];
const RepeatCalender = ({ visible, onDone, onClose }) => {
  const [isDate, setIsDate] = useState(false);
  const [date, setDate] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [indexF, setIndexF] = useState(1);
  const [isDone, setIsDone] = useState(0);
  const [isCheckBox, setIsCheckBox] = useState(1);
  const [occurrences, setOccurrences] = useState(0);
  const [indexN, setIndexN] = useState(1);
  const [number, setNumber] = useState([
    {
      value: 369,
      label: 'Days',
    },
    {
      value: 30,
      label: 'Week',
    },
    {
      value: 39,
      label: 'Month',
    },
    {
      value: 30,
      label: 'Year',
    },
  ]);
  const { itemIndex, setItemIndex } = React.useState(0);

  const onChange = () => {
    switch (isDone) {
      case 0:
        setIsDone(1);
        break;
      case 1:
        if (isCheckBox == 2) {
          setIsDate(true);
        }
        if (isCheckBox == 3) {
          setIsDone(0);
        }
        break;
      case 2:
        setIsShow(false);
        var data = {
          repeatFrequency: indexF,
          repeatNum: indexN,
          repeatCount: occurrences,
          repeatDate: date,
        };

        onDone(data);
        setDate('');
        setIsDone(1);
        setIndexF(1);
        setIsCheckBox(1);
        setOccurrences(0);
        setIndexN(0);

        break;

      default:
        break;
    }
  };
  const onDis = () => {
    setIsShow(false);
    onClose();
  };
  const checkRepetType = length => {
    setNumber([]);
    var array = [];
    for (var i = 1; i < length; i++) {
      var data = {
        value: i,
        label: i,
      };
      array.push(data);
      console.log('FOR+++>', array);
      setNumber(array);
    }
  };

  useEffect(() => {
    setIsDone(0);
    checkRepetType(369);
  }, []);
  useEffect(() => {
    console.log('isDone', isDone);
  }, [isDone]);
  useEffect(() => {
    setIsDate(false);
    setDate('');
    setIsShow(false);
    setIndexF(1);
    setIsDone(0);
    setIsCheckBox(1);
    setOccurrences(0);
    setIndexN(1);
    setIsShow(visible);
  }, [visible]);
  const updateSelectedItem = index => {
    setItemIndex(index);
  };

  const onSelectTypeTime = value => {
    setIsDate(false);
    var dateValue = new Date(value);
    setDate(dateValue.toJSON());
    setIsShow(false);
    var data = {
      repeatFrequency: indexF,
      repeatNum: indexN,
      repeatCount: occurrences,
      repeatDate: date,
    };

    onDone(data);

    setIsDone(0);
    setIndexF(1);
    setIsCheckBox(1);
    setOccurrences(0);
    setIndexN(0);
  };

  return (
    <>
      <Modal transparent={true} visible={isShow}>
        <View
          style={{
            height: `100%`,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: '#ffff',
              height: `40%`,
              width: `100%`,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}>
            <View
              style={{
                padding: 15,
                flexDirection: 'row',
                width: `100%`,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => onDis()}>
                <Icon name="arrowleft" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onChange();
                }}>
                <Text style={{ color: '#7CE0DA' }}>Done</Text>
              </TouchableOpacity>
            </View>
            {isDone == 1 ? (
              <>
                <Checkbox.Item
                  onPress={() => {
                    setIsCheckBox(1);

                  }}
                  label="Dosen't end"
                  status={isCheckBox == 1 ? 'checked' : 'unchecked'}
                />
                <Checkbox.Item
                  onPress={() => {
                    setIsCheckBox(2);

                  }}
                  label="Once a date"
                  status={isCheckBox == 2 ? 'checked' : 'unchecked'}
                />
                <Checkbox.Item
                  onPress={() => {
                    setIsCheckBox(3);

                  }}
                  label="Aftre number of occurrences"
                  status={isCheckBox == 3 ? 'checked' : 'unchecked'}
                />
              </>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  width: `100%`,
                  justifyContent: 'center',
                }}>
                {isCheckBox == 3 ? (
                  <DynamicallySelectedPicker
                    items={number}
                    onScroll={({ index, item }) => {
                      setOccurrences(index + 1);
                      setIsDone(2);
                    }}
                    height={300}
                    width={50}
                  />
                ) : (
                  <>
                    <DynamicallySelectedPicker
                      items={number}
                      onScroll={({ index, item }) => {
                        setIndexN(index + 1);
                      }}
                      height={300}
                      width={50}
                    />
                    <DynamicallySelectedPicker
                      items={[
                        {
                          value: 369,
                          label: 'Day',
                        },
                        {
                          value: 30,
                          label: 'Week',
                        },
                        {
                          value: 39,
                          label: 'Month',
                        },
                        {
                          value: 30,
                          label: 'Year',
                        },
                      ]}
                      onScroll={({ index, item }) => {
                        setIndexF(index + 1);
                        checkRepetType(item.value);
                      }}
                      height={300}
                      width={70}
                    />
                  </>
                )}
              </View>
            )}
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDate}
          mode={'Date'}
          confirmTextIOS={`Confirm Date`}
          onConfirm={onSelectTypeTime}
          onCancel={() => {
            setIsDate(false);
          }}
        />
      </Modal>
    </>
  );
};
export default RepeatCalender;
