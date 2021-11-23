import * as React from 'react';

import {
  SafeArea,
  TextIntro,
  ViewCenter,
  WellcomeText,
  SpaceDircton,
  SpaceButton,
  ButtonNextArrow,
  FlatListHorGroup,
  TextDirc,
  CirccleActive,
  Circcle,
  ImageCardEvent,
  ViewGroupCircle,
} from './eventsScreenWellcome.styles';
import { BackScreen } from '../../components/backScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/AntDesign';
import {cardevent} from '../../../assets/card.png';
export const EventsWellcomScreen = () => {
  return (
    <SafeArea>
      <ViewCenter>
        <TextIntro>Bugle</TextIntro>
        <WellcomeText>Events</WellcomeText>
        <SpaceDircton />
        <ImageCardEvent  resizeMode='contain' source={require('../../../assets/card.png')}/>

        <TextDirc>
          {
            'Chat about your \n upcoming event within \n the your set details to\n iron out the small things'
          }
        </TextDirc>

        {/* <ViewGroupCircle>
        <Circcle />
          <CirccleActive />
          <Circcle />
          <Circcle />
        </ViewGroupCircle> */}
      </ViewCenter>
    </SafeArea>
  );
};
