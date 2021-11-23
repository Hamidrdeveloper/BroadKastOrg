import * as React from 'react';
import styled, {
    css
} from 'styled-components/native';
import {
    colors
} from '../../infrastructure/theme/colors';
import { Button, TextInput } from "react-native-paper";
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


export const ImageCardEvent = styled(Image)
`
width: 101%;
height: 230px;
`

export const SafeArea = styled(SafeAreaView)
`
  background: ${isDarkMode ? colors.brand.primary : colors.brand.primary};
`;
export const ViewCenter = styled(View)
`
  align-items: center;
  marginTop: 100px;
  height: 100%;
  width: 100%;

  background: ${isDarkMode ? colors.brand.primary : colors.brand.primary};
`;
export const WellcomeText = styled(Text)
`
  font-size: 40px;
  color: ${colors.brand.secondary};
`;
export const TextDirc = styled(Text)
`
font-family: "TRYFinder-Light";
  font-size: 28px;
  text-align: center;
  padding-top: 15px;

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
 height:30px;
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



export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`


`;

export const AuthButton = styled(Button)
`
background-color:#CBF3F0 ;
width: 127px;
align-self: center;
border-radius: 20;
margin-top: 50;
color: ${colors.brand.primary};



`;
export const ViewOTPCenter =styled(View)
`
height: 100%;
align-items: center;
justify-content: center;

`;
export const TextOTP =styled(Text)
`
font-family: "TRYFinder-Light";
font-size: 20px;
text-align: center;
width: 100%;
color: ${colors.brand.secondary};
`
export const ViewOTP =styled(View)
`
border-radius: 24px;
width: 334px;
height: 182px;
padding: 15px;
align-self: center;
background-color: #fff;
align-items: center;
`
export const TextAuthButton = styled(Text)
`
font-family: "TRYFinder-Light";
width: 127px;
align-self: center;
border-radius: 20;
color: ${colors.brand.primary};



`;
export const AuthInput = styled(TextInput)`
  width: 400px;
  color: ${colors.text.inverse};

  background-color: ${colors.brand.primary};
`;

export const Title = styled(Text)`
font-family: "TRYFinder-Light";
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;

`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
`;