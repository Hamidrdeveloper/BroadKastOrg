
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

let options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  export function OpenImagePicker(){

  return  launchImageLibrary(options, (response) => {
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
          const source = { uri: response.uri };

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
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
