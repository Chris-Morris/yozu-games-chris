import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../../App';

describe('App integration test', () => {

    afterEach(cleanup);

    test('renders signin screen', () => {

        // Arrange
        const component = (
            <Provider store={store}>
                <App />
            </Provider>
        );

        const { findByText, findAllByText, findByPlaceholderText } = render(component);

        const username = findByPlaceholderText(/username/i);
        const password = findByPlaceholderText(/password/i);

        const signinButton = findByText(/sign in/i);
        console.log(signinButton.props.children);

        // Act
        fireEvent.changeText(username, 'chris');
        fireEvent.changeText(password, 'chris123');
        fireEvent.press(signinButton[0]);

        const playButton = findByText(/higher or lower/i);
        expect(playButton).toBeTruthy();
    });
});