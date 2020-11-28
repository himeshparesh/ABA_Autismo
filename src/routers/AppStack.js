import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/App/HomeScreens/Home";

const AppStack = createStackNavigator({
    Home: Home,
    
    },
  
    {
    headerMode: 'none',
    gesturesEnabled: false,
});

export default AppStack;
    