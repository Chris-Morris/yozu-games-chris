import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';

// import SigninScreen from './SigninScreen';
import { AuthContext } from '../../context/authContext';
import ProfileScreen from './ProfileScreen';

describe('Profile Screen', () => {

    let screen;

    beforeEach(() => {
        screen = render(
            <AuthContext.Provider value={ {} }>
                <ProfileScreen />
            </AuthContext.Provider>
        )
    });

    afterEach(cleanup);

    test('renders sign out button', () => {
        // Arrange
        const signoutButton = screen.getByText(/sign out/i);

        // Assert
        expect(signoutButton).toBeDefined();
    });

    test('shows alert when sign in button is pressed when invalid details are present', () => {
        // Arrange
        const disabledButton = screen.getByTestId('disabledButton');
        jest.spyOn(Alert, 'alert');

        // Act
        fireEvent.press(disabledButton);

        // Assert
        expect(Alert.alert).toHaveBeenCalledTimes(1);
    });
});