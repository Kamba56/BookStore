import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import AddBook from './AddForm';
// import { loadBookThunk } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);

  // const load = useDispatch();

  // useEffect(load(loadBookThunk()), []);

  return (
    <div>
      {
        books.map((book) => (
          <Book key={uuidv4()} title={book.title} author={book.author} category={book.category} />
        ))
      }
      <AddBook />
    </div>
  );
};

export default Books;
