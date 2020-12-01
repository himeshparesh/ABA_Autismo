import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {C} from '../../../../components';
import {R} from '../../../../res';
import commonStyle from '../../../../styles/commonStyle';
import { U } from '../../../../Utility';
import { FlatList } from 'react-native-gesture-handler';
import { orientationLock } from '../../../../Utility/utility';

class SelectUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    orientationLock();
  }

  renderItems(item,index){
    return(<View>
      <Text>{item.id}</Text>
    </View>)
  }


  render() {
    return (
      <View style={styles.Container}>
        <FlatList
          data={[{id:1},{id:2}]}
          renderItem={({item, index}) => this.renderItems(item, index)}
        />  
      </View>
    );
  }
}

export default SelectUser;
