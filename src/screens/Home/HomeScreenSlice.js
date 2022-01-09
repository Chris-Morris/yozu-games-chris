import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: 'Hello, fellow developer. Welcome to Yozu Games!'
}

const HomeScreenSlice = createSlice({
    name: 'Home',
    initialState,
    reducers: {
        changeGreeting: (state, action) => {
            console.log(action.payload)
            state.greeting = action.payload
        }
    }
})

export const selectGreeting = state => state.greeting;

export const { changeGreeting } = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;