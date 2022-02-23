import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createClient, Provider } from "urql";
import { Provider as JotaiProvider } from 'jotai'
import "./App.css";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import Search from "./components/Search";
import env from '../.env.json'

const client = createClient({
  url: "https://evolved-newt-21.hasura.app/v1/graphql",
  fetchOptions: {
    headers: {
    },
  },
});


//# routing
function App() {
  return (
    <div>
      <JotaiProvider>
        <Provider value={client}>
          <Router>
            <div className="mainBackground">
              <Switch>
                <Route path="/Categories" component={Categories} />
                <Route path="/Jokes" component={Jokes} />
                <Route path="/Search" component={Search} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </JotaiProvider>
    </div>
  );
}

export default App;
