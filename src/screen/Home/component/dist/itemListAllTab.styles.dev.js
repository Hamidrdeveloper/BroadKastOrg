"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardItem = exports.CardLine = exports.TextCardBlueLight = exports.TextCardSmallBold = exports.TextCardSmall = exports.ViewLoction = exports.ViewIconRelod = exports.CardRemind = exports.TextCard = exports.ViewRow = void 0;

var React = _interopRequireWildcard(require("react"));

var _native = _interopRequireWildcard(require("styled-components/native"));

var _colors = require("../../../infrastructure/theme/colors");

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nbackground-color:#f5fafc;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nmargin-top: 10px;\nheight: 1px;\nwidth: 100%;\nbackground-color:#d9eded ;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ncolor:", ";\nmargin-top: 8px;\nfont-size: 20px;\npadding-right: 50px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\ncolor:", ";\nfont-size: 17px;\nfont-weight: bold;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ncolor:", ";\nfont-size: 15px;\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nalign-items: center;\nflex-direction: row;\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["position:absolute;\nright: 30px;\nmargin-top: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nheight: 35px;\nbackground-color:#cdedf1;\nborder-radius: 35px;\n\nborder-width: 1.5px;\nflex-direction: row;\nalign-items: center;\njustify-content: space-between;\nborder-color: #89d4d8 ;\npadding-left: 30px;\npadding-right: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\ncolor:", ";\nfont-size: 20px;\npadding-right: 50px;\nmargin-top: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nflex-direction: row;\nwidth: 100%;\npadding-left: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ViewRow = (0, _native["default"])(_reactNative.View)(_templateObject());
exports.ViewRow = ViewRow;
var TextCard = (0, _native["default"])(_reactNative.Text)(_templateObject2(), _colors.colors.text.cardGroup);
exports.TextCard = TextCard;
var CardRemind = (0, _native["default"])(_reactNative.View)(_templateObject3());
exports.CardRemind = CardRemind;
var ViewIconRelod = (0, _native["default"])(_reactNative.View)(_templateObject4());
exports.ViewIconRelod = ViewIconRelod;
var ViewLoction = (0, _native["default"])(_reactNative.View)(_templateObject5());
exports.ViewLoction = ViewLoction;
var TextCardSmall = (0, _native["default"])(_reactNative.Text)(_templateObject6(), _colors.colors.text.cardGroup);
exports.TextCardSmall = TextCardSmall;
var TextCardSmallBold = (0, _native["default"])(_reactNative.Text)(_templateObject7(), _colors.colors.text.cardGroup);
exports.TextCardSmallBold = TextCardSmallBold;
var TextCardBlueLight = (0, _native["default"])(_reactNative.Text)(_templateObject8(), _colors.colors.text.blueLight);
exports.TextCardBlueLight = TextCardBlueLight;
var CardLine = (0, _native["default"])(_reactNative.View)(_templateObject9());
exports.CardLine = CardLine;
var CardItem = (0, _native["default"])(_reactNative.View)(_templateObject10());
exports.CardItem = CardItem;