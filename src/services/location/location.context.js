import React, { createContext, useEffect, useState } from 'react'
import {} from './location.service';

export const LocationContext= createContext();

export const LocationContextProvider= ({children}) =>{
   const [arrayLocationSelectEvent, setArrayLocationSelectEvent] = useState([]);
   const [arrayLocationSelectRemind, setArrayLocationSelectRemind] = useState([]);
   const [typeLocation, setTypeLocation] = useState([1]);


   return (
       <LocationContext.Provider
       value={{
        arrayLocationSelectEvent,
        arrayLocationSelectRemind,
        setArrayLocationSelectRemind,
        setArrayLocationSelectEvent,
        setTypeLocation,
        typeLocation
       }}
       >

        {children}
       </LocationContext.Provider>
   )


}
