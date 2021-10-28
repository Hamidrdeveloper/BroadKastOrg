import { FlatList } from "react-native";

import { Image, ScrollView, Text, TextInput, View,Button } from "react-native";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
export const FlatListAvatar = styled(FlatList)`
  width: 100%;

`;

export const TextBold = styled(Text)`
font-family: "TRYFinder-Light";
font-size: 28;
font-weight: bold;
text-align: center;
width: 100%;
`

export const ViewMain = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const ViewShow= styled(View)`
 width: 100%;
 flex-direction: row;
justify-content:space-between;
  align-items: flex-end;


`
export const LineWidth= styled(View)`
width: 1;
height:80%;
backgroundColor:${colors.text.blueLight}
alignSelf:center;


`
export const ViewCenterItemToRow= styled(View)`

  align-items: center;
  flex: 1;


`
export const ScrollViewCenter= styled(View)`
 width: 100%;
  height: 100%;
  align-items: center;
  flex:1;

`
export const ViewHeaderMain = styled(View)`
  width: 100%;
  height: 100%;

`;
export const ViewBackHeader = styled(View)
`
width: 100%;
background-color: ${colors.ui.quaternary};
`
export const ViewTopRowHeader = styled(View)
`
padding: 15px;
flex-direction: row;
width: 100%;
justify-content: space-between;

`;
export const TitleEventField =styled(Text)`
font-family: "TRYFinder-Light";
font-size: 15px;
font-weight: bold;
padding: 15px;
width: 100%;

`
export  const InputEventField = styled(TextInput)`
padding-left: 15px;
background-color: ${colors.text.inverse};
width: 100%;
height: 40px;
border-top-width: 1px;
border-bottom-width: 1px;
border-color:#ccc;
color: #000;
`
export const TextCenterName = styled(Text)`
font-family: "TRYFinder-Light";
  text-align: center;
  font-size: 15px;
`;
export const ImagePro = styled(Image)`
  width: 110px;
  height: 110px;
  border-radius: 110px;
  margin-top: 30px;
  background-color: ${colors.brand.blueLight};


`;
export const ViewIconImage = styled(View)`
background-color: ${colors.text.inverse};
width: 25px;
height: 25px;
border-radius: 25px;
position: absolute;
top: 125;
align-self: center;
align-items: center;
justify-content: center;
`
export const TitleEventFieldAdd =styled(Text)`
font-family: "TRYFinder-Light";
font-size: 15px;
font-weight: bold;
padding: 15px;
text-align: right;

`
export const TitleSmallEventFieldAdd =styled(Text)`
font-family: "TRYFinder-Light";
width: 100%;
font-size: 14px;
padding: 15px;
text-align: right;

`
export const ViewRowEventAdd= styled(View)`
flex-direction: row;
justify-content: space-between;
width: 100%;
padding-right: 15px;

`
export const ViewBackIcon= styled(View)`
width: 25px;
height: 25px;
border-radius: 35px;
align-items: center;
align-self: center;
justify-content: center;
border-width: 1px;
border-color:${colors.text.blueLight};
border-radius: 110px;

`
export const ViewBackTextBlue= styled(View)`
width: 200px;
height: 30px;



align-self: center;
align-items: flex-end;
justify-content: center;

`
export const LineView= styled(View)`
width: 100%;
height: 0.5px;
background-color: #ccc;

`

export const ViewBoxLocation = styled(View)
`
height: 75px;
width: 100%;
padding: 15px;
`
export const ViewBoxTime = styled(View)
`
background-color: ${colors.text.inverse};

width: 100%;
border-top-width: 1px;
border-bottom-width: 1px;
border-color:#ccc;
padding: 15px;
`
export const TextDefualtBoxLocation= styled(Text)`
font-family: "TRYFinder-Light";
font-size: 15px;
color: #ccc;
`
export const TextBlue= styled(Text)`
font-family: "TRYFinder-Light";

font-size: 15px;
color: ${colors.text.blueLight};
`
export const ViewSwitch= styled(View)
`
flex-direction: row;
width: 100%;
justify-content: space-between;

`;

export const ButtonSugg = styled(View)
`
width: 130;
height: 30;
border-radius: 15px;
margin-left: 15px;
margin-right: 15px;
border-width: 1px;
border-radius: 20;
border-color: ${colors.text.blueLight};
align-items: center;
justify-content: center;

`
export const ViewRowButtonSugg = styled(View)`
width: 100%;
margin-top: 15px;
align-items: center;
justify-content: center;
margin-bottom: 10px;

`
export const TitleButton=styled(Text)`
font-family: "TRYFinder-Light";
font-weight: bold;


`