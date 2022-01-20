// Import Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Icons
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// Import Screens
import HomeScreenAnimated from "../src/screens/Home/HomeScreenAnimated";
import StatsScreen from "../src/screens/Stats/StatsScreen";
import AwardsScreen from "../src/screens/Awards/AwardsScreen";
import ProfileScreen from "../src/screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={ { headerShown: false } } >
            <Tab.Screen name="Home" component={ HomeScreenAnimated } options={ {
                tabBarLabel: 'GAMES',
                tabBarIcon: ({ color, size }) => (
                    <Material name="dice-5-outline" color={ color } size={ size } />
                )
            } } />
            <Tab.Screen name="Stats" component={ StatsScreen } options={ {
                tabBarLabel: 'STATS',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="text-document" color={ color } size={ size } />
                )
            } } />
            <Tab.Screen name="Awards" component={ AwardsScreen } options={ {
                tabBarLabel: 'AWARDS',
                tabBarIcon: ({ color, size }) => (
                    <Material name="star-circle-outline" color={ color } size={ size } />
                )
            } } />
            <Tab.Screen name="Profile" component={ ProfileScreen } options={ {
                tabBarLabel: 'PROFILE',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="heart-outlined" color={ color } size={ size } />
                )
            } } />
        </Tab.Navigator>
    )
}

export default HomeTabs;