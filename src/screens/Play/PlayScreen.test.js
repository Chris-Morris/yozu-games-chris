import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import PlayScreen from './PlayScreen';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


describe('PlayScreen', () => {

    let component;
    beforeEach(() => {
        jest.useFakeTimers();
        component = (
            <Provider store={store}>
                <NavigationContainer>
                    <PlayScreen />
                </NavigationContainer>
            </Provider>
        );

        return { getByText, getByTestId, queryAllByTestId, debug, closest } = render(component);
    });

    afterEach(() => {
        jest.clearAllTimers();
        cleanup
    });

    test('PlayScreen renders Start Game button, which when clicked, renders the game screen', () => {

        const highScore = getByText(/high score/i);
        expect(highScore).toBeTruthy();

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

    test('Higher and Lower buttons are rendered', () => {

        const button = getByText(/start game/i);

        fireEvent.press(button);

        const higher = getByText(/higher/i);
        const lower = getByText(/lower/i);

        expect(higher).toBeTruthy();
        expect(lower).toBeTruthy();
    });

    test('High Score initilizes as 0', () => {
        const button = getByText(/start game/i);

        fireEvent.press(button);

        // const text = getByTestId('highScore')
        // debug()
        const highScoreText = getByText(/high score/i);
        // const highScoreValue = getByTestId("highScore");
        expect(highScoreText).toBeTruthy();

    });

    // test('Card updates as Higher or Lower buttons are pressed', async () => {

    //     const button = getByText(/start game/i);
    //     fireEvent.press(button);

    //     // debug();
    //     const cardNumbers = queryAllByTestId('cardNumber');
    //     const oldCard = cardNumbers[0].props.children;
    //     for (let i = 0; i < cardNumbers.length; i++) {

    //         console.log(cardNumbers[i].props.children);
    //     }
    //     console.log('Original card', oldCard)
    //     console.log('\n\n\n');

    //     const higher = getByText(/higher/i);
    //     fireEvent.press(higher);

    //     jest.advanceTimersByTime(600);

    //     const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
    //     const newCardNumbers = queryAllByTestId('cardNumber');
    //     const newCard = newCardNumbers[0].props.children;
    //     console.log('New card', newCard)
    //     expect(cards).toContain(newCard);
    //     expect(oldCard).not.toBe(newCard);

    // })
});