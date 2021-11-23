import camelize from 'camelize';
import React from 'react';
import {host, TOKEN} from '../../utils/env';
import axios from 'axios';
import {response} from 'express';
import {addGroup, addGroupEdit} from './dataPost';
import toastShow from '../../components/toastShow';

export const groupList = () => {
  var config = {
    method: 'get',
    url: host + '/api/v1/Group/List',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN.data}`,
    },
  };
  console.log(config);
  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);

    return error.response.status;
    });
};
export const groupAdd = () => {
  console.log('groupAdd', addGroup);
  var data = addGroup.data

  var config = {
    method: 'post',
    url: host + '/api/v1/Group/Add',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN.data}`,
    },
    data,
  };
  console.log('groupAdd', config);

  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);
    return error.response.status;
    });
};
export const groupEdit = () => {
  var data = addGroupEdit.dataUpdate;

  var config = {
    method: 'put',
    url: host + '/api/v1/Group/Edit',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN.data}`,
    },
    data,
  };
  console.log(config)
  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);
    return error.response.status;
    });
};
export const groupDelete = id => {
  var data = {
    id: '',
  };

  var config = {
    method: 'delete',
    url: host + '/api/v1/Group/Delete',
    headers: {
      'Authorization': `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);
    return error.response.status;
    });
};
export const groupAccept = id => {
  var data = {
    id: '',
  };

  var config = {
    method: 'post',
    url: host + '/api/v1/Group/Accept',
    headers: {
      'Authorization': `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);
      toastShow.show(error.response.data.message);

    return error.response.status;
    });
};

export const groupShow = id => {
  var config = {
    method: 'get',
    url: host + `/api/v1/Group/Show?id=${id}`,
    headers: {
      'Authorization': `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(config);

  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);

      return error.response.status;
    });
};
export const groupAddGuest= (id,userId) => {


  var config = {
      method: 'post',
      url: host + `/api/v1/Group/AddMember?groupId=${id}&userId=${userId}`,
      headers: {
          'Authorization': `Bearer ${TOKEN.data}`,
          'Content-Type': 'application/json'
      }
  };
  console.log("EventAddGuest",config)

  return axios(config)
      .then(function (response) {
          console.log('response', JSON.stringify(response.data));
          return response.data;

      })
      .catch(function (error) {
          console.log(error)
          toastShow.show(error.response.data.message);
        return error.response.status;
      })


}

export const groupListTransform = ({results = []}) => {
  console.log(results);
  const mappedResults = results.map(group => {
    return {
      ...group,
    };
  });

  return camelize(mappedResults);
};
