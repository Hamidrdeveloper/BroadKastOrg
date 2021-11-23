"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenImagePicker = OpenImagePicker;

var _reactNativeImagePicker = require("react-native-image-picker");

var options = {
  title: 'Select Avatar',
  customButtons: [{
    name: 'fb',
    title: 'Choose Photo from Facebook'
  }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

function OpenImagePicker() {
  var _this = this;

  return (0, _reactNativeImagePicker.launchImageLibrary)(options, function (response) {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
      return 'User cancelled image picker';
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      return response.error;
    } else if (response.customButton) {
      return response.customButton;
    } else {
      var source = {
        uri: response.uri
      }; // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      _this.setState({
        filePath: response,
        fileData: response.data,
        fileUri: response.uri
      });

      return response;
    }

    return response;
  });
}
/**
* The first arg is the options object for customization (it can also be null or omitted for default options),
* The second arg is the callback which sends object: response (more info in the API Reference)
*/