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
  ViewGroupCircle,
  ImageCardGroup,
} from './GroupIntro.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/AntDesign';
import {ItemListGroup} from './component/ItemListGroup.component';
import { colors } from '../../infrastructure/theme/colors';
export const GroupIntroScreen = () => {
  return (
     <SafeArea>

      <ViewCenter>
        <TextIntro>Bugle</TextIntro>
        <WellcomeText>Groups</WellcomeText>
        <SpaceDircton />

        <ImageCardGroup resizeMode={'stretch'} source={require('../../../assets/groupint.png')}/>


        <TextDirc>
          {
            'Keep up with your \n Saturday basketball \nleague, book club, \n  college friends'
          }
        </TextDirc>

      </ViewCenter>
    </SafeArea>
  );
};
