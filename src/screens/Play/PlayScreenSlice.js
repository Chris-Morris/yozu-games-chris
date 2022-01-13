import { createSlice } from '@reduxjs/toolkit';
import suitsArray from './suitsArray';
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace']

const initialState = {
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

const initiateGame = (state) => {
    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * (suitsArray.length - 0) + 0);
        state.cardStack.push(suitsArray[index])
    }

    state.currentCard = {
        number: null,
        suit: ''
    };
    state.lastCard = {
        number: null,
        suit: ''
    };
    state.score = 0;
    state.currentCard = state.cardStack[0]
}

const PlayScreenSlice = createSlice({
    name: 'Play',
    initialState,
    reducers: {
        startGame: (state) => {
            initiateGame(state);
        },
        guess: (state, action) => {
            if (state.cardStack.length > 1) {
                state.cardStack.splice(0, 1);
                state.lastCard = state.currentCard;
                state.currentCard = state.cardStack[0];
            } else {
                // state.score = 0;
                state.cardStack = [];
                state.lastCard = {
                    number: null,
                    suit: ''
                };
                state.currentCard = {
                    number: null,
                    suit: ''
                };
                state.endGame = true
            }

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
        setEndGame: (state, action) => {
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
            state.cardStack = [];
            state.turn = 1;
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

export const { startGame, guess, setEndGame, resetGame, resetHighScore, resetNewHighScore } = PlayScreenSlice.actions;
export default PlayScreenSlice.reducer;