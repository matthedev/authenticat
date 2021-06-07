import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Redirect } from "react-router";
import "./dashboard.module.css"
import NavBar from '../../components/nav/nav'

export default function App({history}) {
  if(!localStorage.token) {
    history.push("/")
  }

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
     try {
      const {data: {data}} = await axios("https://reqres.in/api/users/");
      console.log('data', data)
      setUsers(data);
     } catch (err) {
       console.log('Error::', err)
     }
    };
    fetchData();
  }, []);

  const onSortByName = () => {
  const usersToBeSorted = [...users]
   const sortedUsers =  usersToBeSorted.sort((a,b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
   setUsers(sortedUsers)
  }

 
  
  return (
    <div className="App">
      <NavBar />
      <h1>Users</h1>
      <button className='srt-btn' onClick={onSortByName}>
        Sort by name
      </button>

      
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