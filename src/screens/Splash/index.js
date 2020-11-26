import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';

class Splash extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate('App');
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
