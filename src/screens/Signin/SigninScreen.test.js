import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import NavContainer from '../../../navigators/NavigationContainer';

import SigninScreen from './SigninScreen';

describe('Sign In Screen', () => {

    let screen;
    beforeEach(() => {
        screen = (
            <Provider store={store}>
                <NavigationContainer>
                    <SigninScreen />
                </NavigationContainer>
            </Provider>
        );

        return { getByText, getByTestId, queryByTestId, queryAllByTestId, getByPlaceholderText, debug } = render(screen);
    });

    afterEach(cleanup);

    test('renders username input', () => {
        // Arrange
        const usernameInput = getByPlaceholderText('Username');

        // Assert
        expect(usernameInput).toBeDefined();
    });

    test('renders password input', () => {
        // Arrange
        const passwordInput = getByPlaceholderText('Password');

        // Assert
        expect(passwordInput).toBeDefined();
    });

    test("renders username input box with invalid style when less than 5 characters entered", () => {
        // Arrange
        const username = getByPlaceholderText('Username');
        fireEvent.changeText(username, 'chri')

        // Assert
        expect(username.props.style[1].borderColor).toBe('rgb(255, 2, 2)');
    });

    test("renders password input box with invalid style when less than 5 characters entered", () => {
        // Arrange
        const password = getByPlaceholderText('Password');
        fireEvent.changeText(password, 'pass');

        // Assert
        expect(password.props.style[1].borderColor).toBe('rgb(255, 2, 2)');
    });

    test("renders disabled button until inputs verified, doesn't render enabled button", () => {
        // Arrange
        const disabledSubmitButton = getByTestId('disabledButton');
        const enabledSubmitButton = queryByTestId('enabledButton');

        // Assert
        expect(disabledSubmitButton).toBeTruthy();
        expect(enabledSubmitButton).toBeFalsy();
    });

    test("renders enabled button until inputs verified, doesn't render disabled button", () => {
        // Arrange and Act
        const username = getByPlaceholderText('Username');
        fireEvent.changeText(username, 'chris')
        const password = getByPlaceholderText('Password');
        fireEvent.changeText(password, 'password');
        const disabledSubmitButton = queryByTestId('disabledButton');
        const enabledSubmitButton = queryByTestId('enabledButton');

        // Assert
        expect(disabledSubmitButton).toBeFalsy();
        expect(enabledSubmitButton).toBeTruthy();
    });

    test('shows alert when sign in button is pressed when invalid details are present', () => {
        // Arrange
        const disabledButton = getByTestId('disabledButton');
        jest.spyOn(Alert, 'alert');

        // Act
        fireEvent.press(disabledButton);

        // Assert
        expect(Alert.alert).toHaveBeenCalledTimes(1);
    });

    test('navigates to Home Screen on Sign In', async () => {
        const nav = (
            <Provider store={store}>
                <NavContainer />
            </Provider>
        );

        const { findByText, queryByText } = render(nav);

        expect(queryByText(/Higher or Lower/i)).toBeFalsy();

        // Arrange and Act
        const username = getByPlaceholderText('Username');
        fireEvent.changeText(username, 'chris')
        const password = getByPlaceholderText('Password');
        fireEvent.changeText(password, 'password');
        const enabledSubmitButton = queryByTestId('enabledButton');

        fireEvent.press(enabledSubmitButton);

        const game = await findByText(/Higher or Lower/i);

        expect(game).toBeTruthy();
    });
});