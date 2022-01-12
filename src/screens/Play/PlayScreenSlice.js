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
    for (let i = 0; i <= 9; i++) {
        state.cardStack.push(suitsArray[i])
    }

    state.currentCard = state.cardStack[0]
    console.log(state.currentCard)
}

const PlayScreenSlice = createSlice({
    name: 'Play',
    initialState,
    reducers: {
        startGame: (state, action) => {
            initiateGame(state)
        },
        updateScore: (state, action) => {
            state.score = action.payload
        },
        updateHighScore: (state, action) => {
            state.highScore = action.payload
        },
        updateCurrentCard: (state, action) => {
            state.currentCard = action.payload
        },
        updateLastCard: (state, action) => {
            state.lastCard = action.payload
        }
    }
})

export const selectScore = state => state.score;
export const selectHighScore = state => state.highScore;
export const selectCurrentCard = state => state.currentCard;
export const selectLastCard = state => state.lastCard;

export const { startGame, updateScore, updateHighScore, updateCurrentCard, updateLastCard } = PlayScreenSlice.actions;
export default PlayScreenSlice.reducer;