import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ButtonContainer from '../components/ButtonContainer';
import PlayScreen from '../screens/Play/PlayScreen';

describe('Button Container', () => {

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

    afterEach(cleanup);

    test('button style switches to active when button is pressed', () => {
        const button = getByText(/start game/i);
        expect(button).toBeDefined();

        console.log("Game Started...");
        fireEvent.press(button);

        const higher = getByTestId(/higher/i);
        const lower = getByTestId(/lower/i);

        console.log(lower.props.style)

        expect(higher.props.style.backgroundColor).toBe('rgb(245, 106, 104)');
        expect(higher.props.style.color).toBe('rgb(249, 249, 249)');
        expect(lower.props.style.backgroundColor).toBe('rgb(245, 106, 104)');
        expect(lower.props.style.color).toBe('rgb(249, 249, 249)');

        fireEvent.press(higher);
        expect(higher.props.style.backgroundColor).toBe('rgb(249, 249, 249)');
        expect(higher.props.style.color).toBe('rgb(245, 106, 104)');

        expect(lower.props.style.backgroundColor).toBe('rgb(245, 106, 104)');
        expect(lower.props.style.color).toBe('rgb(249, 249, 249)');

        fireEvent.press(lower);
        expect(lower.props.style.backgroundColor).toBe('rgb(249, 249, 249)');
        expect(lower.props.style.color).toBe('rgb(245, 106, 104)');

        expect(higher.props.style.backgroundColor).toBe('rgb(245, 106, 104)');
        expect(higher.props.style.color).toBe('rgb(249, 249, 249)');

    });
});