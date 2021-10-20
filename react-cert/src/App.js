import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Router>
        <div className="">
          <Switch>
            <Route path="/Categories" component={Categories} />
            <Route path="/Jokes" component={Jokes} />
            <Route path="/Search" component={Search} />
            <Route exact path="/"  component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
