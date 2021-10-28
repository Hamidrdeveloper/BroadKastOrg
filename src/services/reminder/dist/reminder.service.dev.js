"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reminderAccept = exports.reminderDelete = exports.reminderEdit = exports.reminderAdd = exports.reminderList = void 0;

var _camelize = _interopRequireDefault(require("camelize"));

var _react = _interopRequireDefault(require("react"));

var _env = require("../../utils/env");

var _axios = _interopRequireDefault(require("axios"));

var _express = require("express");

var _dataPost = require("./dataPost");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reminderList = function reminderList() {
  var config = {
    method: 'get',
    url: 'https://bugle.eeda.ir/api/v1/Reminder/List',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.yIUtATncif9N9kRyfpoytPzJ-zWdUr1jYeL7WeBziGNiHyPP6kO3ng.PJKlCljTusrl-u3jQ4D6ag.TAHNYV2C1rdBIYojLa7-OD6SiJJVAwEIY_bGL-wsu2H0EjZ8n7s3Yrc6-k_lH9EQahf67oLo3pZvMXM1RuPNKtNw0Wd7p2ULVYi3RILW_XFwNCcHLK8RWBPhxyYjUJtc6vcBO7b2xq9UR8BHsd5MOZjJ8J3v8savxBAVoFAoCBGHf16DBSl38-z767D929FBhSy60wapMu7kOBl2FRS1Vd5ZSqDJl0YD9y179lUz1y8tnFAe1L6xjBQeeZmqHfa8bNjN0qus8RC3Nmff9vhMBkiKfdjl4v0UdS87O5ZpfIOUgyH3IuTytP7kmD18imRENqpokpon2fpl4EfAOzXi6rLMLS7XXya-TJgaDvY9HQlyRTMLd2zJydSpLdBEYr-8pcCjWECLxa2WqU-pou95tFG1W2H07W1WkBaL4lTw-klcKKcirFIpEIxQn0Gpe1qXbFYLQAR8SsmAeolMzjVx0oBJaEJipiiWmTKPCh4W6vxZnVm-NPx2II2N6bbjd8yD.k912e0HOypi_QVDAww_dAw'
    }
  };
  return (0, _axios["default"])(config).then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
  });
};

exports.reminderList = reminderList;

var reminderAdd = function reminderAdd() {
  var data = JSON.stringify(_dataPost.addReminders);
  console.log(data);
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Reminder/Add',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.yIUtATncif9N9kRyfpoytPzJ-zWdUr1jYeL7WeBziGNiHyPP6kO3ng.PJKlCljTusrl-u3jQ4D6ag.TAHNYV2C1rdBIYojLa7-OD6SiJJVAwEIY_bGL-wsu2H0EjZ8n7s3Yrc6-k_lH9EQahf67oLo3pZvMXM1RuPNKtNw0Wd7p2ULVYi3RILW_XFwNCcHLK8RWBPhxyYjUJtc6vcBO7b2xq9UR8BHsd5MOZjJ8J3v8savxBAVoFAoCBGHf16DBSl38-z767D929FBhSy60wapMu7kOBl2FRS1Vd5ZSqDJl0YD9y179lUz1y8tnFAe1L6xjBQeeZmqHfa8bNjN0qus8RC3Nmff9vhMBkiKfdjl4v0UdS87O5ZpfIOUgyH3IuTytP7kmD18imRENqpokpon2fpl4EfAOzXi6rLMLS7XXya-TJgaDvY9HQlyRTMLd2zJydSpLdBEYr-8pcCjWECLxa2WqU-pou95tFG1W2H07W1WkBaL4lTw-klcKKcirFIpEIxQn0Gpe1qXbFYLQAR8SsmAeolMzjVx0oBJaEJipiiWmTKPCh4W6vxZnVm-NPx2II2N6bbjd8yD.k912e0HOypi_QVDAww_dAw',
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

exports.reminderAdd = reminderAdd;

var reminderEdit = function reminderEdit() {
  var data = {
    name: "string",
    photo: "string",
    description: "string",
    everyoneCanCreateEvent: true,
    allMemmberCandAddMemmber: true,
    groupMembers: [{
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userId: "string"
    }]
  };
  var config = {
    method: 'put',
    url: _env.host + '/api/v1/Group/Edit',
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

exports.reminderEdit = reminderEdit;

var reminderDelete = function reminderDelete(id) {
  var data = {
    id: ''
  };
  var config = {
    method: 'delete',
    url: _env.host + '/api/v1/Group/Delete',
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

exports.reminderDelete = reminderDelete;

var reminderAccept = function reminderAccept(id) {
  var data = {
    id: ''
  };
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Group/Accept',
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

exports.reminderAccept = reminderAccept;