import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
// import {Provider} from 'react-redux';
// import ReduxNavigation from './ReduxNavigation';
// import {configureStore} from './configuration';
// import {LogBox} from 'react-native';
import Router from './routers/Router';

// LogBox.ignoreAllLogs(true);

// const store = configureStore();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <Router
      ref={nav => {
        this.navigator = nav;
      }}
    />
  );
};

export default App;