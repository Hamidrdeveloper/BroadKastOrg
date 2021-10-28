import React, { createContext, useEffect, useState ,useContext} from 'react'
import toastShow from '../../components/toastShow';
import {friendshipList, friendshipAdd,friendshipEdit, friendshipAccept, friendshipDeclined} from './friendship.service';
import {AuthenticationContext} from '../signup/sgnup.context'

export const FriendshipsContext= createContext();

export const FriendshipsContextProvider= ({children}) =>{


   const [isLoading, setIsLoading] = useState(false);
   const [allContacts, setAllContacts] = useState([]);
   const {
     logOut
   }=useContext(AuthenticationContext);
   const [typeGestes, setTypeGestes] = useState('');
   const [addGestesEv, setAddGestesEv] = useState([]);
   const [addGestesGu, setAddGestesGu] = useState([]);
   const [addGestesRe, setAddGestesRe] = useState([]);
   const [isLoadingFriendsh, setIsLoadingFriendsh] = useState(false);

   const [user, setUser] = useState(null);
   const [friends, setFriends] = useState([]);
   const [friendsActive, setFriendsActive] = useState(null);
   const [error, setError] = useState(null);
   const [isValid, setIsValid] = useState(false);
   const friendshipListUserActive=(i)=>{
       var o = [{id: "746b14dd-e7e8-4ac0-ad8a-08d9476757b4",
       userId: "8f4dd4f5-0006-4e76-936a-65aa3f036c88"},{id: "746b14dd-e7e8-4ac0-ad8a-08d9476757b4",
       userId: "8f4dd4f5-0006-4e76-936a-65aa3f036c88"},{id: "746b14dd-e7e8-4ac0-ad8a-08d9476757b4",
       userId: "8f4dd4f5-0006-4e76-936a-65aa3f036c88"}]
    setFriendsActive(o)
   }
   const friendshipListUser= ()=>{
    return friendshipList()
    .then((results)=>{
        console.log('signUpUser',results);
        setIsLoadingFriendsh(true)
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)
               var i = results.data.map(object => {
                    return {...object, desc: 0}
                   });
             console.log(i)
             setFriends(i)


        }else{
            setIsLoading(false)




        }
}

    })
    .catch((error)=>{
        setError(error);
        setIsLoadingFriendsh(true)


    })


   }
   const friendshipAddUser= (id)=>{
    setIsLoadingFriendsh(true)

    friendshipAdd(id)
    .then((results)=>{
        setIsLoadingFriendsh(false)
        if(results==401){
          logOut()
        }else{
        console.log('friendshipAdd',results);
        toastShow.show("The user was added")
        if(results!=''){

                setIsLoading(true)


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError('friendshipAdd',error);
        toastShow.show("EROOR")
        setIsLoadingFriendsh(false)

    })


   }
   const friendshipEditUser= ()=>{
    setIsLoadingFriendsh(true)

    friendshipEdit(fullName,userName,phone, password)
    .then((results)=>{
        console.log('friendshipEdit',results);
        setIsLoadingFriendsh(false)
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingFriendsh(false)

    })


   }
   const friendshipDeleteUser= ()=>{
    setIsLoadingFriendsh(true)

    friendshipDelete()
    .then((results)=>{
        setIsLoadingFriendsh(false)

        console.log('friendshipEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingFriendsh(false)

    })


   }
   const friendshipAcceptUser= (id)=>{
    setIsLoadingFriendsh(true)

    friendshipAccept(id)
    .then((results)=>{
        setIsLoadingFriendsh(false)
        if(results==401){
          logOut()
        }else{
        console.log('friendshipEdit',results);
        if(results!=''){

                setIsLoading(true)
            friendshipListUser();

        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingFriendsh(false)


    })


   }
   const friendshipDeclinedUser= (id)=>{
    setIsLoadingFriendsh(true)

    friendshipDeclined(id)
    .then((results)=>{
        setIsLoadingFriendsh(false)

        console.log('friendshipEdit',results);
        if(results==401){
          logOut()
        }else{
        if(results!=''){

                setIsLoading(true)


        }else{
            setIsLoading(false)



        }

}
    })
    .catch((error)=>{
        setError(error);
        setIsLoadingFriendsh(false)


    })


   }
   return (
       <FriendshipsContext.Provider
       value={{
        friendshipListUser,
        friendshipAddUser,
        friendshipEditUser,
        friendshipDeleteUser,
        friendshipAcceptUser,
        friendshipDeclinedUser,
        friendshipListUserActive,
        setAddGestesEv,
        setAddGestesGu,
        setAddGestesRe,
        setTypeGestes,
        setFriends,
        allContacts,
        setAllContacts,
        typeGestes,
        addGestesEv,
        addGestesGu,
        addGestesRe,
        friendsActive,
        isLoadingFriendsh,
        friends,
           isValid
       }}
       >

        {children}
       </FriendshipsContext.Provider>
   )


}
