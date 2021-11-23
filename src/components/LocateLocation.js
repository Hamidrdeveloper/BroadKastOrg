import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export const LocateLocation =()=>{

    return(
        <>
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDnybmUyqZSusAtTOJ-FILf5DUz5b6Rwd0',
        language: 'en',
      }}
    />
    </>
    )
}