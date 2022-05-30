import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter-Slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
