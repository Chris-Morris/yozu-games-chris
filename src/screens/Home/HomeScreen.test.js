import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { NavigationContainer } from '@react-navigation/native';
import NavContainer from '../../../navigators/NavigationContainer';
import GameStack from '../../../navigators/GameStack';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {

    test('renders game buttons', () => {
        const home = (
            <Provider store={store}>
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            </Provider>
        );

        const { findByText } = render(home);

        expect(findByText(/Higher or Lower/i)).toBeTruthy();
        expect(findByText(/simon says/i)).toBeTruthy();
        expect(findByText(/memory/i)).toBeTruthy();
        expect(findByText(/countdown letters/i)).toBeTruthy();

    });
});