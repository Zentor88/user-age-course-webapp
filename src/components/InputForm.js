import React, { useState, useRef } from "react";
import "./InputForm.css";
import ErrorModal from './UI/ErrorModal';
import Card from "./UI/Card";

const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (positive numbers)."
      })
    }
    
    props.onAddUser(enteredUsername, enteredUserAge);
    nameInputRef.current.value ='';
    ageInputRef.current.value = '';
  };


  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="username" className="label">
          Username:
        </label>
        <input
          id="username"
          className="input"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age" className="label">
          Age (Years):
        </label>
        <input
          id="age"
          className="input"
          type="number"
          step="1"
          ref={ageInputRef}
        />
        <button className="button" type="submit">
          Add New User
        </button>
      </form>
    </Card>
    </div>
  );
};
export default InputForm;
