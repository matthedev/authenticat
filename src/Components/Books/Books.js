import * as React from "react";
import { Redirect } from "react-router";

export default function App() {


  const [books, setBooks] = React.useState([]);
  const f = async () => {
    const res = await fetch(`https://fakerapi.it/api/v1/books?_quantity=1`);
    const json = await res.json();
    setBooks(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);



 
  
  return (
      
    <div className="App">
      <h1>books</h1>
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