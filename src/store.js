import { configureStore } from 'redux-toolkit';

import HomeScreenSlice from './screens/Home/HomeScreenSlice';

export const store = configureStore({
    reducer: {
        HomeScreenSlice
    }
})