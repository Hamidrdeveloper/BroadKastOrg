"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupListTransform = exports.groupAccept = exports.groupDelete = exports.groupEdit = exports.groupAdd = exports.groupList = void 0;

var _camelize = _interopRequireDefault(require("camelize"));

var _react = _interopRequireDefault(require("react"));

var _env = require("../../utils/env");

var _axios = _interopRequireDefault(require("axios"));

var _express = require("express");

var _dataPost = require("./dataPost");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var groupList = function groupList() {
  var config = {
    method: 'get',
    url: _env.host + '/api/v1/Group/List',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.yIUtATncif9N9kRyfpoytPzJ-zWdUr1jYeL7WeBziGNiHyPP6kO3ng.PJKlCljTusrl-u3jQ4D6ag.TAHNYV2C1rdBIYojLa7-OD6SiJJVAwEIY_bGL-wsu2H0EjZ8n7s3Yrc6-k_lH9EQahf67oLo3pZvMXM1RuPNKtNw0Wd7p2ULVYi3RILW_XFwNCcHLK8RWBPhxyYjUJtc6vcBO7b2xq9UR8BHsd5MOZjJ8J3v8savxBAVoFAoCBGHf16DBSl38-z767D929FBhSy60wapMu7kOBl2FRS1Vd5ZSqDJl0YD9y179lUz1y8tnFAe1L6xjBQeeZmqHfa8bNjN0qus8RC3Nmff9vhMBkiKfdjl4v0UdS87O5ZpfIOUgyH3IuTytP7kmD18imRENqpokpon2fpl4EfAOzXi6rLMLS7XXya-TJgaDvY9HQlyRTMLd2zJydSpLdBEYr-8pcCjWECLxa2WqU-pou95tFG1W2H07W1WkBaL4lTw-klcKKcirFIpEIxQn0Gpe1qXbFYLQAR8SsmAeolMzjVx0oBJaEJipiiWmTKPCh4W6vxZnVm-NPx2II2N6bbjd8yD.k912e0HOypi_QVDAww_dAw'
    }
  };
  console.log(config);
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.groupList = groupList;

var groupAdd = function groupAdd() {
  console.log('groupAdd', _dataPost.addGroup);
  var data = JSON.stringify(_dataPost.addGroup);
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Group/Add',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.yIUtATncif9N9kRyfpoytPzJ-zWdUr1jYeL7WeBziGNiHyPP6kO3ng.PJKlCljTusrl-u3jQ4D6ag.TAHNYV2C1rdBIYojLa7-OD6SiJJVAwEIY_bGL-wsu2H0EjZ8n7s3Yrc6-k_lH9EQahf67oLo3pZvMXM1RuPNKtNw0Wd7p2ULVYi3RILW_XFwNCcHLK8RWBPhxyYjUJtc6vcBO7b2xq9UR8BHsd5MOZjJ8J3v8savxBAVoFAoCBGHf16DBSl38-z767D929FBhSy60wapMu7kOBl2FRS1Vd5ZSqDJl0YD9y179lUz1y8tnFAe1L6xjBQeeZmqHfa8bNjN0qus8RC3Nmff9vhMBkiKfdjl4v0UdS87O5ZpfIOUgyH3IuTytP7kmD18imRENqpokpon2fpl4EfAOzXi6rLMLS7XXya-TJgaDvY9HQlyRTMLd2zJydSpLdBEYr-8pcCjWECLxa2WqU-pou95tFG1W2H07W1WkBaL4lTw-klcKKcirFIpEIxQn0Gpe1qXbFYLQAR8SsmAeolMzjVx0oBJaEJipiiWmTKPCh4W6vxZnVm-NPx2II2N6bbjd8yD.k912e0HOypi_QVDAww_dAw'
    },
    data: data
  };
  console.log('groupAdd', config);
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.groupAdd = groupAdd;

var groupEdit = function groupEdit() {
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

exports.groupEdit = groupEdit;

var groupDelete = function groupDelete(id) {
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

exports.groupDelete = groupDelete;

var groupAccept = function groupAccept(id) {
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

exports.groupAccept = groupAccept;

var groupListTransform = function groupListTransform(_ref) {
  var _ref$results = _ref.results,
      results = _ref$results === void 0 ? [] : _ref$results;
  console.log(results);
  var mappedResults = results.map(function (group) {
    return _objectSpread({}, group);
  });
  return (0, _camelize["default"])(mappedResults);
};

exports.groupListTransform = groupListTransform;