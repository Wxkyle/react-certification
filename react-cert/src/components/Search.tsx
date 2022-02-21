import React from "react";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";


//# class component
class Search extends React.Component {
  constructor() {
    super({})
    //# state
    //# lifecycle method
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

                  //# this.
                  this.setState({ value: e.target.value })
                }}
                className="emailFormInput"
                placeholder="search"
              ></input>
              <button
                data-testid="searchBarButton"
                onClick={() => {
                  this.setState(this.state)
                }}
              >
                Search
              </button>
            </div>

            <SearchResults data-testid="searchResults" searchBar={this.state}></SearchResults>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
