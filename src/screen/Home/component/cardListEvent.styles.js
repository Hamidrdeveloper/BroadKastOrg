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
export const TextCard = styled(Text)
`
font-family: 'TRYFinder-Light';
width: 100%;
color:${colors.text.cardGroup};
text-align: center;
text-align:center;
font-size: 14px;
font-weight: bold;
padding: 5px;
`
export const CardItem = styled(View)
`
height: 60px;
width: 115px;
margin-right: 20px;
border-radius: 8px;
margin-top: 10px;
padding-right:5px;
padding-left:5px;
justify-content: center;
background-color:${colors.brand.muted} ;
`
export const TextNumberChat = styled(Text)
`
color: #fff;
text-align: center;
font-size: 12px;
`
export const NumberChat = styled(View)
`
height: 25px;
width: 25px;
position: absolute;
border-radius: 20px;
align-items:center;
justify-content: center;
right: 10px;
background-color: ${colors.text.primary};
`
