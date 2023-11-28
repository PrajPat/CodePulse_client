import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

import userReducer from './UserSlice'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistconfig = {
    key: 'code',
    version: 1,
    storage,
}


// const rootReducer = combineReducers({
//     user: userReducer
// })

const persistedReducer = persistReducer(persistconfig, userReducer)

export const MainStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})