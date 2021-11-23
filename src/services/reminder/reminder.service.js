import camelize from 'camelize'
import React from 'react'
import {
    host, TOKEN
} from "../../utils/env";
import axios from 'axios'
import {
    response
} from 'express';
import { addReminders, editReminders } from './dataPost';
import toastShow from '../../components/toastShow';



export const reminderList = (month='') => {



    var config = {
        method: 'get',
        url: `https://bugle.eeda.ir/api/v1/Reminder/List?month=${month}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN.data}`,

        },
      };

   return   axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
         toastShow.show(error.response.data.message);

      });


}

export const reminderAdd = () => {
    var data =JSON.stringify(addReminders.data);
    console.log(data)
    var config = {
        method: 'post',
        url: host + '/api/v1/Reminder/Add',
        headers: {
            'Authorization': `Bearer ${TOKEN.data}`,
            'Content-Type': 'application/json'
        },
        data
    };

    return axios(config)
        .then(function (response) {
            console.log('response', JSON.stringify(response.data));
            return response.data;

        })
        .catch(function (error) {
             toastShow.show(error.response.data.message);

          return error.response.status;
        })


}
export const reminderEdit = () => {
    var data = editReminders.dataPut;

    var config = {
        method: 'put',
        url: host + '/api/v1/Reminder/Edit',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN.data}`,
        },
        data
    };
   console.log('reminderEdit',config)
    return axios(config)
        .then(function (response) {
            console.log('response', JSON.stringify(response.data));
            return response.data;

        })
        .catch(function (error) {
             toastShow.show(error.response.data.message);

            return error.response.status;
        })


}
export const reminderDelete = (id) => {
    var data = {
        id: ''
    }

    var config = {
        method: 'delete',
        url: host + '/api/v1/Reminder/Delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN.data}`,
        },
        data
    };

    return axios(config)
        .then(function (response) {
            console.log('response', JSON.stringify(response.data));
            return response.data;

        })
        .catch(function (error) {
             toastShow.show(error.response.data.message);

          return error.response.status;
        })


}
export const reminderAccept = (id) => {
    var data = {
        id: ''
    }

    var config = {
        method: 'post',
        url: host + '/api/v1/Reminder/Accept',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN.data}`,
        },
        data
    };

    return axios(config)
        .then(function (response) {
            console.log('response', JSON.stringify(response.data));
            return response.data;

        })
        .catch(function (error) {
             toastShow.show(error.response.data.message);

          return error.response.status;
        })


}

export const remindershow = id => {
    var config = {
      method: 'get',
      url: host + `/api/v1/Reminder/Show?id=${id}`,
      headers: {
        'Authorization': `Bearer ${TOKEN.data}`,
        'Content-Type': 'application/json',
      },
    };
    console.log(config);

    return axios(config)
      .then(function (response) {
        console.log('remindershow', JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
         toastShow.show(error.response.data.message);

        return error.response.status;
      });
  };
