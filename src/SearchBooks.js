import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from "escape-string-regexp";

class SearchBooks extends Component{
  static PropTypes = {
    allBooks: PropTypes.array.isRequired
  }

  state = {
    query: ""
  }



  searchQuery = (query) => {
    this.setState({query: query.trim()})
  }

  render(){
    const {books} = this.props.allBooks;
    const {query} = this.state.query;

    let showingBooks;
    if(query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i'); //"i" - ignore case
      showingBooks = books.filter((book)=>match.test(book.name || book.title))
    }

    showingBooks.sortBy('title');
    
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
                <input onChange={(event)=>{this.searchQuery(event.target.value)}} type="text" placeholder="Search by title or author"/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

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