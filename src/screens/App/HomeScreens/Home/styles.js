import {StyleSheet,Dimensions} from 'react-native';
import {R} from '../../../../res';

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: R.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleContainer: {
    backgroundColor: R.colors.greenColor,
  },
  txtName: {
    color: R.colors.black,
  },
  leftContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSelectSingleAvtivity: {
    height:60,
    width: width - 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: R.colors.lightOrangeColor,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  txtSelectSingleAvtivity:{
    fontSize:25,
    alignItems: 'center',
    color: R.colors.lightOrangeColor,
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default styles;
