import { createSwitchNavigator } from 'react-navigation';
import Splash from '../screens/Auth/Splash';
import AuthStack from './AuthStack';
import AppStack from './AppStack';



 const SwitchStack = createSwitchNavigator(
    {
        Splash: Splash, 
        Auth: AuthStack,
        App: AppStack,
    },
    {
      initialRouteName: 'Splash',
    },
);

export default SwitchStack;
