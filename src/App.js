import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class App extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    allBooks: PropTypes.array.isRequired
  }

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

App.PropTypes = {
    books: PropTypes.array.isRequired,
    allBooks: PropTypes.array.isRequired
}

export default App;
