import React from 'react'
import { Text, StyleSheet ,Button} from 'react-native'

import {
    colors
} from '../../../infrastructure/theme/colors';
const CustomButtom = (props) => {
    const {
        field={name, onBlur, onChange, value },
       errors, touched, setFieldTouched ,
        ...inputProps
      } = props
  const [text, setText] = React.useState('');
  return (
    <>
     <Button

      style={[
        styles.textInput,

      ]}

    />

    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 55,
    width: 125,
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