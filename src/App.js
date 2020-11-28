import React from 'react';
import {StatusBar, View} from 'react-native';
import Router from './routers/Router';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import ReduxThunk from 'redux-thunk';
import {LogBox} from 'react-native'
// import rootReducer from './reducers';

LogBox.ignoreAllLogs(true)

export let navigatorRef;



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1000);
  // }

  render() {
    // const store = createStore(
    //   rootReducer,
    //   {},
    //   applyMiddleware(ReduxThunk),
    // );
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent barStyle="light-content" />
        {/* <Provider store={store} > */}
          <Router
            ref={nav => {
              this.navigator = nav;
            }}
          />
        {/* </Provider> */}
      </View>
    );
  }
}
