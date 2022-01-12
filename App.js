import React, { useReducer, useMemo, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Navigation libs
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import SignupScreen from './src/screens/Signup/SignupScreen';
import SigninScreen from './src/screens/Signin/SigninScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import PlayScreen from './src/screens/Play/PlayScreen';
import AccountScreen from './src/screens/Account/AccountScreen';

// Context
import { AuthContext } from './src/context/authContext';

// Redux
import { Provider } from 'react-redux';
import { store } from './src/store';

// Set up Stack Navigator
const Tab = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();

function GameScreen() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <GameStack.Screen name="Play" component={PlayScreen} options={{ headerBackTitleVisible: false, headerTitle: 'Higher/Lower', headerTransparent: true }} />
    </GameStack.Navigator>
  );
}

export default () => {
  const [authState, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        console.log(e);
      };

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
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
              <GameStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <GameStack.Screen name="Play" component={PlayScreen} options={{ headerBackTitleVisible: false, headerTitle: 'Higher or Lower', headerTintColor: 'white', headerStyle: { backgroundColor: '#F56A68' } }} />
            </GameStack.Navigator>
            :
            <Tab.Navigator screenOptions={{
              headerShown: false
            }}>
              <Tab.Screen name="Sign In" component={SigninScreen} options={{
                tabBarLabel: 'Sign In',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="key" color={color} size={size} />
                ),
              }} />
              <Tab.Screen name="Sign Up" component={SignupScreen} options={{
                tabBarLabel: 'Sign Up',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="sign-in" color={color} size={size} />
                ),
              }} />
            </Tab.Navigator>
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}