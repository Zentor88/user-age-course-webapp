import React, { useState } from "react";
import InputForm from "./components/InputForm";
import EnteredUsers from "./components/EnteredUsers";


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <InputForm onAddUser={addUserHandler} />
      <EnteredUsers users={usersList} />
    </div>
  );
}
export default App;
