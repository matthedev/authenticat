import * as React from "react";
import { Redirect } from "react-router";
import "./dashboard.module.css"

export default function App({history}) {
  if(!localStorage.token) {
    history.push("/")
  }

  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);



 
  
  return (
      
    <div className="App">
      <h1>Users</h1>
      <div className="flexx">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} alt="pic"/>
              </div>
            );
          })}
      </div>
    </div>
  );
}