import React, {useState, useContext, useEffect,useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {Spacer} from '../../components/spacer/spacer.component';
import {CustomInput} from './component/CustomInput';
import {CustomButtom} from './component/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  SafeArea,
  ViewCenter,
  TextIntro,
  WellcomeText,
  SpaceDircton,
  AccountContainer,
  AuthButton,
  ViewOTP,
  TextOTP,
  ViewOTPCenter,
  AuthInput,
  TextAuthButton,
  CirccleActive,
  Circcle,
  ViewGroupCircle,
  AuthButtonLogin,
} from './registrationScreen.styles';
import {Modal} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
import Indicator from '../../components/Indicator';
import {TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-number-input';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 6;
const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Passowrd must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

export const RegistrationScreen = ({navigation}) => {
  const {
    isLoading,
    user,
    error,
    signUpUser,
    poneConfirmUser,
    isValid,
    isLoadingSign,
  } = useContext(AuthenticationContext);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordSave, setPasswordSave] = useState('');
  const [phoneSave, setPhoneSave] = useState('');

  const [OTPActive, setOTPActive] = useState(false);
  const [OTPActiveSave, setOTPActiveSave] = useState(false);
  const [resendCode, setResendCode] = useState(false);
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const inputRef = useRef()
  const [repeatedPassword, setRepeatedPassword] = useState('');
  // const { onRegister, isLoading, error } = ""

  function onRegister() {
    signUpUser(fullName, userName, phone, password);
    setPasswordSave(password);
    setPhoneSave(password);
    setValue('')
    // setOTPActive(true);
  }

  useEffect(() => {
    setTimeout(() => {
      if (user != null) {
        if (user.statusCode == 200) {
          setOTPActive(true);
          setResendCode(true);
        } else {
          setOTPActive(false);
        }
      }
    }, 100);
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      if (isValid) {
        navigation.navigate('Home');
      }
    }, 100);
  }, [isValid]);
  useEffect(() => {
    if(value=="123456"){
      poneConfirmUser(value, phone);
                  setOTPActive(false);
                  setResendCode(false);
    }else{
      if(value.length>5){
        toastShow.show("code not correct")

      }
    }
  }, [value]);
  return (
    <>
      {/* <KeyboardAwareScrollView> */}
      <SafeArea>
        <ViewCenter>
          <TextIntro>Bugle</TextIntro>
          <WellcomeText>Get Started</WellcomeText>
          <SpaceDircton />

          <AuthInput
            theme={{
              colors: {
                text: `${colors.text.inverse}`,
                placeholder: 'white',
                text: 'white',
                primary: '#CBF3F0',
                underlineColor: 'transparent',
                background: '#003489',
              },
            }}
            underlineColor={`${colors.text.inverse}`}
            label="Name"
            value={fullName}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={u => setFullName(u)}
          />

          <AuthInput
            theme={{
              colors: {
                text: `${colors.text.inverse}`,
                placeholder: 'white',
                text: 'white',
                primary: '#CBF3F0',
                underlineColor: 'transparent',
                background: '#003489',
              },
            }}
            underlineColor={`${colors.text.inverse}`}
            label="USERNAME"
            value={userName}
            // textContentType="password"

            autoCapitalize="none"
            onChangeText={p => setUserName(p)}
          />

          <PhoneInput
            defaultCode="US"
            layout="first"
            withShadow
            containerStyle={{
              width: 390,
              color: `${colors.text.inverse}`,
              backgroundColor: `${colors.brand.primary}`,
            }}
            textInputStyle={{color: `${colors.text.inverse}`}}
            codeTextStyle={{color: `${colors.text.blueLight}`}}
            textContainerStyle={{
              paddingVertical: 0,
              backgroundColor: `${colors.brand.primary}`,
              color: `${colors.text.inverse}`,
            }}
            onChangeFormattedText={p => {
              setPhone(p.replace('+', '0'));
            }}
          />
          <Spacer size="large">
            <AuthButton mode="contained" onPress={() => onRegister()}>
              <TextAuthButton>Validate</TextAuthButton>
            </AuthButton>
          </Spacer>
          {resendCode ? (
            <Spacer size="large">
              <TouchableOpacity
                onPress={() => {
                  setOTPActiveSave(true);
                }}>
                <TextAuthButton
                  style={{
                    color: colors.text.inverse,
                    width: `100%`,
                    textAlign: 'center',
                  }}>
                  Resend code
                </TextAuthButton>
              </TouchableOpacity>
            </Spacer>
          ) : null}
          <Modal
            animationType="slide"
            transparent={true}
            visible={OTPActive}
            onRequestClose={() => {
              setOTPActive(false);
            }}>
            <ViewOTPCenter>
              <ViewOTP>
                <TextOTP>Verify</TextOTP>

                <CodeField
                  // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                  value={value}
                  onChangeText={code => {
                    setValue(code);
                  }}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
              </ViewOTP>
            </ViewOTPCenter>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={false}
            onRequestClose={() => {
              setOTPActiveSave(false);
            }}>
            <ViewOTPCenter>
              <ViewOTP>
                <TextOTP>Verify</TextOTP>
                <OTPInputView
                  style={{width: '80%', height: 100}}
                  pinCount={6}
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => {
                    poneConfirmUser(code, phoneSave, passwordSave);
                    setOTPActiveSave(false);
                    setResendCode(false);
                  }}
                />
              </ViewOTP>
            </ViewOTPCenter>
          </Modal>
        </ViewCenter>
      </SafeArea>
      {/* </KeyboardAwareScrollView> */}
      <Indicator isShowIndicator={isLoadingSign} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    color: 'black',
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  signupContainer: {
    width: '100%',
    paddingRight: 30,
    paddingLeft: 20,
  },
});
