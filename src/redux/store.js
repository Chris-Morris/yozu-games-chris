import { configureStore } from '@reduxjs/toolkit';

import PlayScreenSlice from '../screens/Play/PlayScreenSlice';
import AuthSlice from './AuthSlice';

export const store = configureStore({
    reducer: {
        Play: PlayScreenSlice,
        Auth: AuthSlice
    }
})