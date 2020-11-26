import {StyleSheet, Platform} from 'react-native';
import Res from '../../res';

const styles = StyleSheet.create({
  container: {
    height:300,
    paddingHorizontal:20
  },
  viewImgPlay:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    top:0,
    bottom:0,
    left:0,
    right:0
  },
  imgPlay:{
      height:'30%',
      width:'30%',
      resizeMode:'contain'
  },
  viewBottomContainer:{
    justifyContent:'center',
    shadowColor: Res.colors.black,
    shadowRadius: 3,
    shadowOpacity:2,
    elevation: 2,
    shadowOffset: { height: 0.1, width: 0 },
    backgroundColor: Res.colors.white,
    borderRadius:20,
    top:-20,
    height: '30%',
    paddingHorizontal:10
  },
  txtTitle:{
      color: Res.colors.black,
      fontSize: 20,
      fontWeight:'700'
  },
  txtSubTitle:{
    color: Res.colors.primaryLightBlue,
    fontSize: 12,
    fontWeight:'500'
},
viewFlexRow:{
  flexDirection:'row',
  justifyContent:'space-between',
},
txtTime:{
  color: Res.colors.primaryLightGrey,
  fontSize:12,
  fontWeight:'500'
}
});

export default styles;
