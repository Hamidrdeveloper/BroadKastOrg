import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import {
    GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SelectDropdown from "./SelectDropdown";

export const AlertScreen =({value,show,setIsAlert})=>{
    const countries = [{name:"10 minutes ago",value:10}, {name:"30 minutes ago",value:30}, {name:"60 minutes ago",value:60}, {name:"2 hours ago",value:120}, {name:"3 hours ago",value:180},
    {name:"5 hours ago",value:300},
    {name:"1 days ago",value:1440},{name:"2 days ago",value:2880}]

    return(
        <>        
        

                <View style={{backgroundColor:"rgba(0,0,0,0.5)",width:`100%`,height:`100%`,alignSelf:'center',alignItems:'center',justifyContent:'center',borderRadius:15}}>
                <TouchableOpacity
        onPress={()=> setIsAlert(false)}
        
        style={{
          position:"absolute",
        width:`100%`,
        height:`100%`}}/>
        <View style={{backgroundColor:"#fff",width:`70%`,height:250,alignSelf:'center',alignItems:'center',justifyContent:'center',borderRadius:15}}>


       <SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
        show(false);
        var array=[]
        array.push({agoMinute:countries[index].value})
        value(array)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}/>

       </View>
       </View>
    </>
    )
}