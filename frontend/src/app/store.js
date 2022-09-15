import { configurationStore, configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/userSlice';

const store = configureStore({
    reducer: {
        user: (userReducer)
    },
})

store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState().user.user)));
// store.subscribe(() => console.log('Yupp', store.getState()))

export default store;