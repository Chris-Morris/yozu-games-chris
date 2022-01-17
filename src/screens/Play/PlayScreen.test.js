import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import PlayScreen from './PlayScreen';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('PlayScreen', () => {
    test('PlayScreen renders Start Game', () => {
        const component = (
            <Provider store={store}>
                <NavigationContainer>
                    <PlayScreen />
                </NavigationContainer>
            </Provider>
        );

        const { getByText, queryByTestId, debug } = render(component);

        const button = getByText(/start game/i);
        expect(button).toBeDefined();
        debug();
        console.log("Game Started...");
        fireEvent.press(button);
        debug();

        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
        const cardNumber = queryByTestId('cardNumber');
        expect(cards).toContain(cardNumber.props.children);
    });
});