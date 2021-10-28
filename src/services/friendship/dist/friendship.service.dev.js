"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friendshipDeclined = exports.friendshipAccept = exports.friendshipDelete = exports.friendshipAdd = exports.friendshipList = void 0;

var _camelize = _interopRequireDefault(require("camelize"));

var _react = _interopRequireDefault(require("react"));

var _env = require("../../utils/env");

var _axios = _interopRequireDefault(require("axios"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var friendshipList = function friendshipList() {
  var config = {
    method: 'get',
    url: _env.host + '/api/v1/Friendship/List',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.qiZshECwNAug-skS2gxfj_jiwZAMKH9OY7wA7DrqA9PPYD-GFC6Jqg.pWkEccjWJqz3HEYtYzh2fw.nZDsyqL1HXCi04Rl1RWxCaWJ44MHPLcU1KQ-0R09nh58u_nOhyrcqf-UsNwn4ehXFyUUtLjfYnRPEChXR44gLoaFLzfys8tBYfFpyPFKkIw--hpzrZaT1YFCxxInoq8G7qZVi_Surs0w0fL9jQFdrBdpnsS39jEPMiGUs1rtyTg_5Ju0fEHFeQbgN6XxRg0j8exMiGpdrU0GzQBSeJPT_k1CsGcLbNCWRWzrEmkXsXrADhrKB7d33AJxOxqriv7aol6PHGYLsIISoJPl-FK9UvGkHdLcLKaq_V99nDJ40uCw0fHyJqtb7mToPKzyrHDfYF5WsA7qOKKDWaC_GYraLmYDzmtz1_Qlz-uoH0p6A4JBoHBPP6a0ysYcbNYKeJV8Asbf7cNivn6Hq2TlVeK9qzG4P6TqhbXbaa2zc8hIE5nlnbQAUz9DNwSjHQTGcd6U2ZaAnBYrSr0dJuqsSPGMEAss1O6avjQuPOwhifGQ9kG-bfOr6OF85-wY1Uh9PHZ3.VxOsmdbT1d3PqAia5WG1vQ"
    }
  };
  console.log('resconfigponse', config);
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.friendshipList = friendshipList;

var friendshipAdd = function friendshipAdd() {
  var data = {
    name: "string",
    photo: "string",
    description: "string",
    everyoneCanCreateGroup: true,
    allMemmberCandAddMemmber: true,
    groupMembers: [{
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userId: "string"
    }]
  };
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Friendship/Add',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.friendshipAdd = friendshipAdd;

var friendshipDelete = function friendshipDelete(id) {
  var data = {
    id: ''
  };
  var config = {
    method: 'delete',
    url: _env.host + '/api/v1/Friendship/Delete',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.friendshipDelete = friendshipDelete;

var friendshipAccept = function friendshipAccept(id) {
  var data = {
    id: ''
  };
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Friendship/Accept',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.friendshipAccept = friendshipAccept;

var friendshipDeclined = function friendshipDeclined(id) {
  var data = {
    id: ''
  };
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Friendship/Declined',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.friendshipDeclined = friendshipDeclined;