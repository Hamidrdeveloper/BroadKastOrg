import * as React from 'react';
import styled, {
    css
} from 'styled-components/native';
import {
    colors
} from '../../infrastructure/theme/colors';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Image
} from 'react-native';

const isDarkMode = true;


export const SafeArea = styled(SafeAreaView)
`
  background: ${isDarkMode ? colors.brand.primary : colors.brand.primary};
`;
export const ViewCenter = styled(View)
`
  align-items: center;
  marginTop: 50px;

  height: 100%;
  width: 100%;
  background: ${isDarkMode ? colors.brand.primary : colors.brand.primary};
`;
export const WellcomeText = styled(Text)
`
font-family: "TRYFinder-Light";
  font-size: 40px;
  color: ${colors.brand.secondary};
`;
export const TextDirc = styled(Text)
`
font-family: "TRYFinder-Light";
  font-size: 25px;
  text-align: center;
   margin-top: 30px;
  color: ${colors.ui.quaternary};
`;
export const TextIntro = styled(Text)
`
font-family: "TRYFinder-Light";
  font-size: 25px;
  text-align: center;

  color: ${colors.ui.quaternary};
`;
export const SpaceDircton = styled(View)
`
 height:8%;
`;
export const ButtonNextArrow = styled(View)
`
 height:65px;
 width: 65px;
 border-radius: 65px;
 align-items: center;
 justify-content: center;
 background-color: ${colors.ui.quaternary};
`;
export const SpaceButton = styled(View)
`
 height:100px;
`;
export const FlatListHorGroup = styled(FlatList)
`
width: 100%;

height: 130px;

  flex-grow: 0

`;
export const ImageCardGroup= styled(Image)
`
width: 100%;
height: 170px;
`

export const CirccleActive = styled(View)
`
height: 10px;
width: 10px;
border-radius: 25px;
background-color: ${colors.brand.secondary};
`
export const Circcle= styled(View)
`
height: 10px;
width: 10px;
border-radius: 25px;
background-color: ${colors.bg.secondary};
`
export const ViewGroupCircle = styled(View)
`
width: 20%;
height: 25px;
position: absolute;
bottom: 300px;
justify-content: space-between;
align-items: center;
flex-direction: row;
`
