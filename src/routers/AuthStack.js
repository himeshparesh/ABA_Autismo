import { createStackNavigator } from "react-navigation-stack";
import SelectUser from "../screens/Auth/WelcomeScreen/SelectUser";
import CreateAccount from "../screens/Auth/WelcomeScreen/Signup";
import Welcome from "../screens/Auth/WelcomeScreen/Welcome";


const AuthStack = createStackNavigator({
    Welcome: Welcome,
    SelectUser: SelectUser,
    CreateAccount: CreateAccount,
},
{
    headerMode: 'none',
    initialRouteName: 'Welcome'
});

export default AuthStack;