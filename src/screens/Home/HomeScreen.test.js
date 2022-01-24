import { render, fireEvent, cleanup, debug } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import HomeScreen from './HomeScreen';
import NavContainer from '../../../navigators/NavigationContainer';
import GameStack from '../../../navigators/GameStack';

describe('HomeScreen', () => {

    test('navigates to Play Screen on press', async () => {
        const home = (
            <Provider store={store}>
                <NavContainer>
                    <GameStack />
                </NavContainer>
            </Provider>
        );

        const { findByText, findByTestId, queryByText, queryByTestId, getByPlaceholderText } = render(home);

        expect(queryByText(/start game/i)).toBeFalsy();

        expect(queryByText(/Higher or Lower/i)).toBeFalsy();

        // Arrange and Act
        const username = getByPlaceholderText('Username');
        fireEvent.changeText(username, 'chris')
        const password = getByPlaceholderText('Password');
        fireEvent.changeText(password, 'password');
        const enabledSubmitButton = queryByTestId('enabledButton');

        fireEvent.press(enabledSubmitButton);

        const game = await findByTestId('higherOrLower');
        // console.log(game);

        expect(game).toBeTruthy();

        fireEvent.press(game);

        // const startGame = await findByText(/start game/i);

        // expect(startGame).toBeTruthy();
    });
});