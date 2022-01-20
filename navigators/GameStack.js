// Import Navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens
import HomeTabs from "./HomeTabs";
import PlayScreen from "../src/screens/Play/PlayScreen";
import EndGameScreen from "../src/screens/EndGame/EndGameScreen";

const Stack = createNativeStackNavigator();

const GameStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={ HomeTabs } options={ { headerShown: false } } />
            <Stack.Screen name="Play" component={ PlayScreen } options={ {
                headerBackTitleVisible: false, headerTitle: 'Higher or Lower', headerTransparent: false, headerStyle: {
                    backgroundColor: '#F56A68',
                }, headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            } } />
            <Stack.Screen name="EndGame" component={ EndGameScreen } options={ { headerShown: false } } />
        </Stack.Navigator>
    )
}

export default GameStack;