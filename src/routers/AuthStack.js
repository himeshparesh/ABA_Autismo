import {createStackNavigator } from "react-navigation";
import CreateAccount from '../screens/WelcomeScreen/Signup';
import SelectUser from '../screens/WelcomeScreen/SelectUser';

const AuthStack = createStackNavigator({
    SelectUser: SelectUser,
    CreateAccount: CreateAccount,
},
{
    headerMode: 'none',
});

export default AuthStack;