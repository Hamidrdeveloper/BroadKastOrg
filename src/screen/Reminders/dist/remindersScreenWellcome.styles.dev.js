"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewGroupCircle = exports.Circcle = exports.CirccleActive = exports.FlatListHorGroup = exports.SpaceButton = exports.ButtonNextArrow = exports.SpaceDircton = exports.TextIntro = exports.TextDirc = exports.WellcomeText = exports.ViewCenter = exports.SafeArea = exports.ImageCardEvent = void 0;

var React = _interopRequireWildcard(require("react"));

var _native = _interopRequireWildcard(require("styled-components/native"));

var _colors = require("../../infrastructure/theme/colors");

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var data = _taggedTemplateLiteral(["\n  font-size: 25px;\n  text-align: center;\n  padding-top: 15px;\n\n  color: ", ";\n"]);

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
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  marginTop: 100px;\n  height: 100%;\n  width: 100%;\n  background: ", ";\n"]);

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
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nheight: 235px;\n"]);

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