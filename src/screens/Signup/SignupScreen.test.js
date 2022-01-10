import { render } from '@testing-library/react-native';
import SignupScreen from './SignupScreen';

describe('SignupScreen', () => {
    test('SignupScreen renders Hello', () => {
        const screen = render(<SignupScreen />);
        const hello = screen.getByText('wtf');
        expect(hello).toBeDefined();
    });
});