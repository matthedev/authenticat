import './App.css';
import { Switch, Route } from "react-router-dom";
import LogIn from "./pages/login/LogIn"
import Dashboard from "./pages/Dashboard/Dashboard"
import Books from "./pages/Books/Books"


function App() {
  return (
    <div>
      <Switch>
        <Route  path="/" exact component={LogIn}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/books" exact component={Books} />
      </Switch>

    </div>
  );
}

export default App;
