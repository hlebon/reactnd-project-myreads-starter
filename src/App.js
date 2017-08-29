import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ListBooks from './shelf_page/ListBooks';
import SearchBooks from './search_page/SearchBooks';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/search" component={() => (
            <SearchBooks/>
          )}/>
          <Route exact path="/" component={() => (
            <ListBooks/>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
