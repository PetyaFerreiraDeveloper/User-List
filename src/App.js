import { useEffect, useState } from "react";

import * as userService from "./services/userService";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/search-bar/SearchBar";
import UserList from "./components/user/UserList";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
    .then(users => setUsers(users));
  }, []);

  console.log(users);

  return (
    <div>
      <Header />
      <main className="main">
        <section className="card users-container">
          <SearchBar />

          <UserList users={users} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
