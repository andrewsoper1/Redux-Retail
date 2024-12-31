import { configureStore } from '@reduxjs/toolkit';
import {shopReducer, authReducer, userReducer}  from './reducers';


export const store = configureStore({
    reducer: {
        shop: shopReducer,
        auth: authReducer,
        user: userReducer

    },
});    