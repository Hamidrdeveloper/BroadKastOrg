"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatListHorGroup = exports.TextNumberNotify = exports.TextCenterInfo = exports.TextInputCenterProfile = exports.TextCenterProfile = exports.TextCenterName = exports.ViewBackIcon = exports.ImagePro = exports.ViewTopRow = exports.ViewTopRowHeader = exports.ViewBackHeader = exports.ViewHeaderMain = exports.ViewMain = void 0;

var React = _interopRequireWildcard(require("react"));

var _native = _interopRequireWildcard(require("styled-components/native"));

var _colors = require("../../infrastructure/theme/colors");

var _reactNative = require("react-native");

var _helpers = require("react-native-elements/dist/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  flex-grow: 0;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 15px;\n  padding-right: 8px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 15px;\n  width: 100%;\n  padding-bottom: 15px;\n  padding-left: 15px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 18px;\n  height: 50px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 18px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 15px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(78, 205, 196, 0.3);\n  border-radius: 5px;\n  border-width: 1px;\n  width: 50px;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: flex-end;\n  justify-content: center;\n  height: 25px;\n  border-color: rgba(78, 205, 196, 1);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 110px;\n  height: 110px;\n  border-radius: 110px;\n  margin-top: 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  width: 100%;\n  background-color: ", ";\n  justify-content: space-between;\n  padding: 15px;\n  border-bottom-width: 0.6px;\n  border-color: rgba(78, 205, 196, 0.3);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  background-color: rgba(78, 205, 196, 0.05);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ViewMain = (0, _native["default"])(_reactNative.View)(_templateObject());
exports.ViewMain = ViewMain;
var ViewHeaderMain = (0, _native["default"])(_reactNative.View)(_templateObject2());
exports.ViewHeaderMain = ViewHeaderMain;
var ViewBackHeader = (0, _native["default"])(_reactNative.View)(_templateObject3(), _colors.colors.ui.quaternary);
exports.ViewBackHeader = ViewBackHeader;
var ViewTopRowHeader = (0, _native["default"])(_reactNative.View)(_templateObject4());
exports.ViewTopRowHeader = ViewTopRowHeader;
var ViewTopRow = (0, _native["default"])(_reactNative.View)(_templateObject5(), _colors.colors.text.inverse);
exports.ViewTopRow = ViewTopRow;
var ImagePro = (0, _native["default"])(_reactNative.Image)(_templateObject6());
exports.ImagePro = ImagePro;
var ViewBackIcon = (0, _native["default"])(_reactNative.View)(_templateObject7());
exports.ViewBackIcon = ViewBackIcon;
var TextCenterName = (0, _native["default"])(_reactNative.Text)(_templateObject8());
exports.TextCenterName = TextCenterName;
var TextCenterProfile = (0, _native["default"])(_reactNative.Text)(_templateObject9());
exports.TextCenterProfile = TextCenterProfile;
var TextInputCenterProfile = (0, _native["default"])(_reactNative.TextInput)(_templateObject10());
exports.TextInputCenterProfile = TextInputCenterProfile;
var TextCenterInfo = (0, _native["default"])(_reactNative.Text)(_templateObject11());
exports.TextCenterInfo = TextCenterInfo;
var TextNumberNotify = (0, _native["default"])(_reactNative.Text)(_templateObject12());
exports.TextNumberNotify = TextNumberNotify;
var FlatListHorGroup = (0, _native["default"])(_reactNative.FlatList)(_templateObject13());
exports.FlatListHorGroup = FlatListHorGroup;