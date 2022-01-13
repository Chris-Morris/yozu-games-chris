import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        restoreToken: (state, action) => {
            state.userToken = action.payload;
            isLoading = false;
        },
        signIn: (state, action) => {
            state.userToken = action.payload;
            state.isSignout = false;
        },
        signOut: (state) => {
            state.userToken = null;
            state.isSignout = true;
        }
    }
})

export const selectIsLoading = state => state.isLoading;
export const selectIsSignout = state => state.isSignout;
export const selectUserToken = state => state.userToken;

export const { restoreToken, signIn, signOut } = AuthSlice.actions;
export default AuthSlice.reducer;