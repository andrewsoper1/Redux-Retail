import { configureStore } from 'redux';
import shopReducer from './reducers';

export const store = configureStore({
    reducer: {
        shop: shopReducer,

    },
});    