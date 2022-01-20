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
            <Provider store={ store }>
                <NavigationContainer>
                    <PlayScreen />
                </NavigationContainer>
            </Provider>
        );

        return { getByText, queryAllByTestId, debug } = render(component);
    });

    afterEach(cleanup);

    test('PlayScreen renders Start Game button, which when clicked, renders the game screen', () => {


        const button = getByText(/start game/i);
        expect(button).toBeDefined();

        console.log("Game Started...");
        fireEvent.press(button);


        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
        const cardNumbers = queryAllByTestId('cardNumber');
        let working = true;
        for (let i = 0; i < cardNumbers.length; i++) {
            if (!cards.includes(cardNumbers[i].props.children)) {
                working = false;
            };
        };
        expect(working).toBeTruthy();
    });


    test('Card updates as Higher or Lower buttons are pressed', () => {

        const button = getByText(/start game/i);
        fireEvent.press(button);

        // debug();
        const cardNumbers = queryAllByTestId('cardNumber');
        const oldCard = cardNumbers[0].props.children;
        console.log('Original card', oldCard)

        const higher = getByText(/higher/i);
        fireEvent.press(higher);

        // debug();

        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
        const newCardNumbers = queryAllByTestId('cardNumber');
        const newCard = newCardNumbers[0].props.children;
        console.log('New card', newCard)
        expect(cards).toContain(newCard);
        expect(oldCard).not.toBe(newCard);

    })
});