import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { v4 as uuidv4 } from 'uuid';
// import { uuid } from 'uuidv4';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const initialInputs = {
    author: '',
    title: '',
    id: uuidv4(),
  };

  const [values, setValues] = useState(initialInputs);

  const authorChange = (e) => {
    const newValue = {
      ...values,
      author: e.target.value,
    };
    setValues(newValue);
  };

  const titleChange = (e) => {
    const newValue = {
      ...values,
      title: e.target.value,
    };
    setValues(newValue);
  };

  const add = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    add(addBook(values));
    e.target.reset();
  };

  return (
    <div>
      <h2>Add new Book</h2>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Add Book" onChange={titleChange} required />
        <input type="text" placeholder="Author" onChange={authorChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
