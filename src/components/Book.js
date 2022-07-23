import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, removeBookThunk } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, category, id,
  } = props;
  const books = useSelector((state) => state.books);

  const del = useDispatch();
  const handleClick = () => {
    del(removeBook(books.find((book) => book.id === id)));
    del(removeBookThunk(id));
  };
  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <p>{category}</p>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <div className="action-buttons">
            <button type="button">Comments</button>
            <button type="button" onClick={handleClick}>
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div>
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
            </div>
            <div>
              <button className="primary-button" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
