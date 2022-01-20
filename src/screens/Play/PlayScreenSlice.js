import { createSlice } from '@reduxjs/toolkit';
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];

const initialState = {
    turn: 0,
    score: 0,
    highScore: 0,
    newHighScore: false,
    cardDeck: [],
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
    const suits = ['heart', 'diamond', 'spade', 'club'];
    const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king', 'ace'];
    for (let i = 0; i < 10; i++) {
        const suitIndex = Math.floor(Math.random() * (suits.length - 0) + 0);
        const suit = suits[suitIndex];

        const numberIndex = Math.floor(Math.random() * (numbers.length - 0) + 0);
        const number = numbers[numberIndex];

        state.cardDeck.push({ suit, number });
    }

    state.currentCard = {
        number: null,
        suit: ''
    };
    state.lastCard = {
        number: null,
        suit: ''
    };
    state.turn = 0;
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
            state.turn++;

            state.lastCard = state.cardDeck[state.cardDeck.length - 1];
            state.cardDeck.splice(state.cardDeck.length - 1, 1);
            state.currentCard = state.cardDeck[state.cardDeck.length - 1];

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
            state.gameStarted = false;
            state.endGame = action.payload;
            state.cardDeck = [];
        },
        resetGame: (state) => {
            state.cardDeck = [];
            state.currentCard = {
                number: null,
                suit: ''
            };
            state.lastCard = {
                number: null,
                suit: ''
            };
            state.cardDeck = [];
            state.score = 0;
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