import React from 'react';
import Book from './Book';
import AddBook from './AddForm';

class Books extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [
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
      ],
    };
  }

  render = () => {
    const { books } = this.state;
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
}

export default Books;
