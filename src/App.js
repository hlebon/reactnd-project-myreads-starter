import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './shelf_page/ListBooks';
import SearchBooks from './search_page/SearchBooks';
import './App.css';

class App extends Component {

  state = {
    allBooks: [],
    bookToUpdate: "" 
  }

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState( { allBooks } );
    });
  }

  updateBook = (shelf, book) => {
      BooksAPI.update(book, shelf);
      this.renderPage(book.id, book);
    }


  renderPage = (bookId, oldBook) => {
    BooksAPI.get(bookId).then((book) => {
      this.state.allBooks.splice(this.state.allBooks.indexOf(oldBook), 1);
      this.setState(state => ({
          allBooks: state.allBooks.concat([book])
      }));
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/search" component={() => (
            <SearchBooks onUpdateBook={this.updateBook} />
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
