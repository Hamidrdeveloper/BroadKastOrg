"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationWrapper = exports.ErrorContainer = exports.Title = exports.AuthInput = exports.TextAuthButton = exports.ViewOTP = exports.TextOTP = exports.ViewOTPCenter = exports.AuthButton = exports.AccountContainer = exports.AccountCover = exports.ViewGroupCircle = exports.Circcle = exports.CirccleActive = exports.FlatListHorGroup = exports.SpaceButton = exports.ButtonNextArrow = exports.SpaceDircton = exports.TextIntro = exports.TextDirc = exports.WellcomeText = exports.ViewCenter = exports.SafeArea = exports.ImageCardEvent = void 0;

var React = _interopRequireWildcard(require("react"));

var _native = _interopRequireWildcard(require("styled-components/native"));

var _colors = require("../../infrastructure/theme/colors");

var _reactNativePaper = require("react-native-paper");

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 40%;\n  position: absolute;\n  top: 30px;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  max-width: 300px;\n  align-items: center;\n  align-self: center;\n\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  width: 400px;\n  color: ", ";\n\n  background-color: ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\nwidth: 127px;\nalign-self: center;\nborder-radius: 20;\ncolor: ", ";\n\n\n\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 24px;\nwidth: 334px;\nheight: 182px;\npadding: 15px;\nalign-self: center;\nbackground-color: #fff;\nalign-items: center;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\nfont-size: 20px;\ntext-align: center;\nwidth: 100%;\ncolor: ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\nheight: 100%;\nalign-items: center;\njustify-content: center;\n\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\nbackground-color:#CBF3F0 ;\nwidth: 127px;\nalign-self: center;\nborder-radius: 20;\nmargin-top: 50;\ncolor: ", ";\n\n\n\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n\n\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.3);\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\nwidth: 20%;\nheight: 25px;\nposition: absolute;\nbottom: 300px;\njustify-content: space-between;\nalign-items: center;\nflex-direction: row;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nheight: 10px;\nwidth: 10px;\nborder-radius: 25px;\nbackground-color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nheight: 10px;\nwidth: 10px;\nborder-radius: 25px;\nbackground-color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\n\nheight: 130px;\n\n  flex-grow: 0\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n height:100px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n height:65px;\n width: 65px;\n border-radius: 65px;\n align-items: center;\n justify-content: center;\n background-color: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n height:30px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 25px;\n  text-align: center;\n\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 28px;\n  text-align: center;\n  padding-top: 15px;\n\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 40px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  marginTop: 100px;\n  height: 100%;\n  width: 100%;\n\n  background: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 101%;\nheight: 230px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isDarkMode = true;
var ImageCardEvent = (0, _native["default"])(_reactNative.Image)(_templateObject());
exports.ImageCardEvent = ImageCardEvent;
var SafeArea = (0, _native["default"])(_reactNative.SafeAreaView)(_templateObject2(), isDarkMode ? _colors.colors.brand.primary : _colors.colors.brand.primary);
exports.SafeArea = SafeArea;
var ViewCenter = (0, _native["default"])(_reactNative.View)(_templateObject3(), isDarkMode ? _colors.colors.brand.primary : _colors.colors.brand.primary);
exports.ViewCenter = ViewCenter;
var WellcomeText = (0, _native["default"])(_reactNative.Text)(_templateObject4(), _colors.colors.brand.secondary);
exports.WellcomeText = WellcomeText;
var TextDirc = (0, _native["default"])(_reactNative.Text)(_templateObject5(), _colors.colors.ui.quaternary);
exports.TextDirc = TextDirc;
var TextIntro = (0, _native["default"])(_reactNative.Text)(_templateObject6(), _colors.colors.ui.quaternary);
exports.TextIntro = TextIntro;
var SpaceDircton = (0, _native["default"])(_reactNative.View)(_templateObject7());
exports.SpaceDircton = SpaceDircton;
var ButtonNextArrow = (0, _native["default"])(_reactNative.View)(_templateObject8(), _colors.colors.ui.quaternary);
exports.ButtonNextArrow = ButtonNextArrow;
var SpaceButton = (0, _native["default"])(_reactNative.View)(_templateObject9());
exports.SpaceButton = SpaceButton;
var FlatListHorGroup = (0, _native["default"])(_reactNative.FlatList)(_templateObject10());
exports.FlatListHorGroup = FlatListHorGroup;
var CirccleActive = (0, _native["default"])(_reactNative.View)(_templateObject11(), _colors.colors.brand.secondary);
exports.CirccleActive = CirccleActive;
var Circcle = (0, _native["default"])(_reactNative.View)(_templateObject12(), _colors.colors.bg.secondary);
exports.Circcle = Circcle;
var ViewGroupCircle = (0, _native["default"])(_reactNative.View)(_templateObject13());
exports.ViewGroupCircle = ViewGroupCircle;

var AccountCover = _native["default"].View(_templateObject14());

exports.AccountCover = AccountCover;

var AccountContainer = _native["default"].View(_templateObject15());

exports.AccountContainer = AccountContainer;
var AuthButton = (0, _native["default"])(_reactNativePaper.Button)(_templateObject16(), _colors.colors.brand.primary);
exports.AuthButton = AuthButton;
var ViewOTPCenter = (0, _native["default"])(_reactNative.View)(_templateObject17());
exports.ViewOTPCenter = ViewOTPCenter;
var TextOTP = (0, _native["default"])(_reactNative.Text)(_templateObject18(), _colors.colors.brand.secondary);
exports.TextOTP = TextOTP;
var ViewOTP = (0, _native["default"])(_reactNative.View)(_templateObject19());
exports.ViewOTP = ViewOTP;
var TextAuthButton = (0, _native["default"])(_reactNative.Text)(_templateObject20(), _colors.colors.brand.primary);
exports.TextAuthButton = TextAuthButton;
var AuthInput = (0, _native["default"])(_reactNativePaper.TextInput)(_templateObject21(), _colors.colors.text.inverse, _colors.colors.brand.primary);
exports.AuthInput = AuthInput;
var Title = (0, _native["default"])(_reactNative.Text)(_templateObject22());
exports.Title = Title;

var ErrorContainer = _native["default"].View(_templateObject23());

exports.ErrorContainer = ErrorContainer;

var AnimationWrapper = _native["default"].View(_templateObject24());

exports.AnimationWrapper = AnimationWrapper;