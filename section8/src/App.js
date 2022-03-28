import logo from './logo.svg';
import './App.css';
import ErrorModel from './components/UI/ErrorModel';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';
import PortalDemo from './components/Users/PortalDemo';
import RefDemo from './components/Users/RefDemo';
import RefDemoList from './components/Users/RefDemoList';

function App() {

  const [userList, setUserList] = useState([])

  const addUserHandler = (uname, uage) => {
    setUserList((prevUserList) => {
      return [...userList, { name: uname, age: uage, id: Math.random() }]
    })
  }


  const [list, Setlist] = useState([])
  const listHandler = (text) => {
    Setlist(() => { return [...list, { text: text, id: Math.random() }] })
  }


  const [listRef, SetListRef] = useState([])
  const listHandlerRef = (inputVal) => {
    SetListRef(() => { return [...listRef, { inputVal: inputVal, id: Math.random() }] })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
      <PortalDemo />
      <RefDemo CtoP={listHandler} CtoPRef={listHandlerRef} />
      <RefDemoList lists={list} listRefs={listRef} />
    </div>

  );
}

export default App;











