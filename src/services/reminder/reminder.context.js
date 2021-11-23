import React, { createContext, useEffect, useState ,useContext} from 'react'
import toastShow from '../../components/toastShow';
import { editReminders } from './dataPost';
import {reminderList, reminderAdd,reminderEdit, remindershow} from './reminder.service';
import {AuthenticationContext} from '../signup/sgnup.context'

export const RemindersContext= createContext();

export const RemindersContextProvider= ({children}) =>{
   const [isLoading, setIsLoading] = useState(false);
   const [isAddRemind, setIsAddRemind] = useState(false);
   const [isLoadingEditRemind, setIsLoadingEditRemind] = useState(false);
   const [userReminders, setUserReminders] = useState([]);
   const [isLoadingRemind, setIsLoadingRemind] = useState(false);
   const {
     logOut
   }=useContext(AuthenticationContext);
   const [error, setError] = useState(null);
   const [reminderDataShowUser, setReminderDataShowUser] = useState(null);
   const [isLoadingShowReminders, setIsLoadingShowReminders] = useState(null);
   const [isValid, setIsValid] = useState(false);
   const reminderListUser= (month)=>{
    setIsLoadingRemind(true);
   return   reminderList(month)
    .then((results)=>{
        setIsLoadingRemind(false);

        console.log('reminderList',results);
        if(results==401){
          logOut()
        }else{
        if(results!=null){

                setIsLoading(true)
                setUserReminders(results.data)
                return results;
        }else{
            setIsLoading(false)

            return results;


        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingRemind(false);
        return null;

    })


   }
   const reminderAddUser= ()=>{
    setIsLoadingRemind(true);
    setIsAddRemind(false)
    reminderAdd()
    .then((results)=>{
        setIsLoadingRemind(false);
        if(results==401){
          logOut()
        }else{
        console.log('reminderAdd',results);
        if(results.data!=null){
            toastShow.show("Successfully Added",1000);
            setIsAddRemind(true)

                setIsLoading(true)
                reminderListUser()

        }else{
            setIsAddRemind(false)
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingRemind(false);
        setIsAddRemind(false)


    })


   }
   const reminderEditUser= ()=>{
    setIsLoadingRemind(true);

    setIsLoadingEditRemind(false)
    reminderEdit()
    .then((results)=>{
        setIsLoadingRemind(false);
        reminderListUser();
        console.log('reminderEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results.data!=null){
            // reminderShowUser(editReminders.dataPut.id)
                setIsLoadingEditRemind(true)
                toastShow.show("Successfully Edit",1000);


        }else{
            setIsLoadingEditRemind(false)



        }
}

    })
    .catch((error)=>{
        setError(error);
        setIsLoadingRemind(false);

    })


   }
   const reminderDeleteUser= ()=>{
    setIsLoadingRemind(true);

    reminderDelete()
    .then((results)=>{
        setIsLoadingRemind(false);

        console.log('reminderEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)
                toastShow.show("Successfully Delete",1000);


        }else{
            setIsLoading(false)



        }
}

    })
    .catch((error)=>{
        setError(error);
        setIsLoadingRemind(false);

    })


   }
   const reminderAcceptUser= ()=>{
    setIsLoadingRemind(true);

    reminderAccept()
    .then((results)=>{
        setIsLoadingRemind(false);

        console.log('reminderEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)

                toastShow.show("Successfully Accept",1000);

        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingRemind(false);

    })


   }


   const reminderShowUser= (id)=>{
    setIsLoadingRemind(true);

    remindershow(id)
    .then((results)=>{
        setIsLoadingRemind(false);
        if(results==401){
          logOut()
        }else{
        console.log('reminderShowUser',results);
        if(results!=''){

                setIsLoadingShowReminders(true)
                setReminderDataShowUser(results.data)

        }else{
            setIsLoadingShowReminders(false)



        }
}

    })
    .catch((error)=>{
        setError(error);
        setIsLoadingRemind(false);

    })


   }
   return (
       <RemindersContext.Provider
       value={{
        reminderListUser,
        reminderAddUser,
        reminderEditUser,
        reminderDeleteUser,
        reminderAcceptUser,
        setIsLoadingShowReminders,
        reminderShowUser,
        reminderDataShowUser,
        isAddRemind,
        setIsAddRemind,
        isLoadingShowReminders,
        isLoadingEditRemind,
        isLoadingRemind,
        setUserReminders,
        userReminders,
        setIsLoadingEditRemind,
           isValid
       }}
       >

        {children}
       </RemindersContext.Provider>
   )


}
