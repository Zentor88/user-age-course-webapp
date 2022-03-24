import React, { useState } from "react";
import "./InputForm.css";
import ErrorModal from './UI/ErrorModal';
import Card from "./UI/Card";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (positive numbers)."
      })
    }
    
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
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
          value={enteredName}
          onChange={nameChangeHandler}
          type="text"
        />
        <label htmlFor="age" className="label">
          Age (Years):
        </label>
        <input
          id="age"
          className="input"
          value={enteredAge}
          onChange={ageChangeHandler}
          type="number"
          step="1"
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
