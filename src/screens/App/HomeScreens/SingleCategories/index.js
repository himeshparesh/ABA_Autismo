import React from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import commonStyle from '../../../../styles/commonStyle';
import {
  emoticonsIcon,
  foodIcon,
  colorsIcon,
  puzzleIcon,
  formsIcon,
  transportIcon,
  numbersIcon,
  animalsIcon,
} from '../../../../res/images/Icons';
import {U} from '../../../../Utility';
import styles from './styles';
import ImageButton from '../../../../components/ImageButton';
import {R} from '../../../../res';
import {ANSWER, CONNECT} from '../../../../res/global';
import SimpleImagePicker from '../../../../components/ImagePicker';

class SingleCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeSelected: ANSWER,
      activities: [
        {name: 'EMOTICONS', icon: emoticonsIcon},
        {name: 'FOODS', icon: foodIcon},
        {name: 'COLORS', icon: colorsIcon},
        {name: 'PUZZLE', icon: puzzleIcon},
        {name: 'FORMS', icon: formsIcon},
        {name: 'TRANSPORT', icon: transportIcon},
        {name: 'NUMBERS', icon: numbersIcon},
        {name: 'ANIMALS', icon: animalsIcon},
      ],
    };
  }

  onPressAvtivity = item => {
    console.log('hello ' + item.name + ' : ' + this.state.typeSelected);
  };

  renderItems(item, index) {
    return (
      <View style={[styles.Container, {marginVertical: 10}]}>
        <TouchableOpacity onPress={() => this.onPressAvtivity(item)}>
          <ImageButton
            image={item.icon}
            text={item.name}
            iconStyle={commonStyle.imgIcon}
            textStyle={[styles.imgNewUser, {fontSize: 15, paddingTop: 5}]}
          />
        </TouchableOpacity>
      </View>
    );
  }

  onButtonPressed = text => {
    if (text == ANSWER) {
      this.setState({
        typeSelected: ANSWER,
      });
    } else {
      this.setState({
        typeSelected: CONNECT,
      });
    }
  };

  render() {
    const {typeSelected} = this.state;

    return (
      <View style={[commonStyle.container, {flexDirection: 'column'}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={styles.lightOrangeTitleText}>
            {'SELECT SINGLE ACTIVITY'}
          </Text>

          <ImageButton
            image={R.images.Icons.full_version}
            text={'Full Version'}
            iconStyle={commonStyle.imgIcon}
            textStyle={[styles.imgNewUser, {fontSize: 15}]}
          />
        </View>
        <View style={{flexDirection: 'row', flex: 0, marginTop: 10}}>
          <FlatList
            columnWrapperStyle={{flexWrap: 'wrap', flex: 1}}
            numColumns={4}
            data={this.state.activities}
            renderItem={({item, index}) => this.renderItems(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <View style={styles.buttonGroup}>
              <TouchableOpacity onPress={() => this.onButtonPressed(ANSWER)}>
                <Text
                  style={{
                    backgroundColor:
                      typeSelected == ANSWER
                        ? R.colors.verySoftBlueColor
                        : R.colors.white,
                    height: 30,
                    width: 60,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 0,
                    fontSize: 12,
                    color: 'black',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
                  }}>
                  {ANSWER}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onButtonPressed(CONNECT)}>
                <Text
                  style={{
                    backgroundColor:
                      typeSelected == CONNECT
                        ? R.colors.verySoftBlueColor
                        : R.colors.white,
                    height: 30,
                    width: 60,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 0,
                    fontSize: 12,
                    color: 'black',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
                  }}>
                  {CONNECT}
                </Text>
              </TouchableOpacity>
            </View>
            <SimpleImagePicker />
          </View>
        </View>
      </View>
    );
  }
}

export default SingleCategories;
