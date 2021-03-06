import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Read extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    handleChange = (event, book) => {
      this.props.onUpdateBook(event.target.value, book);
    };

    render(){
      const { books, title } = this.props;

      return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map( book => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${(book.imageLinks)?book.imageLinks.smallThumbnail:"https://fakeimg.pl/128x192/"})`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.handleChange(event, book)}>
                                <option value="none">Move to...</option>
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

export default Read;
