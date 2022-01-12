import { createSlice } from '@reduxjs/toolkit';
import suitsArray from './suitsArray';

const initialState = {
    score: 0,
    highScore: 0,
    currentCard: {
        number: null,
        suit: ''
    },
    lastCard: {
        number: null,
        suit: ''
    },
    cardStack: []
}

const initiateGame = (state) => {
    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * (suitsArray.length - 0) + 0);
        state.cardStack.push(suitsArray[index])
    }

    state.currentCard = state.cardStack[0]
}

const PlayScreenSlice = createSlice({
    name: 'Play',
    initialState,
    reducers: {
        startGame: (state) => {
            initiateGame(state);
        },
        updateScore: (state, action) => {
            state.score = action.payload;
        },
        updateHighScore: (state, action) => {
            state.highScore = action.payload;
        },
        updateCurrentCard: (state) => {
            if (state.cardStack.length > 1) {
                state.cardStack.splice(0, 1);
                state.currentCard = state.cardStack[0];
            } else {
                state.currentCard = {
                    number: null,
                    suit: ''
                }
            }

        },
        updateLastCard: (state, action) => {
            state.lastCard = action.payload;
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
        }
    }
})

export const selectScore = state => state.score;
export const selectHighScore = state => state.highScore;
export const selectCurrentCard = state => state.currentCard;
export const selectLastCard = state => state.lastCard;

export const { startGame, updateScore, updateHighScore, updateCurrentCard, updateLastCard, resetGame } = PlayScreenSlice.actions;
export default PlayScreenSlice.reducer;