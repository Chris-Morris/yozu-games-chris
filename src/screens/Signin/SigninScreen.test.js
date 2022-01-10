import { render } from '@testing-library/react-native';
import SigninScreen from './SigninScreen';

describe('SigninScreen', () => {
    test('SigninScreen renders Hello', () => {
        const screen = render(<SigninScreen />);
        const hello = screen.getByText('wtf');
        expect(hello).toBeDefined();
    });
});