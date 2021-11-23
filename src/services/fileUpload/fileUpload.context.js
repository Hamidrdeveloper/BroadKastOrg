import React, {createContext, useContext, useEffect, useState} from 'react';
import {addEvent, addEventEdit} from '../event/dataPost';
import {addGroup, addGroupEdit} from '../group/dataPost';
import { editUser } from '../signup/dataPost';
import { AuthenticationContext } from '../signup/sgnup.context';
import {fileUpload, fileUploadPro} from './fileUpload.service';

export const FileUploadContext = createContext();

export const FileUploadContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSndFileChat, setIsSndFileChat] = useState(false);
  const [fileChat, setFileChat] = useState(null);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [isLoadingImage,setIsLoadingImage]= useState(false);
  const [user, setUser] = useState(null);
  const {profileUpdateUser} = useContext(
    AuthenticationContext
  );
  const fileUploadUserProfile= (uri) => {
    setIsLoadingFile(true);
    fileUploadPro(uri)
      .then(resualt => {


            editUser.dataEdit.photo= resualt.data;
            profileUpdateUser();


        console.log(resualt);
        setIsLoadingFile(false);

      })
      .catch(error => {
        console.log(error);
        setIsLoadingFile(false);

      });
  };
  const fileUploadUser = (uri, type) => {
    setIsLoadingFile(true);
    setFileChat(null)
    setIsSndFileChat(false);
    setIsLoadingImage(true)

    fileUpload(uri)
      .then(resualt => {
        setIsLoadingImage(false)
        console.log("EDIT",type)
        console.log("EDIT",resualt)
        if(resualt.data!=null){


        if (type=='remind') {
        }
        if (type=='event') {
          addEvent.data.photo = resualt.data;
        }
        if (type=='addEventEdit') {
          addEventEdit.dataUpdate.photo = resualt.data;
        }
        if (type=='group') {
          addGroup.data.photo = resualt.data;
        }
        if (type=='groupEdit') {

          addGroupEdit.dataUpdate.photo = resualt.data;
        }
        if (type=='addGroupEdit') {
          addGroupEdit.dataUpdate.photo = resualt.data;
        }
        if (type=='profile') {
            editUser.dataEdit.photo= resualt.data;
            profileUpdateUser();
        }
        if (type=='chat') {

          setFileChat(resualt.data)
          setIsSndFileChat(true);

      }

        console.log(resualt);
        setIsLoadingFile(false);
    }else{
      setIsLoadingFile(false);
      setFileChat(null)
      setIsSndFileChat(false);
  setIsLoadingImage(false)
    }

      })
      .catch(error => {
        console.log(error);
        setIsLoadingFile(false);
          setFileChat(null)
          setIsSndFileChat(false);
  setIsLoadingImage(false)


      });
  };

  return (
    <FileUploadContext.Provider
      value={{
        fileUploadUser,
        fileUploadUserProfile,
        isLoadingFile,
        isSndFileChat,
        fileChat,
        isLoadingImage
      }}>
      {children}
    </FileUploadContext.Provider>
  );
};
