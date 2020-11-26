import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import Res from '../res';

const Loader = props => {
  const {
    loading,
  } = props;

  return (
    <Modal
      transparent = {true}
      animationType = {'fade'}
      visible = {loading} 
      onRequestClose = {() => {console.log('close modal')}}>
      <View style = {styles.modalBackground}>
        <View style = {styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating = {loading} size = "large" color = {Res.colors.white} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({ 
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor:'rgba(0,0,0, 0.4)',
  },
  activityIndicatorWrapper: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
    height: 50,
    width: 50,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;