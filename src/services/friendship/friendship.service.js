import camelize from 'camelize'
import React from 'react'
import {
    host, TOKEN
} from "../../utils/env";
import axios from 'axios'
import {
    response
} from 'express';
import toastShow from '../../components/toastShow';



export const friendshipList = () => {


    var config = {
        method: 'get',
        url: host + '/api/v1/Friendship/List',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN.data}`,        },

    };
    console.log('resconfigponse', config);
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
export const friendshipAdd = (id) => {


    var config = {
        method: 'post',
        url: host + `/api/v1/Friendship/Add?userId=${id}`,
        headers: {
            'Authorization': `Bearer ${TOKEN.data}`,
            'Content-Type': 'application/json'
        },
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

export const friendshipDelete = (id) => {
    var data = {
        id: ''
    }

    var config = {
        method: 'delete',
        url: host + '/api/v1/Friendship/Delete',
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
export const friendshipAccept = (id) => {
    var data = {
        id: ''
    }

    var config = {
        method: 'post',
        url: host + `/api/v1/Friendship/Accept?id=${id}`,
        headers: {
            'Authorization': `Bearer ${TOKEN.data}`,
            'Content-Type': 'application/json'
        },
        data
    };
    console.log(config)
    return axios(config)
        .then(function (response) {
            console.log('responseFreindShip',response);
          if(response.data.statusCode==200){
          toastShow.show("User successfully added");
         }
            return response.data;

        })
        .catch(function (error) {
            console.log(error.response.data.message)
             toastShow.show(error.response.data.message);

          return error.response.status;
        })


}
export const friendshipDeclined= (id) => {
    var data = {
        id: ''
    }

    var config = {
        method: 'post',
        url: host + `/api/v1/Friendship/Declined?id=${id}`,
        headers: {
            'Authorization': `Bearer ${TOKEN.data}`,
            'Content-Type': 'application/json'
        },
        data
    };

    return axios(config)
        .then(function (response) {
            console.log('response', JSON.stringify(response.data));
            if(response.data.statusCode==200){
            toastShow.show("User successfully declined");
           }
            return response.data;

        })
        .catch(function (error) {
             toastShow.show(error.response.data.message);

          return error.response.status;
        })


}
