import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import PlayScreen from './PlayScreen';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('PlayScreen', () => {

    let component;
    beforeEach(() => {
        component = (
            <Provider store={store}>
                <NavigationContainer>
                    <PlayScreen />
                </NavigationContainer>
            </Provider>
        );

        return { getByText, queryByTestId, debug } = render(component);
    });

    afterEach(cleanup);

    test('PlayScreen renders Start Game button, which when clicked, renders the game screen', () => {


        const button = getByText(/start game/i);
        expect(button).toBeDefined();

        console.log("Game Started...");
        fireEvent.press(button);


        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
        const cardNumber = queryByTestId('cardNumber');
        expect(cards).toContain(cardNumber.props.children);
    });


    test('Card updates as Higher or Lower buttons are pressed', async () => {

        const button = getByText(/start game/i);
        fireEvent.press(button);

        debug();
        const cardNumber = queryByTestId('cardNumber');


        const higher = getByText(/higher/i);
        await fireEvent.press(higher);

        debug();

        const lower = getByText(/lower/i);
        fireEvent.press(lower);

        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
        const newCardNumber = queryByTestId('cardNumber');
        console.log('Original card', cardNumber.props)
        console.log('New card', newCardNumber.props)
        expect(cards).toContain(newCardNumber.props.children);
        expect(cardNumber.props.children).toBe(newCardNumber.props.children);

    })
});