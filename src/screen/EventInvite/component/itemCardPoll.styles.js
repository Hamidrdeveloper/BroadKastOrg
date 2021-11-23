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
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 30) / 2;
export const ViewRow = styled(View)
`
flex-direction: row;
width: 100%;
padding-left: 30px;
`

export const TextCard = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.cardGroup};
font-size: 20px;
padding-right: 50px;
margin-top: 8px;
`
export const CardRemind = styled(View)
`
width: 100%;
height: 35px;
background-color:#cdedf1;
border-radius: 35px;

border-width: 1.5px;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-color: #89d4d8 ;
padding-left: 30px;
padding-right: 30px;
`
export const ViewIconRelod = styled(View)
`position:absolute;
right: 30px;
margin-top: 8px;
`
export const ViewLoction = styled(View)
`
align-items: center;
flex-direction: row;

`
export const TextCardSmall = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.cardGroup};
font-size: 15px;

`
export const TextCardSmallBold = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.cardGroup};
font-size: 15px;
font-weight: bold;
padding: 0;

`
export const TextCardBlueLight = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.blueLight};
margin-top: 8px;
font-size: 20px;
padding-right: 50px;
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
margin-top: 15;
border-radius:20;
margin:5px;
align-items: center;
justify-content: center;
box-shadow: 5px 10px;


min-width:${itemWidth};

    height: 130;
background-color:#f5fafc;
`