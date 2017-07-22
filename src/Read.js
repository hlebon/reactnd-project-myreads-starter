import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Read extends Component{
    static propTypes = {
        leidos: PropTypes.array.isRquired
    }

    render(){
        const leidos = this.props.leidos;

        return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">Quiero Leer</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {leidos.map( book => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select>
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


Read.PropTypes = {
  leidos: PropTypes.array.isRquired
}

export default Read;