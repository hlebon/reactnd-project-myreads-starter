import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AllBooks from "./AllBooks"
import * as BooksAPI from '../common/BooksAPI';

class SearchBooks extends Component{

  state = {
    value: "",
    books: [],
    shelfBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState( { shelfBooks: allBooks } );
    });
  }

  relocateBook = (oldBook) => {
    BooksAPI.get(oldBook.id).then((book) => {
      this.state.shelfBooks.splice(this.state.shelfBooks.indexOf(oldBook), 1);
      this.setState(state => ({
        shelfBooks: state.shelfBooks.concat([book]),
      }));
    })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    this.searchBook(this.state.value);
  }

  searchBook = (value) => {
    if(value){
      setTimeout(() => {
        BooksAPI.search(value,20).then((allBooks)=>{
            if(!allBooks.error && value !== ""){
              this.setState({ books: allBooks });
            }else if(value === ""){
              this.setState({ books: [] });
            }
        });
      }, 0);
    }
  }

  updateBook = (shelf, book) => {
    BooksAPI.update(book, shelf);
    this.relocateBook(book);
  }

  render(){
    const books = this.state.books;
    const shelfBooks = this.state.shelfBooks;
    let BooksList = [];


    //if there is any shelf's book in the api response
    //add it to the list of books to show.
    if(books.length > 0){
      BooksList = books.map((book) => { 
        let nbook;
        shelfBooks.forEach((shelfBook) => {
          if(book.id === shelfBook.id){
            nbook = shelfBook;
          }
        });
        if(nbook){
          return nbook;
        }else{
          book.shelf = "none";
          return book;
        }
      });
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                       value={this.state.value} 
                       onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <AllBooks books={BooksList} 
                          onUpdateBook={this.updateBook}
                />
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks;