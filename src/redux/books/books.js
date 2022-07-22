// import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LOAD_API = 'bookstore/books/LOAD_API';
// const ADD_BOOK_TO_API = 'bookstore/books/ADD_BOOK_TO_API'

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/95Xn3hdGHIY8sUE2lYPk/';

const initialState = [
  {
    title: 'Tom and Jerry',
    author: 'Fred Wimbfrey',
    category: 'Animation',
    // id: uuidv4(),
  },
  {
    title: 'Tom and Jerry part 2',
    author: 'Fred Wimbfrey',
    category: 'Animation',
    // id: uuidv4(),
  },
  {
    title: 'Tom and Jerry part 3',
    author: 'Fred Wimbfrey',
    category: 'Animation',
    // id: uuidv4(),
  },
];

const addRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.book.id),
      ];
    case LOAD_API:
      return [
        ...state,
        ...action.bookList,
      ];
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const loadAPI = (bookList) => ({
  type: LOAD_API,
  bookList,
});

export const loadBookThunk = () => (() => (
  fetch(`${baseURL}books`)
    .then((response) => response.json())
    .then((data) => loadAPI(Object.values(data).map((book) => book[0])))
));

export default addRemoveReducer;
