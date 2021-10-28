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
} from './remindersScreenWellcome.styles';

import Icon from 'react-native-vector-icons/AntDesign';
import {cardevent} from '../../../assets/card.png';
export const RemindersWellcomScreen = () => {
  return (

    <SafeArea>
      <ViewCenter>
        <TextIntro>Bugle</TextIntro>
        <WellcomeText>Events</WellcomeText>
        <SpaceDircton />
        <ImageCardEvent  resizeMode='contain' source={require('../../../assets/remindimg.png')}/>
        <TextDirc>
          {
           'Keep on top of your \n time and goals. Set \nactions to mingle with \nyour social schedule'
          }
        </TextDirc>

      </ViewCenter>
    </SafeArea>
  );
};
