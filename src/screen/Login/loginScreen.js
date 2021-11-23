/* eslint-disable prettier/prettier */
import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
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
} from './loginScreen.styles';
import {Modal} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';
import {AuthenticationContext} from '../../services/signup/sgnup.context';
// eslint-disable-next-line no-unused-vars
import { TOKEN } from '../../utils/env';
import Indicator from '../../components/Indicator';
import { GroupsContext } from '../../services/group/group.context';
import { RemindersContext } from '../../services/reminder/reminder.context';
import { EventsContext } from '../../services/event/event.context';
import { FriendshipsContext } from '../../services/friendship/friendship.context';
import PhoneInput from 'react-native-phone-number-input';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import toastShow from '../../components/toastShow';
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

export const LoginScreen = ({navigation}) => {
  const {isLoading, user, error, signUpUser, poneConfirmUser, isValid,loginUser,isLogin,isLoadingSign,accountProfileUserNavigation} =
    useContext(AuthenticationContext);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');

  const [OTPActive, setOTPActive] = useState(false);
  const [focused, setIsFocued] = useState(false);
  const [OTPActiveSave, setOTPActiveSave] = useState(false);
  const [resendCode, setResendCode] = useState(false);
  const [passwordSave, setPasswordSave] = useState('');
  const [phoneSave, setPhoneSave] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const {
    groupListUser,
    groupDeleteUser,
    groupAcceptUser,
    groupUser,
    setGroupUser
  }=useContext(GroupsContext);
  const {friendshipListUser,friends,friendshipListUserActive} = useContext(FriendshipsContext)
  const {allContacts, setAllContacts} = useContext(FriendshipsContext)
  const {setUser,checkUserInvite,loginUserBayPassword} = useContext(AuthenticationContext);

  const {
    reminderListUser,
    reminderAddUser,
    reminderEditUser,
    reminderDeleteUser,
    reminderAcceptUser,
    userReminders,
    setUserReminders
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
        setUserEvents
  }=useContext(EventsContext);
  const [value, setValue] = useState('');
  const [showTwoCode, setShowTwoCode] = useState(false);
  const [twoPassword, setTwoPassword] = useState('0');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const inputRef = useRef()

  // const { onRegister, isLoading, error } = ""

  function onRegister() {
    setIsFocued(true)
    setValue('')
    setOTPActive(true);
    // inputRef.current.focus();
    setResendCode(true);

    // setOTPActive(true);
  }



  useEffect(() => {
    setTimeout(() => {
    if (isLogin==true) {
      setOTPActive(false);
      setOTPActive(false);
      console.log('USER++>',user);
      if(user.data!=null){

        setShowTwoCode(user.data.hasPassword)
        setUserName(user.data.username)
        if(user.data.hasPassword==false){
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Home' },

              ],
            })
          );
        }
      }


    setOTPActive(false);

    }
  }, 100); }, [isLogin]);
  useEffect(() => {
    console.log("================================================================================================>",value+"==>"+ password);
    if(value=="123456"){
      loginUser(value, password);
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
      <SafeArea>
        <ViewCenter>
          <TextIntro>Bugle</TextIntro>
          <WellcomeText>Login</WellcomeText>
          <SpaceDircton />
          <AccountContainer>
            <Spacer size="large">
            <PhoneInput


defaultCode="US"
layout="first"
withShadow
autoFocus
containerStyle={ {
  width: 400,
  color: `${colors.text.inverse}`,
  backgroundColor: `${colors.brand.primary}`,
}}
maxLength={10}
textInputStyle={{ color: `${colors.text.inverse}`,}}
codeTextStyle={{color: `${colors.text.blueLight}`,}}
textContainerStyle={{
  paddingVertical: 0,
  backgroundColor: `${colors.brand.primary}`,
  color: `${colors.text.inverse}`,
}}
onChangeFormattedText={p => {
  setPassword(p.replace('+','0'))}
}
/>
            </Spacer>
            <Spacer size="large">
              <AuthButton mode="contained" onPress={() => onRegister()}>
                <TextAuthButton>Login</TextAuthButton>
              </AuthButton>
            </Spacer>
            {resendCode?
            <Spacer size="large">
              <TouchableOpacity
              onPress={()=>{ setOTPActiveSave(true)}}>
                <TextAuthButton style={{color:colors.text.inverse,width:`100%`,textAlign:"center"}}>Resend code</TextAuthButton>
                </TouchableOpacity>
            </Spacer>
            :null}

            {/* {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )} */}
            {/* <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )} */}
            {/* </Spacer> */}
          </AccountContainer>
          {/* <ViewGroupCircle>
        <Circcle />
          <Circcle />
          <Circcle />
          <CirccleActive />
        </ViewGroupCircle> */}
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
                {/* <OTPInputView
                  style={{width: '80%', height: 100}}
                  pinCount={6}
                  ref={inputRef}

                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => {
                    loginUser(code, password);
                    setOTPActive(false);
                    setResendCode(false);
                  }}
                /> */}
                     <CodeField


      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={(code)=>{
        setValue(code)
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
            visible={OTPActiveSave}
            onRequestClose={() => {
              setOTPActiveSave(false);
            }}>
            <ViewOTPCenter>
              <ViewOTP>
                <TextOTP>Verify</TextOTP>
                {/* <OTPInputView
                  style={{width: '80%', height: 100}}
                  pinCount={6}


                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => {
                    loginUser(code, phoneSave,passwordSave);
                    setOTPActiveSave(false);
                    setResendCode(false);
                    setIsFocued(false)

                  }}
                /> */}

             <CodeField


        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
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
            visible={showTwoCode}
            onRequestClose={() => {
              setShowTwoCode(false);
            }}>
            <ViewOTPCenter>
              <ViewOTP>
                <TextOTP>Please enter your private code</TextOTP>
                <TextInput
                onChangeText={(text) => setTwoPassword(text)}
                secureTextEntry={true}
                placeholderTextColor="#bbb"
                placeholder="Please enter your private code"
                style={{borderWidth: 1,
                   borderRadius: 8
                   ,width:`100%`,
                   textAlign: 'center'
                   ,height: 48
                   ,alignSelf:'center'
                 ,  padding: 8,
                 color:"#000"
               }}/>

                 <AuthButton style={{bottom: 15}}mode="contained" onPress={() =>loginUserBayPassword(value,twoPassword,password,navigation)}>
                   <TextAuthButton>OK</TextAuthButton>
                 </AuthButton>

              </ViewOTP>
            </ViewOTPCenter>
          </Modal>
        </ViewCenter>
        <Indicator isShowIndicator={isLoadingSign} />
        {focused && <TextInput style={{width:0,height:0,position:'absolute'}} autoFocus />}
      </SafeArea>
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
