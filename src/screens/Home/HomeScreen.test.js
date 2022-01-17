import { render, fireEvent, stateOfPlay } from '../../utils/testUtils';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
    test('HomeScreen renders Hello', () => {
        const screen = render(<HomeScreen />, { initialState: stateOfPlay });
        const hello = screen.getByText('wtf');
        expect(hello).toBeDefined();
    });
});