import React, { Component } from 'react';
import Items from './components/items';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import {BrowserRouter as Router, Route} from "react-router-dom"

class App extends Component {
  render () {
    return (
      <Router>
      <div className="contanier">
        <SearchBar />
        <Route path="/" exact component={Nav}/> 
        <Items />
      </div>
      </Router>
    );
  }
  
}

export default App;
