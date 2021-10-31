import React, { createContext, useEffect, useState ,useContext} from 'react'
import toastShow from '../../components/toastShow';
import {eventList, eventAdd,eventEdit, eventAccept, eventDelete, eventShow, eventDeclined, eventConvertToGroup, timePollAnswer, locationPollAnswer, timePollResult, locationPollResult, EventAddGuest} from './event.service';
import moment from 'moment'
import { Navigation } from '../../utils/env';
import {AuthenticationContext} from '../signup/sgnup.context'
export const EventsContext= createContext();

export const EventsContextProvider= ({children}) =>{

    const [isLoadingShow, setIsLoadingShow] = useState(false);
    const [isLoadingEditEvent, setIsLoadingEditEvent] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingEv, setIsLoadingEv] = useState(false);
   const [isConvertToGroup, setIsConvertToGroup] = useState(false);
   const [typeLoadingEv, setTypeLoadingEv] = useState('');
    const [eventGurstsId, setEventGurstsId] = useState('');

   const [isClickEvShow, setIsClickEvShow] = useState(false);
   const [isAddEvent, setIsAddEvent] = useState(false);
   const [typeLocation, setTypeLocation] = useState(null);
   const [userEvents, setUserEvents] = useState([]);
   const [userInvateEvents, setUserInvateEvents] = useState([]);
   const [userGoingEvents, setUserGoingEvents] = useState([]);
   const [locPollResultData, setLocPollResultData] = useState([]);
   const [timePollResultData, setTimePollResultData] = useState([]);

   const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};

   const [eventShowData, setEventShowData] = useState({
    "id": " ",
    "title": " " ,
    "photo": " ",
    "date": " ",
    "allDay": true,
    "startTime": " ",
    "endTime": "",
    "locationName": " ",
    "locationDetail": " ",
    "lat": 44915325.741316706,
    "lng": -65478467.57602622,
    "createTime": " ",
    "creatorId": " ",
    "creatorFullname": " ",
    "notes": " ",
    "repeatFrequency": 4,
    "repeatNum": -34444560,
    "guestStatus": {
        "accepted": 0,
        "declined": 0,
        "pending": 0
    }});
   const [error, setError] = useState(null);
   const [isValid, setIsValid] = useState(false);
   const {
     logOut
   }=useContext(AuthenticationContext);

   const eventListUser= (month)=>{
    setIsLoadingEv(true)
   return eventList(month)
    .then((results)=>{
        setIsLoadingEv(false)
        console.log('signUpUser',results);
        if(results==401){
          logOut()
        }else{

        if(results!=''){
                setIsLoading(true)
                setUserEvents(results.data)

                return results
        }else{
            setIsLoading(false)
            return results

        }
}

    })
    .catch(function (error){

        setIsLoadingEv(false)

        setError(error);
        console.log('EROOOOOOOR',error);
        return null;

    })


   }

   useEffect(() =>{
       if(userEvents!=null){
        userEvents.forEach(element => {
            console.log('userEvents',element.accepted)
            if(element.accepted==true){

                setUserGoingEvents(oldArray => [...oldArray, element]);


            }else{
                console.log('userInvateEvents','ok')



                setUserInvateEvents(oldArray => [...oldArray, element]);

            }
        });
       }


   }
    ,[userEvents])
   const eventAddUser= ()=>{
    setIsLoadingEv(true)
    eventAdd()
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventAdd',results);
        if(results==401){
          logOut()
        }else{
        if(results.data!=null){

                setIsAddEvent(true)
                toastShow.show("Successfully Added",1000);
                eventListUser()
                setEventShowData(results.data);

        }else{
            setIsAddEvent(false)



        }
      }


    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })


   }
   const eventEditUser= ()=>{
    setIsLoadingEv(true)
    console.log('eventEdit','eventEdit');
     eventEdit()
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results.data!=''){

                setIsLoadingEditEvent(true)

                eventListUser()
                setEventShowData(results.data);
        }else{
            setIsLoadingEditEvent(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEditEvent(false)
        setIsLoadingEv(false)


    })


   }
   const eventDeleteUser= (id)=>{
    setIsLoadingEv(true)
    eventDelete(id)
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)
                toastShow.show("Successfully Deleted",1000);


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })


   }
   const eventDeclinedUser= (id)=>{
    setIsLoadingEv(true)
    eventDeclined(id)
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventDeclined',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)
                toastShow.show("Successfully Deleted",1000);
                eventListUser();

        }else{
            setIsLoading(false)



        }
}

    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })


   }
   const eventAddGursts= (eventId,userId)=>{
    setIsLoadingEv(true)
    eventAddGuest(eventId,userId)
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventAddGuest',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)
                toastShow.show("Successfully Deleted",1000);


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })


   }
   const eventConvertToGroupUser= (id)=>{
    setIsConvertToGroup(false);
    setIsLoadingEv(true)
    eventConvertToGroup(id)
    .then((results)=>{
        setIsConvertToGroup(true);
        setIsLoadingEv(false)

        console.log('eventDeclined',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){
            eventListUser();

                setIsLoading(true)
                toastShow.show("Successfully Convert To Group",1000);


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })


   }
   const timePollAnswerUser= (id)=>{
    setIsLoadingEv(true)
    timePollAnswer(id)
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventDeclined',results);
        if(results==401){
          logOut()
        }else{
        if(results!=null){


                setIsLoading(true)
                toastShow.show("Successfully Poll",1000);


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })


   }
   const locationPollAnswerUser= (id)=>{
    setIsLoadingEv(true)
    locationPollAnswer(id)
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventDeclined',results);
        if(results==401){
          logOut()
        }else{
        if(results!=null){


                setIsLoading(true)
                toastShow.show("Successfully Poll",1000);


        }else{
            setIsLoading(false)



        }
}

    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })


   }
   const eventAddGuestUser= (userId,id)=>{
    EventAddGuest(id,userId)
    .then((results)=>{

        console.log('EventAddGuestUser',results.data);
        if(results==401){
          logOut()
        }else{
        if(results.data!=null){
                eventShowUser(id)

                toastShow.show("Successfully Add Guest",1000);


        }else{



        }

}
    })
    .catch((error)=>{
        setError(error);

    })


   }

   const eventAcceptUser= (id)=>{
    setIsLoadingEv(true)
    eventAccept(id)
    .then((results)=>{
        setIsLoadingEv(false)

        console.log('eventEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){
            eventListUser();
                setIsLoading(true)


        }else{
            setIsLoading(false)



        }
}

    })
    .catch((error)=>{
        setError(error);
        setIsLoadingEv(false)

    })
}
    const eventShowUser= (id)=>{
        setIsLoadingEv(true)
        setIsLoadingShow(false)
        eventShow(id)
        .then((results)=>{
            setIsLoadingEv(false)
            console.log('eventShowUser',results);
            if(results==401){
            
              logOut()
            }else{
            if(results!=''){

             setEventShowData(results.data);
                    setIsLoadingShow(true)


            }else{
                setIsLoadingShow(false)



            }
}

        })
        .catch((error)=>{
                        setIsLoadingEv(false)

            setError(error);

        })


   }
   const locationPollResultUser=(id)=>{

    locationPollResult(id)
      .then(results => {
        console.log(results.data)
        if(results==401){
          logOut()
        }else{
        if (results != '') {

    

          setLocPollResultData(results.data)
        } else {

        }
      }
      })
      .catch(error => {



      });
  }
  const timePollResultUser=(id)=>{

    timePollResult(id)
      .then(results => {
        console.log(results.data)
        if(results==401){
          logOut()
        }else{
        if (results != '') {

       

          setTimePollResultData(results.data)
        } else {

        }
      }
      })
      .catch(error => {



      });
  }
   return (
       <EventsContext.Provider
       value={{
        eventListUser,
        eventAddUser,
        eventEditUser,
        eventDeleteUser,
        eventAcceptUser,
        eventShowUser,
        setIsAddEvent,
        eventDeclinedUser,
        eventConvertToGroupUser,
        locationPollAnswerUser,
        timePollAnswerUser,
        locationPollResultUser,
        timePollResultUser,
        eventAddGuestUser,
        isClickEvShow,
        setIsClickEvShow,
        isLoadingEditEvent,
        setIsLoadingEditEvent,
        isLoadingShow,
        setIsLoadingShow,
        eventShowData,
        isConvertToGroup,
        userInvateEvents,
        userGoingEvents,
        userEvents,
        isAddEvent,
        typeLoadingEv,
    isLoadingEv,
    setIsLoadingEv,
           isValid,
           locPollResultData,
           timePollResultData,
           eventAddGursts,
           eventGurstsId,
           setEventGurstsId,
           setUserEvents,
       }}
       >

        {children}
       </EventsContext.Provider>
   )


}
