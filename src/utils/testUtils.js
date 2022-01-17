import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import playReducer from '../screens/Play/PlayScreenSlice';

const stateOfPlay = {
    score: 0,
    highScore: 0,
    newHighScore: false,
    currentCard: {
        number: null,
        suit: ''
    },
    lastCard: {
        number: null,
        suit: ''
    },
    cardStack: [],
    endGame: false
}

function render(
    ui,
    {
        initialState,
        store = configureStore({
            reducer: { play: playReducer },
            preloadedState: initialState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react-native';
export { render, stateOfPlay }