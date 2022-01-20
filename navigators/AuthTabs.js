// Import Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Import Screens
import SigninScreen from "../src/screens/Signin/SigninScreen";
import SignupScreen from "../src/screens/Signup/SignupScreen";

const Tab = createBottomTabNavigator();

const AuthTabs = () => {

    <Tab.Navigator screenOptions={ {
        headerShown: false
    } }>
        <Tab.Screen name="Sign In" component={ SigninScreen } options={ {
            tabBarLabel: 'Sign In',
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="key" color={ color } size={ size } />
            ),
        } } />
        <Tab.Screen name="Sign Up" component={ SignupScreen } options={ {
            tabBarLabel: 'Sign Up',
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="sign-in" color={ color } size={ size } />
            ),
        } } />
    </Tab.Navigator>
}

export default AuthTabs;