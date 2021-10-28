"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventAccept = exports.eventDelete = exports.eventEdit = exports.eventAdd = exports.eventList = void 0;

var _camelize = _interopRequireDefault(require("camelize"));

var _react = _interopRequireDefault(require("react"));

var _env = require("../../utils/env");

var _axios = _interopRequireDefault(require("axios"));

var _express = require("express");

var _dataPost = require("./dataPost");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var token;

var readData = function readData() {
  var userAge, pars;
  return regeneratorRuntime.async(function readData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem('dataUser'));

        case 3:
          userAge = _context.sent;
          pars = JSON.parse(userAge);
          token = pars.data.token;
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          alert('Failed to fetch the data from storage');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var eventList = function eventList() {
  return readData().then(function () {
    var config = {
      method: 'get',
      url: _env.host + '/api/v1/Event/List',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer ".concat(token)
      }
    };
    console.log('eventList', config);
    return (0, _axios["default"])(config).then(function (response) {
      console.log('eventList', JSON.stringify(response.data));
      return response.data;
    })["catch"](function (error) {
      console.log('eventList', error);
      return '';
    });
  });
};

exports.eventList = eventList;

var eventAdd = function eventAdd() {
  var data = JSON.stringify(_dataPost.addEvent);
  console.log(data);
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Event/Add',
    headers: {
      'Authorization': "Bearer ".concat(token),
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

exports.eventAdd = eventAdd;

var eventEdit = function eventEdit() {
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
    url: _env.host + '/api/v1/Event/Edit',
    headers: {
      'Authorization': "Bearer ".concat(token),
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

exports.eventEdit = eventEdit;

var eventDelete = function eventDelete(id) {
  var data = {
    id: id
  };
  var config = {
    method: 'delete',
    url: _env.host + '/api/v1/Event/Delete',
    headers: {
      'Authorization': "Bearer ".concat(token),
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

exports.eventDelete = eventDelete;

var eventAccept = function eventAccept(id) {
  var config = {
    method: 'post',
    url: _env.host + "/api/v1/Event/Accept?id=".concat(id),
    headers: {
      'Authorization': "Bearer ".concat(token),
      'Content-Type': 'application/json'
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

exports.eventAccept = eventAccept;