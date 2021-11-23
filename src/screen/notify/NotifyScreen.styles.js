import * as React from 'react';
import styled, {css} from 'styled-components/native';
import {colors} from '../../infrastructure/theme/colors';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

export const ViewMain = styled(View)`
  width: 100%;
  height: 100%;
`;
export const ViewHeaderMain = styled(View)`
  width: 100%;
  height: 100%;

`;
export const ViewBackHeader = styled(View)
`
background-color: ${colors.ui.quaternary};
`
export const ViewTopRow = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 15px;
`;
export const ImagePro = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 45px;
`;
export const ViewBackIcon = styled(View)`
  background-color: rgba(78, 205, 196, 0.3);
  border-radius: 5px;
  border-width: 1px;
  width: 50px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  justify-content: center;
  height: 25px;
  border-color: rgba(78, 205, 196, 1);
`;
export const TextCenterName = styled(Text)`
font-family: "TRYFinder-Light";
  text-align: center;
  font-size: 20px;
`;
export const TextNumberNotify= styled(Text)`
font-family: "TRYFinder-Light";
  text-align: center;
  font-size: 15px;
  padding-right: 8px;
`;
export const FlatListHorGroup = styled(FlatList)`


  width: 100%;


  flex-grow: 0;
`;
