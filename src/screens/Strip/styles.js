import {StyleSheet, Platform} from 'react-native';
import Res from '../../res';

const styles = StyleSheet.create({
  styleInput: {
    height:35,
    width:60,
    color: Res.colors.primaryLightBlue,
    fontWeight:'bold',
    paddingHorizontal:5,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: Res.colors.primaryLightGrey,
    textAlign:'center',
    
  },
  viewTop:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:5,
    paddingRight:15,
    paddingBottom:15
  },
  viewBgColor:{
    height: 25,
    margin: 2,
    borderRadius:5,
  },
  viewBorder:{
    
    borderRadius:10,
    borderWidth:2,
    borderColor: Res.colors.primaryLightGreen
  },
  viewBgTrasparentColor:{
    
  },
  txtHeading:{
    color: Res.colors.Dark.placeholderDark,
    fontSize:18,
    fontWeight:'600'
  },
  txtSubHeading:{
    color: Res.colors.Dark.placeholderDark,
    fontSize:18,
    fontWeight:'600',
    opacity:0.6
  },
  viewLeftBarBox:{
    flex: 1,
    // opacity:0.2,
    height: '100%',
    borderLeftWidth: 1,
    borderRightWidth:1,
    borderLeftColor: Res.colors.primaryLightGrey,
    borderRightColor: Res.colors.primaryLightGrey,
    borderTopColor: Res.colors.primaryLightGrey,
    borderBottomColor: Res.colors.primaryLightGrey,
    width: 25,
    position: 'absolute',
    left: 15,
    justifyContent:'center'
  },
  viewSelectedColor:{
    top:65,
    position:'absolute',
    height:25,
    width:'100%'
  }
  
});

export default styles;
