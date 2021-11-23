import { FlatList } from "react-native";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
export const FlatListAvatar = styled(FlatList)`
  width: 100%;

`;

export const ViewMain = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color:#f6fafb;
`;

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
font-size:18;
border-top-width: 1px;
border-bottom-width: 1px;
border-color: ${colors.text.blueLightGray};
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
export const TitleEventFieldAdd =  styled(Text)`
font-family: "TRYFinder-Light";
font-size: 15px;
font-weight: bold;
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
export const LineView= styled(View)`
width: 200%;
right:20;
height: 1px;
background-color:${colors.text.blueLight};

`

export const ViewBoxLocation = styled(View)
`
background-color: ${colors.text.inverse};
height: 75px;
width: 100%;
border-top-width: 1px;
border-bottom-width: 1px;
border-color:${colors.text.blueLightGray};
padding: 15px;
`
;
export const ViewBoxTime = styled(View)
`
background-color: ${colors.text.inverse};

width: 100%;
border-top-width: 1px;
border-bottom-width: 1px;
border-color:${colors.text.blueLightGray};
padding: 15px;
`
export const TextDefualtBoxLocation= styled(Text)`
font-family: "TRYFinder-Light";
font-size: 15px;
color: #000;
font-size:18px;
padding-bottom:10px;
`
export const TextBlue= styled(Text)`
font-family: "TRYFinder-Light";
padding: 15px;
width: 100%;
font-size: 15px;
color: ${colors.text.blueLight};
`
export const ViewSwitch= styled(View)
`
flex-direction: row;
width: 100%;
justify-content: space-between;

`;
