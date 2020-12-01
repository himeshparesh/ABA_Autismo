import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import { orientationLock } from '../../../Utility/utility';

class Splash extends React.Component {
  componentDidMount() {
    orientationLock();
    this.props.navigation.navigate('Auth');
  } 

  render() {
    return (
      <View style={styles.styleContainer}>

        <View style={styles.subContainer}>
          <Text
            style={styles.txtName}>
            {"ABA Autismo".toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

export default Splash;
