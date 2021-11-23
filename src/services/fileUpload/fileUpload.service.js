import camelize from 'camelize';
import React from 'react';
import {host, TOKEN} from '../../utils/env';
import axios from 'axios';
import {response} from 'express';
import toastShow from '../../components/toastShow';




export const fileUploadPro = uri => {
  const file = {
    uri: uri.uri, // e.g. 'file:///path/to/file/image123.jpg'
    name: uri.fileName, // e.g. 'image123.jpg',
    type: uri.type, // e.g. 'image/jpg'
  };
  var bodyFormData = new FormData();
   console.log("photo",uri)

  bodyFormData.append('photo', {uri: uri.uri, name: uri.fileName, type: uri.type});

  var config = {
    method: 'post',
    url: 'https://bugle.eeda.ir/api/v1/Account/ProfilePhotoUpload',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${TOKEN.data}`,
      Cookie:
        '.AspNetCore.Identity.Application=CfDJ8FxMBimWB19Ap47wEvylPp81EfE5Zcrr7UNGDDDjy9RILSTpmHhTvHLEt9gVO47JNTbxTm4rYywb4dgBomLbOJtP4ifC5OptubFM0klekVh2dhLONb86QfMCeBQuHxMKFJ2_rlMtqpAYOzHYc7UrT1uhMN-5qBGTuwwjMyNq5YcXcYgccGpXjXq_5PZ7uVoDIfkhg0gMPbnsCaSKS73CVGjQOqIMKAYPVmTLXTQ0wvJ6iVdIGSLtuy0hSdDXJo_gqmhedCf-Q37IeHssaQQ48JQI_iylr592GPXLfqh8NdOZXU_bZIPNuABMbTGi67MMNhA37836BCd0cTSDUp-TtMNMvpIiw0sQ4_8QkoiTh4lcHWDXsZbp0GP_EAvS5Uy-IRmERW4eCmzdAX8KeJp5eJmWVDGqrP8uYCrq97eQLzivqMA6XlpdB78Xh-i_7X-txWdrSrWOvKrUvKbgnQOr-cTURscb7jXkXp0AEBdLyG-CNtUKhYrTEXih9q-wwOQQ9nO7YqwMObpwv0R23iSfYB41HWvV9XOHCGgihquSumjO-76lRPti24SLSG0sGBrJWL6U6GyvG5kJB_MwQ5mfEls',
    },
    data: bodyFormData,
  };
  console.log(config);
  return axios(config)
    .then(function (response) {
      console.log(response);
      toastShow.show('Photo uploaded successfully');
      return response.data;
    })
    .catch(function (error) {
      console.log("error",error);
      toastShow.show('Photo could not be uploaded');
      return '';
    });
};




export const fileUpload = uri => {
  const file = {
    uri: uri.uri, // e.g. 'file:///path/to/file/image123.jpg'
    name: uri.fileName, // e.g. 'image123.jpg',
    type: uri.type, // e.g. 'image/jpg'
  };
  var bodyFormData = new FormData();
   console.log("file",uri)

  bodyFormData.append('file', {uri: uri.uri, name: uri.fileName, type: uri.type});

  var config = {
    method: 'post',
    url: 'https://bugle.eeda.ir/api/v1/Home/FileUpload',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${TOKEN.data}`,
      Cookie:
        '.AspNetCore.Identity.Application=CfDJ8FxMBimWB19Ap47wEvylPp81EfE5Zcrr7UNGDDDjy9RILSTpmHhTvHLEt9gVO47JNTbxTm4rYywb4dgBomLbOJtP4ifC5OptubFM0klekVh2dhLONb86QfMCeBQuHxMKFJ2_rlMtqpAYOzHYc7UrT1uhMN-5qBGTuwwjMyNq5YcXcYgccGpXjXq_5PZ7uVoDIfkhg0gMPbnsCaSKS73CVGjQOqIMKAYPVmTLXTQ0wvJ6iVdIGSLtuy0hSdDXJo_gqmhedCf-Q37IeHssaQQ48JQI_iylr592GPXLfqh8NdOZXU_bZIPNuABMbTGi67MMNhA37836BCd0cTSDUp-TtMNMvpIiw0sQ4_8QkoiTh4lcHWDXsZbp0GP_EAvS5Uy-IRmERW4eCmzdAX8KeJp5eJmWVDGqrP8uYCrq97eQLzivqMA6XlpdB78Xh-i_7X-txWdrSrWOvKrUvKbgnQOr-cTURscb7jXkXp0AEBdLyG-CNtUKhYrTEXih9q-wwOQQ9nO7YqwMObpwv0R23iSfYB41HWvV9XOHCGgihquSumjO-76lRPti24SLSG0sGBrJWL6U6GyvG5kJB_MwQ5mfEls',
    },
    data: bodyFormData,
  };
  console.log(config);
  return axios(config)
    .then(function (response) {
      console.log(response);
      toastShow.show('Photo uploaded successfully');
      return response.data;
    })
    .catch(function (error) {
      console.log("error",error);
      toastShow.show('Photo could not be uploaded');
      return '';
    });
};
