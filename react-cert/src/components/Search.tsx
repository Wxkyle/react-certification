import React from "react";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";

class Search extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {


    return (
      <div>
        <Navbar loggedIn></Navbar>
        <div className="background">
          <div className="test">
            <h1>Search</h1>
            <div className="login">
              <input
                data-testid="searchBar"
                onChange={(e) => {
                  this.setState({value: e.target.value})
                }}
                className="emailFormInput"
                placeholder="search"
              ></input>
              <button
                onClick={() => {
                  this.setState(this.state)
                }}
              >
                Search
              </button>
            </div>
            <SearchResults searchBar={this.state}></SearchResults>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
