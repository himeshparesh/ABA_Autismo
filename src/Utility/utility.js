import { Platform, Alert, Dimensions } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import {R} from  '../res';
// import NavigationService from './NavigationService';
// import FileViewer from 'react-native-file-viewer';
// import * as RNFS from 'react-native-fs';
import { WToast, WSnackBar } from 'react-native-smart-tip';

export const getDeviceWidth = () => {
  return Math.round(Dimensions.get('window').width);
};

export const getDeviceHeight = () => {
  return Math.round(Dimensions.get('window').height);
};

export const adminAccess = {
  attendance:1,
  leave:2,
  roster:3,
  payroll:4,
  claims:5,
  loan:6,
  employProfile:7,
}

export const getOS = () => {
  if (Platform.OS === 'ios') {
    return 'ios';
  }
  return 'android';
};

export const alertOkButton = {
  text: R.strings.ButtonTitle.ok,
  onPress: () => console.log('OK Pressed'),
};

export const alertCancelButton = {
  text: R.strings.ButtonTitle.cancel,
  onPress: () => console.log('Cancel Pressed'),
};

export const showAlert = (
  title = R.strings.AppName,
  message,
  buttons = [alertOkButton],
) => {
  Alert.alert(title, message, buttons, {
    cancelable: false,
  });
};

export const showMessage = (text,center) => {
  WToast.show({
    data: text,
    backgroundColor: R.colors.white,
    textColor: R.colors.black,
    duration: WToast.duration.SHORT,
  });
};

export const showMessageAtCenter = (text) => {
  WToast.show({
    data: text,
    backgroundColor: R.colors.white,
    textColor: R.colors.black,
    duration: WToast.duration.SHORT,
    position: WToast.position.TOP,
  });
};

export const showSnakeBar = text => {
  WSnackBar.show({
    data: text,
    backgroundColor: R.colors.white,
    textColor: R.colors.black,
    duration: WToast.duration.SHORT,
  });
};


export const getUser = () => {
  return global.User;
};
export const setUser = value => {
  global.User = value;
};



export const getLanguage = () => {
  return global.Language;
};
export const setLanguage = value => {
  global.Language = value;
};

// export const storeUserData = (data, onSuccess) => {
//   setUser(data);
//   setAccessToken(data.session.User.auth_token);
//   let language = R.globals.arrLanguages.filter(
//     obj => obj.serverKey === data.session.User.language,
//   );
//   setLanguage(language.length > 0 ? language[0] : R.globals.arrLanguages[0]);
//   AsyncStorage.setItem(
//     R.globals.keys.KEY_USER_DATA,
//     JSON.stringify(data),
//     error => {
//       if (!error) {
//         onSuccess();
//       } else {
//         console.log(error);
//       }
//     },
//   );
// };

// export const clearUserData = onSuccess => {
//   setUser(undefined);
//   setAccessToken(undefined);
//   setLanguage(undefined);

//   setTeamCheckInCount(undefined);
//   setTeamCheckOutCount(undefined);

//   setPersonalLeaveCount(undefined);
//   setTeamLeaveCount(undefined);
//   setUpcomingLeaveCount(undefined);

//   setDeclinedTaskCount(undefined);
//   setPendingTaskCount(undefined);
//   setRosteringData(undefined);

//   AsyncStorage.clear(error => {
//     if (!error) {
//       onSuccess();
//     } else {
//       console.log(error);
//     }
//   });
// };

// const openFile = (filePath, name, callback) => {
//   if (callback) {
//     callback();
//   }
//   setTimeout(() => {
//     FileViewer.open(filePath, {
//       showOpenWithDialog: true,
//       showAppsSuggestions: true,
//       displayName: name,
//     })
//       .then(() => console.log('success'))
//       .catch(err => console.log(err));
//   }, 200);
// };

// export const saveAndOpenFile = (filename, base64, callback) => {
//   var path = RNFS.DocumentDirectoryPath + '/' + filename;
//   RNFS.exists(path).then(exists => {
//     if (exists) {
//       openFile(path, filename, callback);
//     } else {
//       RNFS.writeFile(path, base64, 'base64')
//         .then(success => {
//           openFile(path, filename, callback);
//         })
//         .catch(err => {
//           console.log(err.message);
//         });
//     }
//   });
// };
