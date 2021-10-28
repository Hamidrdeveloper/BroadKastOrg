import { CommonActions ,StackActions} from '@react-navigation/native';
import React, {createContext, useEffect, useState,useContext} from 'react';
import {AsyncStorage,Platform} from 'react-native';
import toastShow from '../../components/toastShow';
import { TOKEN ,Navigation} from '../../utils/env';
import {
  accountProfile,
  login,
  poneConfirm,
  profileUpdate,
  readData,
  setPassword,
  signUp,
  userList,
} from './signup.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoadingSign, setIsLoadingSign] = useState(false);
  const [isShowbutton, setIsShowbutton] = useState(false);

  const [isUpdate, setIsUpdate] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [listValidUser, setListValidUser ]= useState([]);
  const [user, setUser] = useState({
    id: '8',
    fullname: '',
    photo:'hamidreza.png',
    username: '',
    email: null,
    phoneNumber: '',
    createDatetime: '2021-07-11T22:32:35.1529146',
    pauseALLNotifications: false,
    notificationNewGroup: false,
    notificationNewEvent: false,
    notificationNewMessage: false,
    googleCalendarSync: false,
    twoFactorEnabled: false,
  });
  const [userProfile, setUserProfile] = useState({
    id: '8',
    fullname: '',
    photo:'hamidreza.png',
    username: '',
    email: null,
    phoneNumber: '',
    createDatetime: '2021-07-11T22:32:35.1529146',
    pauseALLNotifications: false,
    notificationNewGroup: false,
    notificationNewEvent: false,
    notificationNewMessage: false,
    googleCalendarSync: false,
    twoFactorEnabled: false,
  });
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const clearStorage = async () => {


    try {
      const asyncStorageKeys = await AsyncStorage.getAllKeys();

      if (Platform.OS === 'android') {
        await AsyncStorage.clear();
      }
      if (Platform.OS === 'ios') {
        await AsyncStorage.multiRemove(asyncStorageKeys);
      }
      // if(Platform.OS=='ios'){

      //
      // }else{
      //       BackHandler.exitApp();
      // }


    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }

  const _storData = async data => {
    try {
      const jsonValue = JSON.stringify(data);
      console.log('token', jsonValue);
      await AsyncStorage.setItem('dataUser', jsonValue);
    } catch (error) {
      console.log('token', error);
    }
  };
  var token;
  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem('dataUser')


  var  pars = JSON.parse(userAge)
     TOKEN.data=pars.token;
      console.log('dataUser',TOKEN.data)

    } catch (e) {
      console.log('dataUser',e)
    }
  }
  const logOut =()=>{
    clearStorage();
  Navigation.nav.dispatch(
 StackActions.replace('LoginScreen', {
 user: 'jane',
 }))
   console.log('LOG+++',"LOGGGGGggggggggg");
  }
  const accountProfileUserNavigation = () => {

    accountProfile().then(results => {

      console.log('signUpUser', results.data);

      if (results != '') {
        setUserProfile(results.data);
        // setTimeout(() => {
          // navigation.dispatch(
          //   CommonActions.reset({
          //     index: 0,
          //     routes: [
          //       { name: 'Home' },

          //     ],
          //   })
          // );
        //  }, 40000)
         accountProfileUser();
        setIsLoading(false);

        setIsLoading(true);
         results;
      } else {
        setIsLoading(false);
        return results;
      }


    }).catch(error=>{

    });
  };
  const accountProfileUser = (navigation) => {
    setIsLoadingSign(true);

    accountProfile().then(results => {
      setIsLoadingSign(false);

      console.log('signUpUser', results.data);

      if (results != '') {

        setUserProfile(results.data);
        setIsLoading(false);

        setIsLoading(true);


      } else {
        setIsLoading(false);
        setIsLoadingSign(false);

      }
    });
  };
  const signUpUser = (fullName, userName, phone, password) => {
    setIsLoadingSign(true);

    signUp(fullName, userName, phone, password)
      .then(results => {
        setIsLoadingSign(false);

        console.log('signUpUser', results);
        if (results != '') {
          setUser(results);
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
      })
      .catch(error => {
        setError(error);
        setIsLoadingSign(false);

      });
  };
  const poneConfirmUser = (code, phone,password,type) => {
    setIsLoadingSign(true);
    setIsLogin(false);

    poneConfirm(code, phone)
      .then(results => {
        setIsLoadingSign(false);

        if (results != '') {
          console.log(results.data)
          _storData(results.data)
          TOKEN.data=results.data.token;
          setUser(results);

          setIsValid(true);
          // setIsLogin(true);
        } else {
          setIsValid(false);
          setIsLogin(false);
        }
      })
      .catch(error => {
        setIsValid(false);
        setIsLogin(false);
        setIsLoadingSign(false);

      });
  };
  const profileUpdateUser = () => {
    setIsLoadingSign(true);

    profileUpdate()
      .then(results => {
        setIsLoadingSign(false);

        console.log('profileUpdateUser',results)
        // clearStorage();
        accountProfileUser();
        toastShow.show('Successfully Edit', 1000);
        setIsUpdate(true);
      })
      .catch(error => {
        setError(error);
        setIsUpdate(false);
        setIsLoadingSign(false);

      });
  };

 const  loginUser=(code,phone) =>{
  setIsLoadingSign(true);
  poneConfirm(code, phone)
  .then(results => {
    setIsLoadingSign(false);

    if (results != '') {
        clearStorage();
      _storData(results.data)
      TOKEN.data=results.data.token;
      setUser(results);
      console.log(results)
      setIsLogin(true);



    } else {
      setIsValid(false);

      setIsLogin(false);
    }
  })
  .catch(error => {
    setError(error);
    console.log(error)
    setIsValid(false);
    setIsLogin(false);
    setIsLoadingSign(false);

  });



 }
 const  loginUserBayPassword=(user,pass,phone,navigation) =>{
     setIsLogin(false);
  setIsLoadingSign(true);
  login(user,pass,phone)
  .then(results => {

    setIsLoadingSign(false);

    if (results.data != '') {
      console.log(results.data)
      _storData(results.data)
      TOKEN.data=results.data.token;
      setUser(results);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Home' },

          ],
        })
      );

      setIsLogin(true);

    } else {
      setIsValid(false);

      setIsLogin(false);
    }
  })
  .catch(error => {
    setError(error);
    setIsValid(false);
    setIsLogin(false);
    setIsLoadingSign(false);

  });



 }
  const setPasswordUser = (pass,token,user,passNew,isPassword) => {
    setIsLoadingSign(true);
    setIsPassword(false);
    setPassword(pass,token,passNew,isPassword)
      .then(results => {
        setIsLoadingSign(false);

        if (results != '') {
          setIsPassword(true)
          toastShow.show('Successfully Set Password')
          logOut();

        } else {
          setIsPassword(true)
        }
      })
      .catch(error => {
        setIsValid(false);
        setIsLoadingSign(false);
        setIsPassword(true)
      });
  };

  const checkUserInvite= () => {
    setIsLoadingSign(true);

    userList()
      .then(results => {
        setIsLoadingSign(false);

        if (results != '') {

          console.log(results.data)

          setListValidUser(results.data)
        } else {

        }
      })
      .catch(error => {
        setIsValid(false);
        setIsLoadingSign(false);

      });
  };

  const changeViewEdite=()=>{
      setIsUpdate(false);
  }
  useEffect(() => {
    console.log('signUpUser', isLoading);
  }, [isLoading]);
  useEffect(() => {
    console.log('isValid', isValid);
  }, [isValid]);
  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        user,
        setUser,
        error,
        isLoadingSign,
        userProfile,
        signUpUser,
        poneConfirmUser,
        accountProfileUserNavigation,
        accountProfileUser,
        profileUpdateUser,
        checkUserInvite,
        changeViewEdite,
        setPasswordUser,
        loginUser,
        loginUserBayPassword,
        isLogin,
        isPassword,
        listValidUser,
        isUpdate,
        isValid,
        isShowbutton,
        setIsShowbutton,
        logOut,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
