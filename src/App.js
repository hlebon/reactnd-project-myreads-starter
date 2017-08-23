import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import * as BooksAPI from './common/BooksAPI';
import ListBooks from './shelf_page/ListBooks';
import SearchBooks from './search_page/SearchBooks';
import './App.css';

class App extends Component {

  state = {
    allBooks: [],
    searchBooks: ""
  }

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState( { allBooks } );
    });
  }

  updateBook = (shelf, book, keyword) => {
      BooksAPI.update(book, shelf);
      this.renderPage(book.id, book, keyword);
  }


  renderPage = (bookId, oldBook, keyword) => {
    BooksAPI.get(bookId).then((book) => {
      this.state.allBooks.splice(this.state.allBooks.indexOf(oldBook), 1);
      this.setState(state => ({
          allBooks: state.allBooks.concat([book]),
      }));
      this.setState({ searchBooks: keyword })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/search" component={() => (
            <SearchBooks onUpdateBook={this.updateBook} shelfBooks={this.state.allBooks} keyword={this.state.searchBooks}/>
          )}/>
          <Route exact path="/" component={() => (
            <ListBooks allBooks={this.state.allBooks} 
              onUpdateBook={this.updateBook}/>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
