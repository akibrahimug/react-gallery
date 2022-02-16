import React, { Component } from 'react';
import Items from './components/items';
// import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Config from "./components/config";
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom"

class App extends Component {
  state = {
    data: [],
  }

  fetchData = async(searchTerm) => {
    try{
      const data = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&user_id=&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      const response = await data.data;
      this.setState({data: response})
    }catch(error){
      console.log('Sorry something went wrong with the request')
    }
    
  }

  render () {
    return (
      <Router>
      <div className="contanier">
        <SearchBar onSearch={this.fetchData}/>
        <Items />
      </div>
      </Router>
    );
  }
  
}

export default App;
