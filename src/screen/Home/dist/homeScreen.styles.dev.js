"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewFlctinPlus = exports.ViewFlctin = exports.IconBackCreateReminder = exports.IconBackCreateGroup = exports.IconBackCreateEvent = exports.TextCreate = exports.ViewRowCreate = exports.ViewCreate = exports.ViewOTP = exports.TextOTP = exports.ViewOTPCenter = exports.ViewBackModal = exports.FlatListAllTap = exports.FlatListHorGroup = exports.TextCenterName = exports.ViewBackIcon = exports.ImagePro = exports.ViewTopRow = exports.ViewHeaderMain = exports.ViewMain = void 0;

var React = _interopRequireWildcard(require("react"));

var _native = _interopRequireWildcard(require("styled-components/native"));

var _colors = require("../../infrastructure/theme/colors");

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\nwidth: 55px;\nheight: 55px;\nbackground-color:  #cfedf2;\nborder-width: 1px;\nborder-color:#90e6f4;\nborder-radius: 35px;\nalign-items: center;\njustify-content: center;\nmargin-right: 20;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\nwidth: 55px;\nheight: 55px;\nbackground-color:  rgba(252, 223, 184, 1);\nborder-width: 1px;\nborder-color:#ffd193;\nborder-radius: 35px;\nalign-items: center;\njustify-content: center;\nmargin-right: 20;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\nwidth: 55px;\nheight: 55px;\nbackground-color:  rgba(78, 205, 196, 0.1);\nborder-width: 1px;\nborder-color: #cfedf2;\nborder-radius: 35px;\nalign-items: center;\njustify-content: center;\nmargin-right: 20;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\nfont-size: 20;\nalign-self: center;\ncolor: black;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\nflex-direction: row;\nmargin-top: 15px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\npadding: 15px;\nalign-self: center;\nwidth: 250px;\nborder-radius: 24px;\nbackground-color: #fff;\n\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 24px;\nwidth: 334px;\nheight: 182px;\npadding: 15px;\nalign-self: center;\nbackground-color: #fff;\nalign-items: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nfont-size: 20px;\ntext-align: center;\nwidth: 100%;\ncolor: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nheight: 100%;\nalign-items: center;\njustify-content: center;\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n width: 100%;\n  height: 100%;\nbackground-color: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  height: 100%;\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  width: 100%;\n\n  height: 130px;\n\n  flex-grow: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(78, 205, 196, 0.3);\n  border-radius: 5px;\n  border-width: 1px;\n  width: 50px;\n  align-items: flex-end;\n  justify-content: center;\n  height: 25px;\n  border-color: rgba(78, 205, 196, 1);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  border-radius: 45px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  padding: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 180px;\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ViewMain = (0, _native["default"])(_reactNative.View)(_templateObject());
exports.ViewMain = ViewMain;
var ViewHeaderMain = (0, _native["default"])(_reactNative.View)(_templateObject2(), _colors.colors.ui.quaternary);
exports.ViewHeaderMain = ViewHeaderMain;
var ViewTopRow = (0, _native["default"])(_reactNative.View)(_templateObject3());
exports.ViewTopRow = ViewTopRow;
var ImagePro = (0, _native["default"])(_reactNative.Image)(_templateObject4());
exports.ImagePro = ImagePro;
var ViewBackIcon = (0, _native["default"])(_reactNative.View)(_templateObject5());
exports.ViewBackIcon = ViewBackIcon;
var TextCenterName = (0, _native["default"])(_reactNative.Text)(_templateObject6());
exports.TextCenterName = TextCenterName;
var FlatListHorGroup = (0, _native["default"])(_reactNative.FlatList)(_templateObject7());
exports.FlatListHorGroup = FlatListHorGroup;
var FlatListAllTap = (0, _native["default"])(_reactNative.FlatList)(_templateObject8());
exports.FlatListAllTap = FlatListAllTap;
var ViewBackModal = (0, _native["default"])(_reactNative.View)(_templateObject9(), _colors.colors.brand.primary);
exports.ViewBackModal = ViewBackModal;
var ViewOTPCenter = (0, _native["default"])(_reactNative.View)(_templateObject10());
exports.ViewOTPCenter = ViewOTPCenter;
var TextOTP = (0, _native["default"])(_reactNative.Text)(_templateObject11(), _colors.colors.brand.secondary);
exports.TextOTP = TextOTP;
var ViewOTP = (0, _native["default"])(_reactNative.View)(_templateObject12());
exports.ViewOTP = ViewOTP;
var ViewCreate = (0, _native["default"])(_reactNative.View)(_templateObject13());
exports.ViewCreate = ViewCreate;
var ViewRowCreate = (0, _native["default"])(_reactNative.View)(_templateObject14());
exports.ViewRowCreate = ViewRowCreate;
var TextCreate = (0, _native["default"])(_reactNative.Text)(_templateObject15());
exports.TextCreate = TextCreate;
var IconBackCreateEvent = (0, _native["default"])(_reactNative.View)(_templateObject16());
exports.IconBackCreateEvent = IconBackCreateEvent;
var IconBackCreateGroup = (0, _native["default"])(_reactNative.View)(_templateObject17());
exports.IconBackCreateGroup = IconBackCreateGroup;
var IconBackCreateReminder = (0, _native["default"])(_reactNative.View)(_templateObject18());
exports.IconBackCreateReminder = IconBackCreateReminder;
var ViewFlctin = (0, _native["default"])(_reactNative.View).attrs({
  color: _colors.colors.brand.primary,
  backgroundColor: "".concat(_colors.colors.ui.quaternary),
  position: 'absolute',
  bottom: 10,
  right: 10,
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
})(_templateObject19());
exports.ViewFlctin = ViewFlctin;
var ViewFlctinPlus = (0, _native["default"])(_reactNative.View).attrs({
  color: _colors.colors.brand.primary,
  backgroundColor: "".concat(_colors.colors.ui.quaternary),
  position: 'absolute',
  bottom: 65,
  right: 10,
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
})(_templateObject20());
exports.ViewFlctinPlus = ViewFlctinPlus;