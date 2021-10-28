"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileUpdate = exports.accountProfile = exports.accountChangePassword = exports.poneConfirm = exports.signUp = exports.readData = void 0;

var _camelize = _interopRequireDefault(require("camelize"));

var _react = _interopRequireDefault(require("react"));

var _env = require("../../utils/env");

var _axios = _interopRequireDefault(require("axios"));

var _express = require("express");

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
          console.log(token);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.readData = readData;

var signUp = function signUp(fullName, userName, phone, password) {
  var data = JSON.stringify({
    "phoneNumber": phone,
    "userName": userName,
    "fullName": fullName
  });
  var config = {
    method: 'post',
    url: _env.host + '/api/v1/Account/Signup',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
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

exports.signUp = signUp;

var poneConfirm = function poneConfirm(code, phone) {
  var data = JSON.stringify({
    "phoneNumber": phone,
    "code": code
  });
  console.log(data);
  var config = {
    method: 'post',
    url: _env.host + "/api/v1/Account/PhoneConfirm?phoneNumber=".concat(phone, "&code=").concat(code),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
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

exports.poneConfirm = poneConfirm;

var accountChangePassword = function accountChangePassword(currentPassword, newPassword) {
  var config = {
    method: 'get',
    url: _env.host + "/api/v1/Account/Profile",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    }
  };
  return (0, _axios["default"])(config).then(function (response) {
    console.log('response', JSON.stringify(response.data));
    return response.data;
  })["catch"](function (error) {
    console.log(error);
    return '';
  });
};

exports.accountChangePassword = accountChangePassword;

var accountProfile = function accountProfile() {
  return readData().then(function () {
    var config = {
      method: 'get',
      url: _env.host + "/api/v1/Account/Profile",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer ".concat(token)
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
  });
};

exports.accountProfile = accountProfile;

var profileUpdate = function profileUpdate(data) {
  return readData().then(function () {
    var config = {
      method: 'post',
      url: _env.host + "/api/v1/Account/ProfileUpdate",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer ".concat(token)
      },
      data: data
    };
    console.log(config);
    return (0, _axios["default"])(config).then(function (response) {
      console.log('response', JSON.stringify(response.data));
      return response.data;
    })["catch"](function (error) {
      console.log(error);
      return '';
    });
  });
};

exports.profileUpdate = profileUpdate;