import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WellcomeScreen from '../src/screen/wellcome/wellcomeScreen.js'


export default function  Router (){

return (
   <NavigationContainer>
          <Stack.Navigator>
        <Stack.Screen name="Wellcome" component={WellcomeScreen} />
      </Stack.Navigator>
  
   </NavigationContainer>

)
    
}