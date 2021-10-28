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
    FlatList,
    Image
} from 'react-native';
export const ViewTopRow = styled(View)`
  flex-direction: row;
  width: 100%;

  padding: 15px;
`;
export const TextCard = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.cardGroup};
padding-left: 20px;
width: 200px;
font-size: 15px;
`
export const TextCardEvent = styled(Text)
`
font-family: "TRYFinder-Light";
color:${colors.text.blueLight};
padding-left: 60px;
width: 200px;
font-size: 15px;
`
export const CardItem = styled(View)
`
padding-top: 10px;
padding-left: 15px;
width: 100%;
margin-right: 15px;
border-radius: 8px;
justify-content: center;

`
export const CardLine = styled(View)
`
margin-top: 10px;
height: 1px;
width: 100%;
background-color:#d9eded `;
export const ImagePro = styled(Image)
`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${colors.text.blueLight};
`;
export const ImageProAbs= styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  position: absolute;
`;

export const ViewIconRight = styled(View)
`
  width: 50px;
  height: 100%;
  align-items: flex-end;
  justify-content: space-around;
  position: absolute;
  right: 15px;
  margin-top: 20px;

`;
export const ViewBackIcon = styled(View)
`
  border-width: 1px;

  border-radius: 20px;
  border-color: #c8eff1;
  width: 25px;
  align-items: center
  justify-content: center;
  height: 25px;

`;