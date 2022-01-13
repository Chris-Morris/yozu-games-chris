import { configureStore } from '@reduxjs/toolkit';

import HomeScreenSlice from '../screens/Home/HomeScreenSlice';
import PlayScreenSlice from '../screens/Play/PlayScreenSlice';
import AuthSlice from './AuthSlice';

export const store = configureStore({
    reducer: {
        Home: HomeScreenSlice,
        Play: PlayScreenSlice,
        Auth: AuthSlice
    }
})