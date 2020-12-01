import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/App/HomeScreens/Home';
import SingleCategories from '../screens/App/HomeScreens/SingleCategories';

const AppStack = createStackNavigator(
  {
    Home: Home,
    SingleCategories: SingleCategories,
  },

  {
    headerMode: 'none',
    gesturesEnabled: false,
  },
);

export default AppStack;
