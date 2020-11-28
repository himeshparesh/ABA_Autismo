import {createStackNavigator } from "react-navigation";
import SelectUser from "../screens/Auth/WelcomeScreen/SelectUser";
import CreateAccount from "../screens/Auth/WelcomeScreen/Signup";

const AuthStack = createStackNavigator({
    SelectUser: SelectUser,
    CreateAccount: CreateAccount,
},
{
    headerMode: 'none',
});

export default AuthStack;