import {configureStore } from '@reduxjs/toolkit';
import imageReducer from './features/imageSlice';
import toggleReducer from './features/toggleSlice';

const store = configureStore({
  reducer: {
    image: imageReducer,
    toggle: toggleReducer,
  }
})


export default store;