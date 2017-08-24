import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AllBooks from "./AllBooks"
import * as BooksAPI from '../common/BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component{
  static PropTypes = {
        onUpdateBook: PropTypes.func.isRequired
    }

  state = {
    query: "",
    allBooks: []
  }

  componentDidMount(){
    this.setState({ query: this.props.keyword });
    this.getBooksBy(this.props.keyword)
  }

  getBooksBy(filter){
      if(filter){
        setTimeout(() => {
          BooksAPI.search(filter,18).then((allBooks)=>{
              if(!allBooks.error && filter !== ""){
                this.setState({ allBooks });
              }else{
                this.setState({ allBooks: [] });
              }
          });
        }, 0);
      }else{
        this.setState({ allBooks: [] });
      }
  }

  updateBook = (shelf, book) => {
    let keyword = this.state.query;
    this.props.onUpdateBook(shelf, book, keyword)
  }

  searchQuery = (query) => {
    this.setState({query: query.trim()});
    this.getBooksBy(query);
  }

  render(){
    let books = this.state.allBooks;
    let shelfBooks = this.props.shelfBooks;
    let newListBook = []; 

    if(books.length > 0){
      newListBook = books.map((book) => { 
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
                 value={this.state.query} onChange={(event)=>{this.searchQuery(event.target.value)}}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <AllBooks books={newListBook} onSearchBook={this.getBooksBy} onUpdateBook={this.updateBook}/>
              </ol>
            </div>
          </div>
        )
    }
}

SearchBooks.PropTypes = {
  onUpdateBook: PropTypes.func.isRequired,
}

export default SearchBooks;