import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Config from "./components/config";
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import ItemsList from './components/ItemsList';
import NotFound from "./components/NotFound";
// import NavItems from "./components/NavItems"
import Nav from "./components/Nav"

class App extends Component {
  state = {
    data: [],
    value: '',
  }

  fetchData = async(searchTerm) => {
    try{
      const data = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&user_id=&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      const response = await data.data;
      this.setState({
        data: response.photos.photo,
        value: searchTerm
      })
    }catch(error){
      console.log('Sorry something went wrong with the request')
    }
    
  }

  // componentDidMount() {
  //   this.fetchData("cat")
  // }


  render () {
    
    return (
      <Router>
      
      <div className="contanier">
        <SearchBar onSearch={this.fetchData}/>
        <Nav onSearch={this.fetchData} value={this.state.value}/>
        <Switch>
        <Route  exact path="/">
          <Redirect to="/search/bikes"/> 
        </Route>
        <Route  exact path="/search/:name" render={props => (
          <ItemsList 
          firstMount={this.fetchData} 
          data={this.state.data} 
          value={this.state.value} 
            {...props}
          /> 
        )}
        />
        <Route component={NotFound}/>
        </Switch>
      </div>
      </Router>
    );
  }
  
}

export default App;
