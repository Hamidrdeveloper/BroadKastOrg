import React from 'react';
import { StyleSheet ,View,Text,Keyboard,Dimensions} from 'react-native';
import { KeyboardAwareFlatList, KeyboardAwareMixin, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppIntroSlider from '../components/react-native-app-intro-slider';
import { EventsWellcomScreen } from '../screen/Events/eventsScreenWellcome.js';
import { GroupIntroScreen } from '../screen/GroupsIntroScreen/GroupIntroScreen.js';
import { RemindersWellcomScreen } from '../screen/Reminders/remindersScreenWellcome.js';
import { RegistrationScreen } from '../screen/Sign/registrationScreen.js';
import {WellcomeScreen} from '../screen/wellcome/wellcomeScreen.js';
import KeyboardListener from 'react-native-keyboard-listener';
import {
    colors
} from '../infrastructure/theme/colors';
const windowWidth = Dimensions.get('window').width;

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',

    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',

    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',

    backgroundColor: '#22bcb5',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',

    backgroundColor: '#22bcb5',
  }
];

export default class IntroScreen extends React.Component {
  state={
    keyboardOpen:true,
    slideIndex:0
  }

  _renderItem = ( index) => {
    return (
<>
    {index ==0?
      this.state.slideIndex==0?


      <View style={{width:windowWidth}}>
   <GroupIntroScreen navigation={this.props.navigation}/>
   </View>

   :  <View style={{width:windowWidth,height:`100%`,backgroundColor:  `${colors.brand.primary}`}}>

  </View>:null}
   {index==1?
     this.state.slideIndex==1?
       <View style={{width:windowWidth}}>
   <EventsWellcomScreen  navigation={this.props.navigation} />
      </View>
   : <View style={{width:windowWidth,height:`100%`,backgroundColor:  `${colors.brand.primary}`}}>

  </View>:null}
   {index==2?
     this.state.slideIndex==2?
     <View style={{width:windowWidth}}>
   <RemindersWellcomScreen navigation={this.props.navigation}/>
     </View>
   : <View style={{width:windowWidth,height:`100%`,backgroundColor:  `${colors.brand.primary}`}}>

  </View>:null}
   {index ==3?
     this.state.slideIndex==3?
        <View styles={{width:windowWidth}}>
   <RegistrationScreen navigation={this.props.navigation}/>
   </View>
   : <View style={{width:windowWidth,height:`100%`,backgroundColor:  `${colors.brand.primary}`}}>

  </View>:null
}

</>
    );
  }
  _onDone = () => {
   this.props.navigation.navigate("LoginScreen")
  }
  render() {

      return (

        <View style={{flex: 1}}>
           <KeyboardListener
    onDidShow={() => { this.setState({ keyboardOpen: false }); }}
    onDidHide={() => { this.setState({ keyboardOpen: true }); }}
  />
      {/* <KeyboardAwareScrollView

      onKeyboardWillShow={(frames: Object) => {
        console.log('Keyboard event', frames)
      }}
      contentContainerStyle={{height:`100%`}}
     > */}
        <View style={{flex: 1}}>
      <AppIntroSlider
        style={{width: `100%`}}
        onSlideChange={(newIndex) => {
          console.log('newIndex',newIndex);
          this.setState({
          slideIndex:newIndex})


    }}
        keyboardOpen={this.state.keyboardOpen}
         renderItem={({index}) => this._renderItem(index)}
         data={slides}
         onDone={this._onDone} doneLabel={"Login"}/>
      </View>
{/* </KeyboardAwareScrollView> */}
</View>
)
  }
}
