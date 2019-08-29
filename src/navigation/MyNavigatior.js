import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen/AuthLoadingScreen';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import SignInScreen from '../screens/SignInScreen/SignInScreen';

const MyAppStack = createStackNavigator(
  // Những màn hình nào cùng 1 createStackNavigator thì mời navigator.goBack() được
  // Ở đây có 2 màn hình, nên goBack() được
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
  },
);

const MyAuthStack = createStackNavigator(
  // Những màn hình nào cùng 1 createStackNavigator thì mời navigator.goBack() được
  // Ở đây chỉ có 1 màn hình, nên không goBack() được
  {
    SignIn: SignInScreen,
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    headerLayoutPreset: 'center',
  },
);

const MyAppNavigator = createSwitchNavigator(
  {
    MyAuthLoading: AuthLoadingScreen,
    MyApp: MyAppStack,
    MyAuth: MyAuthStack,
  },
  {
    initialRouteName: 'MyAuthLoading',
  },
);

export default createAppContainer(MyAppNavigator);
