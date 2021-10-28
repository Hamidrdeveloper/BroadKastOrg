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

export const ViewMain = styled(View)`
  width: 100%;
  height: 100%;
`;
export const ViewHeaderMain = styled(View)`
  width: 100%;
  height: 180px;
  background-color: ${colors.ui.quaternary};
`;
export const ViewTopRow = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 15px;
`;
export const ImagePro = styled(Image)`
  background-color: ${colors.text.blueLight};
  width: 40px;
  height: 40px;
  border-radius: 45px;
`;
export const ViewBackImage = styled(View)`
  background-color: ${colors.text.blueLight};
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
  align-items: center;
  padding-left: 10;
  justify-content: space-between;
  height: 25px;
  border-color: rgba(78, 205, 196, 1);
`;
export const TextCenterName = styled(Text)`
font-family: "TRYFinder-Light";
  text-align: center;
  font-size: 20px;
`;
export const FlatListHorGroup = styled(FlatList)`
  margin-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  height: 130px;

  flex-grow: 0;
`;
export const FlatListAllTap= styled(FlatList)`

  width: 100%;
  height: 100%;

`;
export const ViewBackModal = styled(View)`
 width: 100%;
  height: 100%;
background-color: ${colors.brand.primary};
`
export const ViewOTPCenter =styled(View)
`
height: 100%;
align-items: center;
justify-content: center;

`;
export const TextOTP =styled(Text)`
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

export const ViewCreate = styled(View)
`
padding-left: 15px;
align-self: center;
height: 250px;
justify-content: space-evenly;
width: 250px;
border-radius: 24px;
background-color: #fff;


`
export const ViewRowCreate = styled(View)
`
flex-direction: row;

`
export const TextCreate =styled(Text)`
font-family: "TRYFinder-Light";
font-size: 20;
align-self: center;
color: black;
`
export const IconBackCreateEvent = styled(View)
`
width: 55px;
height: 55px;
background-color:  rgba(78, 205, 196, 0.1);
border-width: 1px;
border-color: #cfedf2;
border-radius: 35px;
align-items: center;
justify-content: center;
margin-right: 20;
`
export const IconBackCreateGroup = styled(View)
`
width: 55px;
height: 55px;
background-color:  rgba(252, 223, 184, 1);
border-width: 1px;
border-color:#ffd193;
border-radius: 35px;
align-items: center;
justify-content: center;
margin-right: 20;
`
export const IconBackCreateReminder = styled(View)
`
width: 55px;
height: 55px;
background-color:  #cfedf2;
border-width: 1px;
border-color:#90e6f4;
border-radius: 35px;
align-items: center;
justify-content: center;
margin-right: 20;
`
export const ViewFlctin= styled(View).attrs({
    color: colors.brand.primary,
    backgroundColor: `${colors.ui.quaternary}`,
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  })`

  `;
export const ViewFlctinPlus = styled(View).attrs({
    color: colors.brand.primary,
    backgroundColor: `${colors.ui.quaternary}`,
    width: 50,
    height: 50,
    marginBottom:15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  })`

  `;
