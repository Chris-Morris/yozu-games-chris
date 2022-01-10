import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: 'Welcome to Yozu Games!'
}

const SigninScreenSlice = createSlice({
    name: 'Signin',
    initialState,
    reducers: {
        changeGreeting: (state, action) => {
            console.log(action.payload)
            state.greeting = action.payload
        }
    }
})

export const selectGreeting = state => state.greeting;

export const { changeGreeting } = SigninScreenSlice.actions;
export default SigninScreenSlice.reducer;