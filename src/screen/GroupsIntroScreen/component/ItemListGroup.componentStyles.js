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
font-family: "TRYFinder-Light";
width: 100%;
color:${colors.text.cardGroup};
text-align: center;
text-align:center;
font-size: 20px;
`


export const CardItem = styled(View)
`
margin-top: 15px;
height: 65px;
width: 124px;
margin-right: 15px;
border-radius: 8px;
justify-content: center;
background-color:${colors.brand.muted} ;
`