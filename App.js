import React, { useReducer, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// Import Navigation libs
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import SignupScreen from './src/screens/Signup/SignupScreen';
import SigninScreen from './src/screens/Signin/SigninScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import PlayScreen from './src/screens/Play/PlayScreen';
import StatsScreen from './src/screens/Stats/StatsScreen';
import AwardsScreen from './src/screens/Awards/AwardsScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import EndGameScreen from './src/screens/EndGame/EndGameScreen';

// Context
import { AuthContext } from './src/context/authContext';

// Redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { restoreToken, signIn, signOut } from './src/redux/AuthSlice';

// Set up Stack Navigator
const Tab = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'GAMES',
        tabBarIcon: ({ color, size }) => (
          <Material name="dice-5-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Stats" component={StatsScreen} options={{
        tabBarLabel: 'STATS',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="text-document" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Awards" component={AwardsScreen} options={{
        tabBarLabel: 'AWARDS',
        tabBarIcon: ({ color, size }) => (
          <Material name="star-circle-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="heart-outlined" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default () => {
  const dispatch = useDispatch();
  // const [authState, dispatch] = useReducer(
  //   (prevState, action) => {
  //     switch (action.type) {
  //       case 'RESTORE_TOKEN':
  //         return {
  //           ...prevState,
  //           userToken: action.token,
  //           isLoading: false
  //         };
  //       case 'SIGN_IN':
  //         return {
  //           ...prevState,
  //           isSignout: false,
  //           userToken: action.token
  //         };
  //       case 'SIGN_OUT':
  //         return {
  //           ...prevState,
  //           isSignout: true,
  //           userToken: null
  //         };
  //     }
  //   },
  //   {
  //     isLoading: true,
  //     isSignout: false,
  //     userToken: null
  //   }
  // );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        console.log(e);
      };

      dispatch(restoreToken(userToken));
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async () => {
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
    signOut: () => dispatch({ type: 'SIGN_OUT' }),
    signUp: async () => {
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    }
  }), []);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {authState.userToken ?
            <GameStack.Navigator>
              <GameStack.Screen name="HomeScreen" component={HomeTabs} options={{ headerShown: false }} />
              <GameStack.Screen name="Play" component={PlayScreen} options={{ headerBackTitleVisible: false, headerTitle: 'Higher or Lower', headerTransparent: true }} />
              <GameStack.Screen name="EndGame" component={EndGameScreen} options={{ headerShown: false }} />
            </GameStack.Navigator>
            :
            <Tab.Navigator screenOptions={{
              headerShown: false
            }}>
              <Tab.Screen name="Sign In" component={SigninScreen} options={{
                tabBarLabel: 'Sign In',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="key" color={color} size={size} />
                ),
              }} />
              <Tab.Screen name="Sign Up" component={SignupScreen} options={{
                tabBarLabel: 'Sign Up',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="sign-in" color={color} size={size} />
                ),
              }} />
            </Tab.Navigator>
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}