import * as React from 'react';
import styled, {
    css
} from 'styled-components/native';
import {
    colors
} from '../../../infrastructure/theme/colors';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList
} from 'react-native';
export const ViewRow = styled(View)
`
flex-direction: row;
width: 100%;
padding-left: 30px;
`
export const ViewCheckIcon = styled(View)
`
margin-top: 15px;
position: absolute;
right: 15px;
padding-left: 30px;
`
export const ViewBackIcon = styled(View)`
  background-color:#eee;
  border-radius: 20px;
  width: 20px;
  align-items: center
  justify-content: center;
  height: 20px;

`;
export const TextCard = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.cardGroup};
font-size: 20px;
padding-right: 50px;
margin-top: 8px;
`
export const TextCardSmall = styled(Text)
`
font-family: "TRYFinder-Light";
text-align: center;
height: 30;
color:${colors.text.cardGroup};
font-size: 17px;
padding-right: 50px;
margin-top: 8px;
padding-left: 8px;
`
export const ViewLoction = styled(View)
`
align-items: center;
flex-direction: row;
`
export const TextCardBlueLight = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.blueLight};
font-weight: bold;
margin-top: 8px;
font-size: 20px;
padding-right: 50px;
width:180px;
`

export const CardLine = styled(View)
`
margin-top: 10px;
height: 1px;
width: 100%;
background-color:#d9eded ;
`
export const CardItem = styled(View)
`
width: 100%;
background-color:#fff;
`
