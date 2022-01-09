import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
    test('HomeScreen renders Hello', () => {
        const screen = render(<HomeScreen />);
        const hello = screen.getByText('wtf');
        expect(hello).toBeDefined();
    });
});