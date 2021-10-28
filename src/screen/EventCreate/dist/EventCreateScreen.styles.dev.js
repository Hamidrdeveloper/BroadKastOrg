"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewSwitch = exports.TextBlue = exports.TextDefualtBoxLocation = exports.ViewBoxTime = exports.ViewBoxLocation = exports.LineView = exports.ViewBackIcon = exports.ViewRowEventAdd = exports.TitleEventFieldAdd = exports.ViewIconImage = exports.ImagePro = exports.TextCenterName = exports.InputEventField = exports.TitleEventField = exports.ViewTopRowHeader = exports.ViewBackHeader = exports.ViewHeaderMain = exports.ScrollViewCenter = exports.ViewMain = exports.FlatListAvatar = void 0;

var _reactNative = require("react-native");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../infrastructure/theme/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\nflex-direction: row;\nwidth: 100%;\njustify-content: space-between;\n\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\npadding: 15px;\nwidth: 100%;\nfont-size: 15px;\ncolor: ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\nfont-size: 15px;\ncolor: #ccc;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\nbackground-color: ", ";\n\nwidth: 100%;\nborder-top-width: 1px;\nborder-bottom-width: 1px;\nborder-color:#ccc;\npadding: 15px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\nbackground-color: ", ";\nheight: 75px;\nwidth: 100%;\nborder-top-width: 1px;\nborder-bottom-width: 1px;\nborder-color:#ccc;\npadding: 15px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nheight: 0.5px;\nbackground-color: #ccc;\n\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\nwidth: 25px;\nheight: 25px;\nborder-radius: 35px;\nalign-items: center;\nalign-self: center;\njustify-content: center;\nborder-width: 1px;\nborder-color:", ";\nborder-radius: 110px;\n\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\nflex-direction: row;\njustify-content: space-between;\nwidth: 100%;\npadding-right: 15px;\n\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nfont-size: 15px;\nfont-weight: bold;\npadding: 15px;\ntext-align: right;\n\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nbackground-color: ", ";\nwidth: 25px;\nheight: 25px;\nborder-radius: 25px;\nposition: absolute;\ntop: 125;\nalign-self: center;\nalign-items: center;\njustify-content: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 110px;\n  height: 110px;\n  border-radius: 110px;\n  margin-top: 30px;\n  background-color: ", ";\n\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 15px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\npadding-left: 15px;\nbackground-color: ", ";\nwidth: 100%;\nheight: 40px;\nborder-top-width: 1px;\nborder-bottom-width: 1px;\nborder-color:#ccc;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nfont-size: 15px;\nfont-weight: bold;\npadding: 15px;\nwidth: 100%;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\npadding: 15px;\nflex-direction: row;\nwidth: 100%;\njustify-content: space-between;\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nbackground-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n width: 100%;\n  height: 100%;\n  align-items: center;\n  flex:1;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  background-color: rgba(78, 205, 196, 0.05 );\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlatListAvatar = (0, _styledComponents["default"])(_reactNative.FlatList)(_templateObject());
exports.FlatListAvatar = FlatListAvatar;
var ViewMain = (0, _styledComponents["default"])(_reactNative.View)(_templateObject2());
exports.ViewMain = ViewMain;
var ScrollViewCenter = (0, _styledComponents["default"])(_reactNative.View)(_templateObject3());
exports.ScrollViewCenter = ScrollViewCenter;
var ViewHeaderMain = (0, _styledComponents["default"])(_reactNative.View)(_templateObject4());
exports.ViewHeaderMain = ViewHeaderMain;
var ViewBackHeader = (0, _styledComponents["default"])(_reactNative.View)(_templateObject5(), _colors.colors.ui.quaternary);
exports.ViewBackHeader = ViewBackHeader;
var ViewTopRowHeader = (0, _styledComponents["default"])(_reactNative.View)(_templateObject6());
exports.ViewTopRowHeader = ViewTopRowHeader;
var TitleEventField = (0, _styledComponents["default"])(_reactNative.Text)(_templateObject7());
exports.TitleEventField = TitleEventField;
var InputEventField = (0, _styledComponents["default"])(_reactNative.TextInput)(_templateObject8(), _colors.colors.text.inverse);
exports.InputEventField = InputEventField;
var TextCenterName = (0, _styledComponents["default"])(_reactNative.Text)(_templateObject9());
exports.TextCenterName = TextCenterName;
var ImagePro = (0, _styledComponents["default"])(_reactNative.Image)(_templateObject10(), _colors.colors.brand.blueLight);
exports.ImagePro = ImagePro;
var ViewIconImage = (0, _styledComponents["default"])(_reactNative.View)(_templateObject11(), _colors.colors.text.inverse);
exports.ViewIconImage = ViewIconImage;
var TitleEventFieldAdd = (0, _styledComponents["default"])(_reactNative.Text)(_templateObject12());
exports.TitleEventFieldAdd = TitleEventFieldAdd;
var ViewRowEventAdd = (0, _styledComponents["default"])(_reactNative.View)(_templateObject13());
exports.ViewRowEventAdd = ViewRowEventAdd;
var ViewBackIcon = (0, _styledComponents["default"])(_reactNative.View)(_templateObject14(), _colors.colors.text.blueLight);
exports.ViewBackIcon = ViewBackIcon;
var LineView = (0, _styledComponents["default"])(_reactNative.View)(_templateObject15());
exports.LineView = LineView;
var ViewBoxLocation = (0, _styledComponents["default"])(_reactNative.View)(_templateObject16(), _colors.colors.text.inverse);
exports.ViewBoxLocation = ViewBoxLocation;
var ViewBoxTime = (0, _styledComponents["default"])(_reactNative.View)(_templateObject17(), _colors.colors.text.inverse);
exports.ViewBoxTime = ViewBoxTime;
var TextDefualtBoxLocation = (0, _styledComponents["default"])(_reactNative.Text)(_templateObject18());
exports.TextDefualtBoxLocation = TextDefualtBoxLocation;
var TextBlue = (0, _styledComponents["default"])(_reactNative.Text)(_templateObject19(), _colors.colors.text.blueLight);
exports.TextBlue = TextBlue;
var ViewSwitch = (0, _styledComponents["default"])(_reactNative.View)(_templateObject20());
exports.ViewSwitch = ViewSwitch;