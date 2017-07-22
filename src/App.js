import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState( { books } );
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/search" component={() => (
            <SearchBooks/>
          )}/>
          <Route exact path="/" component={() => (
            <ListBooks books={this.state.books}/>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
