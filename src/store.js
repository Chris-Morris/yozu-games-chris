import { configureStore } from '@reduxjs/toolkit';

import HomeScreenSlice from './screens/Home/HomeScreenSlice';

export const store = configureStore({
    reducer: {
        Home: HomeScreenSlice
    }
})