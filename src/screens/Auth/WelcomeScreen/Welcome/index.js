import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Orientation from 'react-native-orientation-locker';
import {C} from '../../../../components';
import {R} from '../../../../res';
import {imgStyle, showMessage, orientationLock} from '../../../../Utility/utility';
import commonStyle from '../../../../styles/commonStyle';
import { U } from '../../../../Utility';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    orientationLock();
  }

  onPressSelectUser = () => {
    this.props.navigation.navigate ('SelectUser');  
  };

  onPressNewUser = () => {
    this.props.navigation.navigate ('CreateAccount');  
    
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.subContainer}>
          <TouchableOpacity  onPress={this.onPressSelectUser}>
            <C.ImageButton
              image={R.images.Icons.select_user}
              text={'Select User'}
              iconStyle={commonStyle.imgStyle}
              textStyle={commonStyle.imgTxtStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={this.onPressNewUser}>
            <C.ImageButton
              image={R.images.Icons.new_user}
              text={'New User'}
              iconStyle={commonStyle.imgStyle}
              textStyle={commonStyle.imgTxtStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
