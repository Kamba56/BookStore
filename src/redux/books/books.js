import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Tom and Jerry',
    author: 'Fred Wimbfrey',
    id: uuidv4(),
  },
  {
    title: 'Tom and Jerry part 2',
    author: 'Fred Wimbfrey',
    id: uuidv4(),
  },
  {
    title: 'Tom and Jerry part 3',
    author: 'Fred Wimbfrey',
    id: uuidv4(),
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

export default addRemoveReducer;
