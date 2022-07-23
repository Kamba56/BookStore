import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { v4 as uuidv4 } from 'uuid';
import { addBook, addBookThunk } from '../redux/books/books';

const AddBook = () => {
  const initialInputs = {
    author: '',
    title: '',
    category: '',
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

  const catChange = (e) => {
    const newValue = {
      ...values,
      category: e.target.value,
    };
    setValues(newValue);
  };

  const add = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    add(addBook(values));
    add(addBookThunk(values));
    e.target.reset();
  };

  return (
    <div>
      <h2>Add new Book</h2>
      <form onSubmit={handleClick} className="add-form">
        <input className="input" type="text" placeholder="Add Book" onChange={titleChange} required />
        <input className="input" type="text" placeholder="Author" onChange={authorChange} required />
        <input className="input" type="text" placeholder="Category" onChange={catChange} required />
        <button type="submit" className="primary-button">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
