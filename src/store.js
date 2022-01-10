import { configureStore } from '@reduxjs/toolkit';

import HomeScreenSlice from './screens/Home/HomeScreenSlice';
import PlayScreenSlice from './screens/Play/PlayScreenSlice';

export const store = configureStore({
    reducer: {
        Home: HomeScreenSlice,
        Play: PlayScreenSlice
    }
})