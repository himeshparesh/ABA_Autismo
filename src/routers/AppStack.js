import { createStackNavigator } from "react-navigation-stack";
import BottomTabBar from "./BottomTabBar";

const AppStack = createStackNavigator({
    BottomTabBar: BottomTabBar,
    
    },
  
    {
    headerMode: 'none',
    gesturesEnabled: false,
});

export default AppStack;
    