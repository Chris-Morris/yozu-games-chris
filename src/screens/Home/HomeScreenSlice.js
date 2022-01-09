import { createSlice } from 'redux-toolkit';

const initialState = {
    greeting: 'Hello, fellow developer. Welcome to Yozu Games!'
}

const HomeScreenSlice = {
    name: 'Home',
    initialState,
    reducers: {
        changeGreeting: (state, action) => {
            state.greeting = action.payload
        }
    }
}

export const { changeGreeting } = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;