import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: 'Welcome to Yozu Games!'
}

const SignupScreenSlice = createSlice({
    name: 'Signup',
    initialState,
    reducers: {
        changeGreeting: (state, action) => {
            console.log(action.payload)
            state.greeting = action.payload
        }
    }
})

export const selectGreeting = state => state.greeting;

export const { changeGreeting } = SignupScreenSlice.actions;
export default SignupScreenSlice.reducer;