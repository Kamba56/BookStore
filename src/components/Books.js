import React, { useState } from 'react';
import Book from './Book';
import AddBook from './AddForm';

const Books = () => {
  const bookList = [
    {
      title: 'Tom and Jerry',
      author: 'Fred Wimbfrey',
      id: 1,
    },
    {
      title: 'Tom and Jerry',
      author: 'Fred Wimbfrey',
      id: 2,
    },
    {
      title: 'Tom and Jerry',
      author: 'Fred Wimbfrey',
      id: 3,
    },
  ];

  const [books] = useState(bookList);

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
