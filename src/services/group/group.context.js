/* eslint-disable prettier/prettier */
import React, {createContext, useEffect, useState, useContext} from 'react';
import {
  groupList,
  groupAdd,
  groupEdit,
  groupListTransform,
  groupShow,
  groupAddGuest,
} from './group.service';
import {AuthenticationContext} from '../signup/sgnup.context';

export const GroupsContext = createContext();

export const GroupsContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingShow, setIsLoadingShow] = useState(false);
  const [isLoadingGroups, setIsLoadingGroups] = useState(false);
  const [groupUser, setGroupUser] = useState(null);
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isValidAdd, setIsValidAdd] = useState(false);
  const [isValidEdit, setIsValidEdit] = useState(false);
  const [groupGurstsId, setGroupGurstsId] = useState('');
  const {logOut} = useContext(AuthenticationContext);
  const [groupShowData, setGroupShowData] = useState({
    id: 'efcccb1b-4dad-42e3-0e4e-08d94b517f9f',
    name: 'sed ',
    photo: 'eius',
    description: 'offi',
    everyoneCanCreateEvent: true,
    allMemmberCandAddMemmber: false,
    createTime: '2021-07-20T12:09:25.4705143',
    creatorId: 'b501cc87-5b02-454a-9192-bf2eff35b7c3',
    creatorFullname: 'Hamidreza',
    groupMembers: [],
  });

  const groupShowUser = id => {
    setIsLoadingShow(false);
    setIsLoadingGroups(true);
    groupShow(id)
      .then(results => {
        setIsLoadingGroups(false);

        console.log('eventShowUser', results);
        if (results == 401) {
          logOut();
        } else {
          if (results != '') {
            setGroupShowData(results.data);
            setIsLoadingShow(true);
          } else {
            setIsLoadingShow(false);
          }
        }
      })
      .catch(error => {
        setError(error);
        setIsLoadingShow(false);
        setIsLoadingGroups(false);
      });
  };

  const groupAddGuestUser = (id, userId) => {
    groupAddGuest(userId, id)
      .then(results => {
        console.log('EventAddGuestUser', results);
        if (results == 401) {
          logOut();
        } else {
          if (results != '') {
            groupShowUser(userId);
            toastShow.show('Successfully Add Guest', 1000);
          } else {
          }
        }
      })
      .catch(error => {
        setError(error);
      });
  };
  const groupListUser = () => {
    setIsLoadingGroups(true);

    return groupList()
      .then(results => {
        console.log('groupListUser', results);
        setIsLoadingGroups(false);
        if (results == 401) {
          logOut();
        } else {
          if (results != '') {
            setIsLoading(true);
            setGroupUser(results.data);
            return results;
          } else {
            setIsLoading(false);

            return results;
          }
        }
      })
      .catch(error => {
        console.log('groupListUser', error);
        setError(error);
        setIsLoadingGroups(false);
        return null;
      });
  };
  const groupAddUser = () => {
    setIsValidAdd(false);
    setIsLoadingGroups(true);

    groupAdd()
      .then(results => {
        setIsLoadingGroups(false);
        if (results == 401) {
          logOut();
        } else {
          if (results != '') {
            setGroupShowData(results.data);
            console.log('groupAdd', results);

            setIsLoading(true);

            setIsValidAdd(true);
            groupListUser();
          } else {
            setIsLoading(false);
            setIsValidAdd(false);
          }
        }
      })
      .catch(error => {
        setError(error);
        setIsValidAdd(false);
        setIsLoadingGroups(false);
      });
  };
  const groupEditUser = () => {
    setIsValidEdit(false);
    setIsLoadingGroups(true);

    groupEdit()
      .then(results => {
        console.log('groupEdit', results);
        setIsLoadingGroups(false);
        if (results == 401) {
          logOut();
        } else {
          if (results != '') {
            setIsValidEdit(true);

            groupListUser();
          } else {
            setIsValidEdit(false);
          }
        }
      })
      .catch(error => {
        setError(error);
        setIsValidEdit(false);
        setIsLoadingGroups(false);
      });
  };
  const groupDeleteUser = () => {
    setIsLoadingGroups(true);

    // eslint-disable-next-line no-undef
    groupDelete()
      .then(results => {
        console.log('groupEdit', results);
        setIsLoadingGroups(false);
        if (results == 401) {
          logOut();
        } else {
          if (results != '') {
            setIsLoading(true);
          } else {
            setIsLoading(false);
          }
        }
      })
      .catch(error => {
        setError(error);
        setIsLoadingGroups(false);
      });
  };
  const groupAcceptUser = () => {
    setIsLoadingGroups(true);

    groupAccept()
      .then(results => {
        console.log('groupEdit', results);
        setIsLoadingGroups(false);
        if (results == 401) {
          logOut();
        } else {
          if (results != '') {
            setIsLoading(true);
          } else {
            setIsLoading(false);
          }
        }
      })
      .catch(error => {
        setError(error);
        setIsLoadingGroups(false);
      });
  };
  return (
    <GroupsContext.Provider
      value={{
        groupListUser,
        groupAddUser,
        groupEditUser,
        groupDeleteUser,
        groupAcceptUser,
        groupShowUser,
        setIsValidAdd,
        setIsLoadingShow,
        setIsValidEdit,
        groupAddGuestUser,
        isLoadingGroups,
        isValidEdit,
        isLoadingShow,
        isValidAdd,
        groupShowData,
        groupUser,
        setGroupGurstsId,
        groupGurstsId,
        setGroupUser,
      }}>
      {children}
    </GroupsContext.Provider>
  );
};
