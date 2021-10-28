import { Image, ScrollView, Text, TextInput, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";


export const ViewMain = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: rgba(78, 205, 196, 0.05 );
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
color:#000;
font-size: 15px;
font-weight: bold;
padding: 15px;
width: 100%;

`
export  const InputEventField = styled(TextInput)`
color:#000;
padding-left: 15px;
background-color: ${colors.text.inverse};
width: 100%;
height: 40px;
border-top-width: 1px;
border-bottom-width: 1px;
border-color:#ccc;
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


`;
export const TitleEventFieldAdd =styled(Text)`
font-family: "TRYFinder-Light";
font-size: 15px;
font-weight: bold;
padding: 15px;
text-align: right;

`
export const ViewRowEventAdd= styled(View)`
flex-direction: row;
justify-content: space-between;
align-items:center;
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
width: 100%;
height: 0.5px;
background-color: #c8eff1;

`

export const ViewBoxLocation = styled(View)
`
background-color: ${colors.text.inverse};
height: 75px;
width: 100%;
border-top-width: 1px;
border-bottom-width: 1px;
border-color:#ccc;
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
padding: 15px;

font-size: 12px;
color: ${colors.text.blueLight};
`
export const ViewSwitch= styled(View)
`
flex-direction: row;
width: 100%;
justify-content: space-between;

`;
