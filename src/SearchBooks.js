import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from "./Shelf"
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component{
  static PropTypes = {
    allBooks: PropTypes.array.isRequired
  }

  state = {
    query: "",
    allBooks: []
  }

  getBooksBy(filter){
    BooksAPI.search(filter,20).then((allBooks)=>{
      this.setState({ allBooks });
    })
  }

  searchQuery = (query) => {
    this.setState({query: query.trim()});
    console.log(query);
    this.getBooksBy(query);
  }

  render(){
    console.log(this.state);
    const books = (!this.state.allBooks) ? []: this.state.allBooks;
    console.log("books");
    console.log(books);

    //showingBooks.sortBy('title');
    //console.log(showingBooks);
    
     return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                 value={this.state.query} onChange={(event)=>{this.searchQuery(event.target.value)}}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <Shelf libros={books} title={""}/>
              </ol>
            </div>
          </div>
        )
    }
}

SearchBooks.PropTypes = {
    allBooks: PropTypes.array.isRequired
}

export default SearchBooks;