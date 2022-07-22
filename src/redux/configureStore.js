import { configureStore } from '@reduxjs/toolkit';
import checkReducer from './categories/categories';
import addRemoveReducer, { loadBookThunk } from './books/books';

const store = configureStore({
  reducer: {
    checkStatus: checkReducer,
    books: addRemoveReducer,
  },
  middleware: [
    loadBookThunk,
  ],
});

export default store;
