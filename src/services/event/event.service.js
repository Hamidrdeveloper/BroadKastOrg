/* eslint-disable prettier/prettier */
import camelize from 'camelize';
import React, {useContext} from 'react';
import {host, TOKEN} from '../../utils/env';
import axios from 'axios';
import {response} from 'express';
import {addEvent, addEventEdit} from './dataPost';
import {AsyncStorage} from 'react-native';
import toastShow from '../../components/toastShow';

import {AuthenticationContext} from '../signup/sgnup.context';

export const eventList = (month = '') => {
  var config = {
    method: 'get',
    url: host + `/api/v1/Event/List?month=${month}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN.data}`,
    },
  };
  console.log('eventList', config);
  return axios(config)
    .then(function (response) {
      console.log('eventList', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log('eventList', error);
      console.log('Error==>', error.response.status.toString());

      return error.response.status;
    });
};
export const eventAdd = () => {
  var data = addEvent.data;
  console.log(data);
  var config = {
    method: 'post',
    url: host + '/api/v1/Event/Add',
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
    data,
  };
  console.log('eventList', config);
  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));

      return response.data;
    })
    .catch(function (error) {
      console.log('Error==>', error.response);
      toastShow.show(error.response.data.Message);
      return error.response.status;
    });
};
export const eventAddGursts = (eventId, userId) => {
  var config = {
    method: 'post',
    url: host + `/api/v1/Event/AddGursts?eventId=${eventId}&userId=${userId}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log('eventList', config);
  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));

      return response.data;
    })
    .catch(function (error) {
      console.log(error.response.data.Message);
      toastShow.show(error.response.data.Message);
      return error.response.status;
    });
};
export const eventEdit = () => {
  var data = addEventEdit.dataUpdate;

  var config = {
    method: 'put',
    url: host + '/api/v1/Event/Edit',
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      toastShow.show('Editing was successful');
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);

      return error.response.status;
    });
};
export const eventDelete = id => {
  var data = {
    id: id,
  };

  var config = {
    method: 'delete',
    url: host + `/api/v1/Event/Delete?id=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log('DELETE', config);

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
export const eventDeclined = id => {
  var data = {
    id: id,
  };

  var config = {
    method: 'post',
    url: host + `/api/v1/Event/Declined?id=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log('Declined', config);

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
export const eventConvertToGroup = id => {
  var data = {
    id: id,
  };

  var config = {
    method: 'post',
    url: host + `/api/v1/Event/ConvertToGroup?id=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log('ConvertToGroup', config);

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
export const EventAddGuest = (id, userId) => {
  var config = {
    method: 'post',
    url: `https://bugle.eeda.ir/api/v1/Event/AddGuest?eventId=${id}&userId=${userId}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log('EventAddGuest', config);

  return axios(config)
    .then(function (response) {
      console.log('response', response);
      return response;
    })
    .catch(function (error) {
      console.log('responseerror', error);
      toastShow.show(error.response.data.message);

      return error.response.status;
    });
};
export const eventAccept = id => {
  var config = {
    method: 'post',
    url: host + `/api/v1/Event/Accept?id=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(config);

  return axios(config)
    .then(function (response) {
      toastShow.show('Accept was successful');
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);

      toastShow.show(error.response.data.Message);
      return error.response.status;
    });
};
export const eventShow = id => {
  var config = {
    method: 'get',
    url: host + `/api/v1/Event/Show?id=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
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
export const timePollAnswer = id => {
  var config = {
    method: 'post',
    url: `https://bugle.eeda.i/api/v1/Event/LocationPollAnswer?id=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
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
export const locationPollAnswer = id => {
  var config = {
    method: 'post',
    url: `${host}/api/v1/Event/LocationPollAnswer?id=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(config);

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      toastShow.show(error.response.data.message);

      return error.response.status;
    });
};
export const timePollResult = id => {
    var config = {
        method: 'get',
        url: 'https://bugle.eeda.ir/api/v1/Event/LocationPollResult?eventId=urn:uuid:3f7b0f0d-f52c-6b42-ff48-cd0e77fb40d1',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.GXkC_vFhPrUg_a5KVrcqNtGZUzO24895sA6ln2ygIpH9h8J1apcV0A.qTKzPd960F3bKATxxO4b9w.mT2Kv_8mmpsKHJ7QR2Soyw3zzOiA52D2n2i8DvLd-cFKNnyTKeEfsQgO0yyd7rEnlfHPtEb_fK19bamd79tsu6fuSuaqp7d30jizAuJUoi3CQ6XDh6pTLJJb12Qz3Yka34B8b8PYaQ5Xofke-6UoiPL50l9Whvg2tggbd9pRDoXpek35ixaM_3pAEtdvsDKZjCavDHGC0OqvARUx0ZcL3xLUcWkzHcwIwLSR1nnM8NonAhRsOgZj7qPybZO4fqcUAI29SOiX_wbp8N7iEPQ_9VV-ySXi-CnhX7CEuvj5MUR94_UV_YJDEoq9HzZtts_fAP5o5ZxykBbFjNE_GnTXhr-G55RfjeVykaw-60iUdsu8ioGVitGWe_n9jmRWcA1-9kax9PUoj-vxha_Xj3o_LTMbbQPJ21CVWzfh9igy6nUxeLz4DRmoTUxZEhdJBE-0x29Ztt_6LTAUjP_1MMrc9lMIBLMSoahchwn4yc0Osn40aQayTC80yhBj7pZQBQhi.WlMAWXSUoYwE9EDfhFWDlQ', 
          'Cookie': '.AspNetCore.Identity.Application=CfDJ8KbQukxpV_VOgcFxMzuZvCfkH86GsK0lzhN2SwjwLup57ZAiyJF8ecFaKILPgjBWq4jIRJq6z9JWpfbnrAhJ0SFsN8Y8U0zr1gsM_4_COZeON15iwBDE3dOvShit5l8FvtYNc8Jq1gNfNEWIbPUyINWta86FgxPZBt1B840IGpDJOdrISZ08dlIBz25CgXLCz4twWD8QfEqI78dRVzWRfHzJ4294fEKS9ITUdtbO28LyLDaITWpaIcPJHI-sW1FNmkxTLjOISvZ3ITOEkMSd1npmsp4UHJ9xz5NRhTbofbqYwp7P-DEUW5xrEPxBi_pFM1MU0F7haApVn15IMpikT5bbG-OprBTVgcXt9tvsPA2odG3F0rePr-6Fulaa6CpcoLB3wi3NcmRDWjrtPMerGfzx43pRM6exvm8NA1p7GqgD_VwQ_IWBVL87SnGYxswFOmb6wPcePAAPyitVc767vmTkSIDxVcxK8L-FoZWDFbll1IKPnwStgKRmdvtkpY2QLQVkPzp-rfitgY8qsRGoQ9Er7uEG2NKU7F8_zvFtNjdWd5j8YjqaRkhEphe5mumBE8PHk2dCErx2Oj-tWBdL4EcQy5xzsDZaCN9sttUw2j2C7XEaGGACHVsoIhDhkztwIg'
        }
      };
  console.log(config);

  return axios(config)
    .then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
        console.log(error);
      toastShow.show(error.response.data.message);

      return error.response.status;
    });
};
export const locationPollResult = id => {
  var config = {
    method: 'get',
    url:
      'http://bugle.eeda.ir' +
      `​/api/v1/Event/LocationPollResult?eventId=${id}`,
    headers: {
      Authorization: `Bearer ${TOKEN.data}`,
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
        console.log(error);
      toastShow.show(error.response.data.message);

      return error.response.status;
    });
};
