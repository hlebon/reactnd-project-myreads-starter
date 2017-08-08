import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from "../shelf_page/Shelf"
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component{

  state = {
    query: "",
    allBooks: []
  }

  getBooksBy(filter){
    if(filter){
      BooksAPI.search(filter,20).then((allBooks)=>{
        console.log(allBooks);
        if(allBooks.error){
          this.setState({ allBooks });
        }else{
          this.setState({ allBooks: [] });
        }
      })
    }else{
      this.setState({ allBooks: [] });
    }
    
  }

  searchQuery = (query) => {
    this.setState({query: query.trim()});
    this.getBooksBy(query);
  }

  render(){
    const books = this.state.allBooks;
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
                <Shelf books={books} title={""}/>
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks;