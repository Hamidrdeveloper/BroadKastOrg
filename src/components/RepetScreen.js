import React from "react";
import { View } from "react-native";
import {
    GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { addEvent, addEventEdit } from "../services/event/dataPost";
import { addGroup } from "../services/group/dataPost";
import { addReminders, editReminders } from "../services/reminder/dataPost";
import SelectDropdownRepet from "./SelectDropdownRepet";

export const RepetScreen =({type})=>{
    const countries = [{name:"2",value:2},
    {name:"3",value:3},
     {name:"4",value:4},
      {name:"5",value:5}
    , {name:"6",value:6},
    {name:"7",value:7},
    {name:"8",value:8},{name:"9",value:9}]

    return(
        <>

       <SelectDropdownRepet
	data={countries}
	onSelect={(selectedItem, index) => {
        if(type=='event'){
            addEvent.data.repeatNum=countries[index].value

        }
        if(type=='remind'){
            addReminders.repeatNum=countries[index].value
        }
        if(type=='eventEdit'){
            addEventEdit.dataUpdate.repeatNum=countries[index].value

        }
        if(type=='remindEdit'){
            editReminders.dataPut.repeatNum=countries[index].value
        }

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

    </>
    )
}