import {StyleSheet} from 'react-native';
import {R} from '../../../../res';

const styles = StyleSheet.create({
  Container: {
    flex:1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightOrangeTitleText: {
    fontSize: 32,
    color: R.colors.lightOrangeColor,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  imgNewUser: {
    fontSize: 32,
    color: R.colors.blueColor,
    fontWeight: 'bold',
  },
  buttonGroup:{
    paddingRight:10,
    paddingTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  }
});

export default styles;
