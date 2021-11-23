"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewTopRowHeader = exports.ViewBackHeader = exports.ViewHeaderMain = exports.ViewMain = void 0;

var _reactNative = require("react-native");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\npadding: 15px;\nflex-direction: row;\nwidth: 100%;\njustify-content: space-between;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nbackground-color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  background-color: rgba(78, 205, 196, 0.05 );\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ViewMain = (0, _styledComponents["default"])(_reactNative.View)(_templateObject());
exports.ViewMain = ViewMain;
var ViewHeaderMain = (0, _styledComponents["default"])(_reactNative.View)(_templateObject2());
exports.ViewHeaderMain = ViewHeaderMain;
var ViewBackHeader = (0, _styledComponents["default"])(_reactNative.View)(_templateObject3(), colors.ui.quaternary);
exports.ViewBackHeader = ViewBackHeader;
var ViewTopRowHeader = (0, _styledComponents["default"])(_reactNative.View)(_templateObject4());
exports.ViewTopRowHeader = ViewTopRowHeader;