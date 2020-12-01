import React from 'react';
import {View, Text, TouchableOpacity, Image,Dimensions} from 'react-native';
import commonStyle from '../../../../styles/commonStyle';
import styles from './styles';
import {R} from '../../../../res';
import {C} from '../../../../components';
const {width,height} = Dimensions.get('window');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  onPressSelectSingleAvtivity = () => {
    this.props.navigation.navigate('SingleCategories')
  }

  render() {
    return (
      <View style={[commonStyle.container, {flexDirection: 'row'}]}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={this.onPressSelectSingleAvtivity}>
            <View style={styles.viewSelectSingleAvtivity}>
              <Text style={styles.txtSelectSingleAvtivity}>
                {'SELECT SINGLE ACTIVITY'}
              </Text>
              <Image
                source={R.images.Icons.orange_search}
                style={[commonStyle.imgSearchIcon]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPressSelectUser}>
            <View style={styles.viewSelectSingleAvtivity}>
              <Text style={styles.txtSelectSingleAvtivity}>
                {'SET SEQUENCE'}
              </Text>
              <Image
                source={R.images.Icons.green_plus}
                style={commonStyle.imgSearchIcon}
              />
            </View>
          </TouchableOpacity>

          <View style={{width:width,flexDirection: 'row',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={this.onPressSelectUser}>
              <C.ImageButton
                image={R.images.Icons.sound_size}
                text={''}
                iconStyle={commonStyle.imgStyle}
                textStyle={commonStyle.imgTxtStyle}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressSelectUser}>
              <C.ImageButton
                image={R.images.Icons.sound}
                text={''}
                iconStyle={commonStyle.imgStyle}
                textStyle={commonStyle.imgTxtStyle}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressFullVersion}>
              <C.ImageButton
                image={R.images.Icons.full_version}
                text={'Full Version'}
                iconStyle={commonStyle.imgStyle}
                textStyle={commonStyle.imgTxtStyle}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressIconicAgenda}>
              <C.ImageButton
                image={R.images.Icons.agenda_ionic}
                text={'Iconic Agenda'}
                iconStyle={commonStyle.imgStyle}
                textStyle={commonStyle.imgTxtStyle}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressVisualTimer}>
              <C.ImageButton
                image={R.images.Icons.visual_timer}
                text={'Visual Timer'}
                iconStyle={commonStyle.imgStyle}
                textStyle={commonStyle.imgTxtStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.rightContainer}>
         
        </View> */}
      </View>
    );
  }
}

export default Home;
