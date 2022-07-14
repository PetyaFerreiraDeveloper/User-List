import { useEffect, useState } from "react";

import * as userService from "./services/userService";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/search-bar/SearchBar";
import UserList from "./components/user/UserList";
import UserCreate from "./components/user/UserCreate";

function App() {
  const [users, setUsers] = useState([]);
  const [addUser, setAddUser] = useState(false)

  useEffect(() => {
    userService.getAll().then((users) => setUsers(users));
  }, []);

const userCreateHandler = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const {firstName, lastName, email, phoneNumber, imageUrl, ...address} = Object.fromEntries(formData);
  const userData = {firstName, lastName, email, phoneNumber, imageUrl, address};

  userService.create(userData)
    .then((user) => {
      setUsers(state => [...state, user])
      setAddUser(false);
    })
} 

  return (
    <div>
      <Header />
      <main className="main">
        <section className="card users-container">
          <SearchBar />

          <UserList users={users} />
        </section>
        <button className="btn-add btn" onClick={() => setAddUser(true)}>Add new user</button>
        {addUser && <UserCreate closeModal={() => setAddUser(false)} onUserCreate={userCreateHandler} />}
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
