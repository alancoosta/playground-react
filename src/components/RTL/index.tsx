import { useEffect, useState } from "react";

import axios from "axios";

import { User } from "./types";

export const RTL = () => {
  const [users, setUsers] = useState([]);

  function formatUserName(username: string) {
    return `@${username}`;
  }

  useEffect(() => {
    let mounted = true;

    const getUsers = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      if (mounted) {
        setUsers(response.data);
      }
    };

    getUsers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <h1>
      {" "}
      <div className="App">
        <div>Users:</div>
        {users.length ? (
          <ul data-testid="user-list">
            {users.map((user: User) => (
              <li key={user.id} className="user" data-testid="user-item">
                <span>{user.name}</span> (<span>{formatUserName(user.username)}</span>)
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading users...</div>
        )}
      </div>
    </h1>
  );
};
