import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddForm';
import { loadBookThunk } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);

  const load = useDispatch();

  useEffect(() => {
    load(loadBookThunk());
  }, [load]);

  return (
    <div className="container">
      {
        books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.id}
          />
        ))
      }
      <AddBook />
    </div>
  );
};

export default Books;
