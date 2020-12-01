import {StyleSheet, Platform} from 'react-native';
import { R } from '../res';
const commonStyle = StyleSheet.create({
  container: {
    flex:1
  },
  styleSeparator:{
    height: 0.5,
    backgroundColor: R.colors.black,
    width: '100%',

  },
  imgTxtStyle:{
    color: R.colors.lightOrangeColor,
    fontSize:18,
  },
  imgSearchIcon:{
    height:40,
    width:40,
    resizeMode:'contain',
    position:'absolute',
    right:10
  },
  imgIcon:{
    height:60,
    width:60,
    resizeMode:'contain'
  },
  imgStyle:{
    height:100,
    width:100,
    resizeMode:'contain'
  }
});

export default commonStyle;
