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
} from 'react-native';
const isDarkMode = true;


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
font-family: "TRYFinder-Light";
  font-size: 40px;
  font-family: "TRYFinder-Light.ttf";
  color: ${colors.brand.secondary};
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
 height:80px;
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