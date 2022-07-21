import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Book from './Book';
import AddBook from './AddForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  // const [books] = useState(bookList);

  return (
    <div>
      {
        books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))
      }
      <AddBook />
    </div>
  );
};

export default Books;
