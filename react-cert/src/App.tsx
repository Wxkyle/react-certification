import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider, createClient } from "urql";
import "./App.css";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import Search from "./components/Search";

import { ReactGraphqlProvider } from "@tesseractcollective/react-graphql";
import {
  ReactGraphqlUIContext,
  PrimeReactDefaultComponents,
} from "@tesseractcollective/react-graphql-ui";
import { HasuraConfig } from "./hasura/hasuraConfig";

const client = createClient({
  url: "https://evolved-newt-21.hasura.app/v1/graphql",
  fetchOptions: {
    headers: {
      "x-hasura-admin-secret":
        "bcDLzO5MsB6ZO7oPyjt0oGLEZNPOqw4s8e4q159ipG1uy1QnLV6joLcb9sleVGbj",
    },
  },
});

{
  /* <ReactGraphqlUIContext.Provider
value={{
  defaultComponents: PrimeReactDefaultComponents,
  configsMap: HasuraConfig,
}}
> */
}

function App() {
  return (
    <div>
      <Provider value={client}>
        <Router>
          <div className="">
            <Switch>
              <Route path="/Categories" component={Categories} />
              <Route path="/Jokes" component={Jokes} />
              <Route path="/Search" component={Search} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
