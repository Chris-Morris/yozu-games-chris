import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Import Screens
import SignupScreen from './src/screens/Signup/SignupScreen';
import SigninScreen from './src/screens/Signin/SigninScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import PlayScreen from './src/screens/Play/PlayScreen';
import AccountScreen from './src/screens/Account/AccountScreen';

// Redux
import { Provider } from 'react-redux';
import { store } from './src/store';

const switchNavigator = createSwitchNavigator({
  // loginFlow: createStackNavigator({
  //   Signin: SigninScreen,
  //   Signup: SignupScreen
  // }),
  mainFlow: createBottomTabNavigator({
    Home: createStackNavigator({
      Home: HomeScreen,
      Play: PlayScreen
    }),
    Account: AccountScreen,
  }),
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}