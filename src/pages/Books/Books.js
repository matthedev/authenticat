import React, {useEffect, useState} from "react";
import NavBar from '../../components/nav/nav'
import { Redirect } from "react-router";

export default function App({history}) {
  if(!localStorage.token) {
    history.push("/")
  }


  const [books, setBooks] = useState([]);

  const f = async () => {
    const res = await fetch(`https://fakerapi.it/api/v1/books?_quantity=10`);
    const json = await res.json();
    console.log(json.data)
    setBooks(json.data);
  };
  useEffect(() => {
    f();
  }, []);


const onSortByDateAsc = () => {
  const booksToBeSorted = [...books]
  const sortedBooks =  booksToBeSorted.sort((a,b) => {
    const yearA = a.published.split("-")[0]
    const yearB = b.published.split("-")[0]
    return   (yearA > yearB) ? 1 : ((yearB > yearA) ? -1 : 0)
  })
  setBooks(sortedBooks)

}

const onSortByDateDesc = () => {
  const booksToBeSorted = [...books]
  const sortedBooks =  booksToBeSorted.sort((a,b) => {
    const yearA = a.published.split("-")[0]
    const yearB = b.published.split("-")[0]
    return   (yearB > yearA) ? 1 : ((yearA > yearB) ? -1 : 0)
  })
  setBooks(sortedBooks)

}

 
  
  return (
  
    <div className="App">
      <NavBar />
      <h1>books</h1>
      <button onClick={onSortByDateAsc}>Sort by published year {`>`}</button>
      <button onClick={onSortByDateDesc}>Sort by published year {`<`}</button>
      <div className="flexx">
        {books.length &&
          books.map((b) => {
            return (
              <div key={b.title}>
                <p>
                  <strong>{b.author}</strong>
                </p>
                <p>{b.genre}</p>
                <img key={b.image} src={b.image} alt="pic"/>
                <p>{b.description}</p>
                <p>{b.published}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}