// import `useEffect` from react
import React, { useState, useEffect } from 'react';
import UserItem from './User/UserItem';
import UserForm from './User/UserForm';

function App() {
  const users = [
    {
      id: 1,
      name: "name1",
      location: "location1",
      followers: 46,
      following: 54
    },
    {
      id: 2,
      name: "name2",
      location: "location2",
      followers: 100,
      following: 1
    }
  ];

  const [userName, setUserName] = useState("");

  useEffect(()=> {
    // In the anonymous function of the useEffect parameter, store an item called “UserName” to the local storage (Hint: Use `localStorage` and `setItem`)
    localStorage.setItem("userName", userName)
    // In the dependencies array of useEffect, use `userName`, one of the states of the component.
  }, [userName]);

  const handleUserNameChange = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };

  return (
    <div className="App">
      <h1>Users</h1>

      <UserForm
        userName={userName}
        handleUserNameChange={handleUserNameChange}
      />

      <hr />

      <UserItem users={users} />
    </div>
  );
}

export default App;