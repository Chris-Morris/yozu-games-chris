import { render } from '@testing-library/react-native';
import PlayScreen from './PlayScreen';

describe('PlayScreen', () => {
    test('PlayScreen renders Hello', () => {
        const screen = render(<PlayScreen />);
        const hello = screen.getByText('wtf');
        expect(hello).toBeDefined();
    });
});