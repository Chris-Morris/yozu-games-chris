import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: 'Welcome to Yozu Games!'
}

const PlayScreenSlice = createSlice({
    name: 'Play',
    initialState,
    reducers: {
        changeGreeting: (state, action) => {
            console.log(action.payload)
            state.greeting = action.payload
        }
    }
})

export const selectGreeting = state => state.greeting;

export const { changeGreeting } = PlayScreenSlice.actions;
export default PlayScreenSlice.reducer;