import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';
import {
    colors
} from '../../../infrastructure/theme/colors';
const CustomInput = (props) => {
    const {
        field={name, onBlur, onChange, value },
       errors, touched, setFieldTouched ,
        ...inputProps
      } = props
  const [text, setText] = React.useState('');
  return (
    <>
     <TextInput
       selectionColor="red"
    theme={{ colors: { text: "#fff" ,selection:"#fff",underlineColor:"#fff"} }}      selectionColor="#CBF3F0"
      outlineColor="#fff"
      underlineColor="#CBF3F0"

      label={field.name}

      style={[
        styles.textInput,

      ]}
      onChangeText={text => setText(text)}
    />

    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 55,
    width: '100%',
    margin: 10,
    tintColor:"#fff",
    color:"#fff",

    backgroundColor:colors.brand.primary,
    textAlignVertical: 'top',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  }
})

export default CustomInput