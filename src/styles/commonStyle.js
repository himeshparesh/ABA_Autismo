import {StyleSheet, Platform} from 'react-native';
import Res from '../res';
const commonStyle = StyleSheet.create({
  container: {
    flex:1
  },
  styleSeparator:{
    height: 0.5,
    backgroundColor: Res.colors.black,
    width: '100%',
  },
  imgProfile:{
    borderRadius:50,
    height:40,
    width:40,
    resizeMode:'cover',
    
  },
  viewHeader:{
    height:120,
    width:'100%',
    backgroundColor:Res.colors.Dark.bgHeader,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  viewLeft:{
    justifyContent:'flex-end',
  },
  subContainer:{
    paddingHorizontal:20,
  },
  txtTitle:{
    color: Res.colors.Dark.placeholderDark,
    fontWeight:'900',
    fontSize: 14,
  },
  txtSubTitle:{
    color: Res.colors.black,
    fontWeight:'900',
    fontSize: 27,
    paddingVertical:7
  },
  txtColorSubTitle:{
    color: Res.colors.primaryDarkBlue,
    fontWeight:'900',
    fontSize: 27,
    paddingVertical:7
  },
  txtNext:{
    color: Res.colors.white,
    fontWeight:'900',
    fontSize: 15,
    padding:3,
    paddingHorizontal:12
  },
  viewRight:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingHorizontal:20,
    paddingVertical:10
  }
});

export default commonStyle;
