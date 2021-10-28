import camelize from 'camelize'
import React from 'react'
import {
    host, TOKEN
} from "../../utils/env";
import axios from 'axios'
import {
    response
} from 'express';
import { AsyncStorage } from 'react-native';
import { checkUser, editUser } from './dataPost';
import toastShow from '../../components/toastShow';




export const signUp = (fullName, userName, phone, password) => {
    var data = JSON.stringify({
        "phoneNumber": phone,
        "userName": userName,
        "fullName": fullName
    });

    var config = {
        method: 'post',
        url: host + '/api/v1/Account/Signup',
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
            return '';
        })


}

export const poneConfirm = (code, phone) => {
        var data = JSON.stringify({
            "phoneNumber": phone,
            "code": code,

        });
        console.log(data)
        var config = {
            method: 'post',
            url: host + `/api/v1/Account/PhoneConfirm?phoneNumber=${phone}&code=${code}`,
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
                return '';
            })

        }
        export const accountChangePassword = (currentPassword, newPassword) => {

            var config = {
                method: 'get',
                url: host + `/api/v1/Account/Profile`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN.data}`,

                }
            };

            return axios(config)
                .then(function (response) {
                    console.log('response', JSON.stringify(response.data));
                    return response.data;

                })
                .catch(function (error) {
                    toastShow.show(error.response.data.message);
                    return '';
                })

        }


        export const accountProfile=()=>{

                var config = {
                    method: 'get',
                    url: host + `/api/v1/Account/Profile`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${TOKEN.data}`,

                    }
                };
                console.log(config)
                return axios(config)
                .then(function (response) {
                    console.log('response', JSON.stringify(response.data));
                    return response.data;

                })
                .catch(function (error) {
                    toastShow.show(error.response.data.message);
                    return '';
                })



        }

        export const profileUpdate=(data)=>{

             var data =editUser.dataEdit;



                var config = {
                    method: 'post',
                    url: host + `/api/v1/Account/ProfileUpdate`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${TOKEN.data}`,

                    },
                    data
                };
                console.log(config)
                return axios(config)
                .then(function (response) {
                    console.log('response', JSON.stringify(response.data));
                    return response.data;

                })
                .catch(function (error) {
                    toastShow.show(error.response.data.message);
                    return '';
                })



        }


        export const setPassword =(pass,token,passNew,isPassword)=>{
        var config;

           if(isPassword){
              config = {
                 method: 'put',
                 url: host + `/api/v1/Account/ChangePassword?currentPassword=${pass}&newPassword=${passNew}`,
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`,

                 },

             };
           }else{
             config = {
                method: 'post',
                url: host + `/api/v1/Account/SetPassword?newPassword=${pass}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,

                },

            };
           }


            console.log(config)
            return axios(config)
            .then(function (response) {
                console.log('response', JSON.stringify(response.data));
                return response.data;

            })
            .catch(function (error) {
              console.log('response',error);
                toastShow.show(error.response.data.message);
                return '';
            })


        }

        export const login=(user,pass,phone)=>{


            var config = {
                method: 'post',
                url: host + `/api/v1/Account/Login?code=${user}&password=${pass}&phoneNumber=${phone}`,
                headers: {
                    'Content-Type': 'application/json',



                },

            };
            console.log(config)
            return axios(config)
            .then(function (response) {
                console.log('response', JSON.stringify(response.data));
                return response.data;

            })
            .catch(function (error) {
                toastShow.show(error.response.data.message);
                return '';
            })

        }
        export const userList=()=>{
            var data = checkUser.array;

            var config = {
                method: 'post',
                url: host + `/api/v1/Account/UserList`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN.data}`,

                },
                data

            };
            console.log(config)
            return axios(config)
            .then(function (response) {
                console.log('response', JSON.stringify(response.data));
                return response.data;

            })
            .catch(function (error) {
                toastShow.show(error.response.data.message);
                return '';
            })

        }
