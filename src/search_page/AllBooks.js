import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AllBooks extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
        onSearchBook: PropTypes.func.isRequired
    }

    state = {
      value: ""
    }

    handleChange = (event, book) => {
      this.props.onUpdateBook(event.target.value, book);
      this.setState({value: event.target.value});
    };

    render(){
        const books = this.props.books;

        return (
        <div className="bookshelf">
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map( book => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${(book.imageLinks)?book.imageLinks.smallThumbnail:"https://fakeimg.pl/128x192/"})`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.handleChange(event, book)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>  
                    ) )}
                  </ol>
                </div>
              </div>
        );
    }
}


AllBooks.PropTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  onSearchBook: PropTypes.func.isRequired
}

export default AllBooks;
