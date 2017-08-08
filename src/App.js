import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import ListBooks from './shelf_page/ListBooks';
import SearchBooks from './search_page/SearchBooks';
import './App.css';

class App extends Component {

  state = {
    allBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState( { allBooks } );
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      console.log("Libro actualizado");
      console.log(book);
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
            <ListBooks allBooks={this.state.allBooks} onUpdateBook={this.updateBook}/>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
