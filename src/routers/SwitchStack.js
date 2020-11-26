import { createSwitchNavigator } from 'react-navigation';
import AppStack from './AppStack';
import Splash from '../screens/Splash';
import AuthStack from './AuthStack';


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
