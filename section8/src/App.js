import logo from './logo.svg';
import './App.css';
import ErrorModel from './components/UI/ErrorModel';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {

  const [userList,setUserList]= useState([])

  const addUserHandler = (uname,uage) => {
    setUserList((prevUserList) => { return [...prevUserList,{name: uname,age: uage,id: Math.random()}]
  })
  }


  return (
    <div className="App">
     <AddUser onAddUser={addUserHandler}/>
     <UserList users={userList}/>
    </div>
  );
}

export default App;
