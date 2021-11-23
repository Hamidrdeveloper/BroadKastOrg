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
  TextInput,
} from 'react-native';

export const ViewMain = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: rgba(78, 205, 196, 0.05 );
`;
export const ViewRowSearchBar = styled(View)
`
flex-direction: row;
width: 100%;
padding-left: 30px;
align-items: center;
`
export const ViewHeaderMain = styled(View)`
  width: 100%;
  height: 100%;

`;
export const TextInputSearch = styled(TextInput)
`
width: 80%;
height: 35px;
border-radius: 25px;
padding-left: 8px;
color:#000;
border-color: #c8eff1;
border-width: 1;
background-color: ${colors.text.inverse};
`
export const ViewBackHeader = styled(View)
`
background-color: ${colors.ui.quaternary};
`
export const ViewTopRowHeader = styled(View)
`
padding: 15px;
flex-direction: row;
width: 100%;
justify-content: space-between;

`;
export const ViewTopRow = styled(View)`
  flex-direction: row;
  width: 100%;
  background-color: ${colors.text.inverse};
  justify-content: space-between;
  padding: 15px;
  border-bottom-width:0.6px;
  border-color:rgba(78, 205, 196, 0.3) ;
`;
export const ImagePro = styled(Image)`
  width: 110px;
  height: 110px;
  border-radius: 110px;
  margin-top: 50px;
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
  font-size: 15px;
`;
export const TextCenterProfile = styled(Text)`
font-family: "TRYFinder-Light";
  text-align: center;
  font-size: 18px;
`;
export const TextCenterInfo = styled(Text)`
font-family: "TRYFinder-Light";
  text-align: left;
  font-size: 15px;
  width: 100%;
  padding-bottom: 15px;
  padding-left: 15px;
`;

export const TextNumberNotify= styled(Text)`
font-family: "TRYFinder-Light";
font-family: "TRYFinder-Light";
  text-align: center;
  font-size: 15px;
  padding-right: 8px;
`;
export const FlatListHorGroup = styled(FlatList)`


  width: 100%;


  flex-grow: 0;
`;
export const FlatListAllTap= styled(FlatList)`
  margin-top: 8;
  width: 100%;

`;

