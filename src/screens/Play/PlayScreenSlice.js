import { createSlice } from '@reduxjs/toolkit';
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];

const initialState = {
    turn: -1,
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
    gameStarted: false,
    endGame: false
}

const initiateGame = (state) => {
    state.currentCard = {
        number: null,
        suit: ''
    };
    state.lastCard = {
        number: null,
        suit: ''
    };
    state.turn = -1,
        state.score = 0;
    state.gameStarted = true
}

const PlayScreenSlice = createSlice({
    name: 'Play',
    initialState,
    reducers: {
        startGame: (state) => {
            initiateGame(state);
        },
        guess: (state, action) => {
            state.turn++

            if (action.payload === 'higher') {
                if (numbers.indexOf(state.currentCard.number) > numbers.indexOf(state.lastCard.number)) {
                    state.score += 1;
                };
            } else {
                if (numbers.indexOf(state.currentCard.number) < numbers.indexOf(state.lastCard.number)) {
                    state.score += 1;
                };
            };

            if (state.score > state.highScore) {
                state.highScore = state.score;
                state.newHighScore = true;
            };
        },
        setlastCard: (state, action) => {
            state.lastCard = action.payload;
        },
        setEndGame: (state, action) => {
            state.gameStarted = false;
            state.endGame = action.payload;
        },
        resetGame: (state) => {
            state.currentCard = {
                number: null,
                suit: ''
            };
            state.lastCard = {
                number: null,
                suit: ''
            };
            state.score = 0;
            state.turn = -1;
        },
        resetHighScore: (state) => {
            state.highScore = 0;
            state.newHighScore = false;
        },
        resetNewHighScore: (state) => {
            state.newHighScore = false;
        }
    }
})

export const selectScore = state => state.score;
export const selectHighScore = state => state.highScore;
export const selectCurrentCard = state => state.currentCard;
export const selectLastCard = state => state.lastCard;

export const { startGame, guess, setTurn, setLastCard, setEndGame, resetGame, resetHighScore, resetNewHighScore } = PlayScreenSlice.actions;
export default PlayScreenSlice.reducer;