import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useContext} from 'react';
import { HomeScreen } from "../../screen/Home/homeScreen";
import { Settingcreen } from "../../screen/Setting/settingScreen";
import { CustomDrawerContentComponent } from "./CustomDrawerContentComponent";
import Icon from "react-native-vector-icons/AntDesign";
import { GroupIntroScreen } from "../../screen/GroupsIntroScreen/GroupIntroScreen";
import { ProfileScreen } from "../../screen/Profile/profileScreen";
import { NotifyScreen } from "../../screen/notify/notifyScreen";
import { AsyncStorage } from "react-native";

const Drawer = createDrawerNavigator();
export const Home =() =>{
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage successfully cleared!')
    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }

  // clearStorage()

  return (

      <Drawer.Navigator
      drawerStyle={{ width: '80%' }}
      drawerContent={(props) => <CustomDrawerContentComponent {...props} />}>

        <Drawer.Screen name=" " component={HomeScreen}  />
                  <Drawer.Screen name="Profile" component={ProfileScreen} options={{
            drawerIcon: config => <Icon
                size={20}
                color='#437780'
                name={Platform.OS === 'android' ? 'user' : 'user'}></Icon>
                }} />
        <Drawer.Screen name="Notifications" component={NotifyScreen}
        options={{
            drawerIcon: config => <Icon
                size={20}
                color='#437780'
                name={Platform.OS === 'android' ? 'contacts' : 'contacts'}></Icon>
        }} />
      </Drawer.Navigator>

  );
}