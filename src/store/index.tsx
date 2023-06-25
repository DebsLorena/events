import { configureStore } from '@reduxjs/toolkit';
import { usuarioReducer } from './usuarioReducer'


export const store = configureStore({
    reducer: usuarioReducer,
});