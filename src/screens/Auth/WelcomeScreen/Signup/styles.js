import {StyleSheet,Dimensions} from 'react-native';
import { R } from '../../../../res';

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.colors.white,
        height:100,
        width:100,
        backgroundColor:'white',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around'
    },

    rightContainer: {
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },

    leftContainer: {
        flex:3,
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems:'center',
    },

    titleContainer: {
        height:70,
        width: width ,
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'center'
    },

    contendContainer: {
        marginHorizontal:10,
        marginVertical:5,
        width: width - 180,
        flexDirection: 'column',
        marginVertical:10,
        justifyContent:'space-between',
        // alignItems: 'center'
    },

    bottomContainer: {
        height:10,
        width:70,
        backgroundColor:'white',
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'center'
    },

    textinput: {
        height: 50,
        marginVertical:5,
        borderWidth: 1,
        backgroundColor: R.colors.white,
        borderColor:R.colors.dark_blue,
        borderRadius: 5,
        color: R.colors.dark_blue,
        fontSize:15,
        marginHorizontal:10,
    },

    textarea: {
        marginVertical:5,
        height: 50,
        borderWidth: 1,
        backgroundColor: R.colors.white,
        borderColor: R.colors.dark_blue,
        borderRadius: 5,
        color: R.colors.dark_blue,
        fontSize: 15,
        marginHorizontal:10,

    },

    datepicker: {
        height: 50,
        width: 50,
    },
    imgNewUser:{
        fontSize:32,
        color:R.colors.blueColor,        
        fontWeight: "bold",
    },
    imgNewUserRec:{
        fontSize:20,
        color:R.colors.blueColor,        
        fontWeight: "bold",
    },
    datePickerSelect:{
        fontSize:15,
        color:R.colors.textGreyColor,        
        fontWeight: "normal",
    }
});

export default styles   