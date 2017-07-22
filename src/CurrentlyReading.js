import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentlyReading extends Component{
    static propTypes = {
        leyendo: PropTypes.array.isRquired
    }

    render(){
        const leyendo = this.props.leyendo;

        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Leyendo</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {leyendo.map( book => (
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

CurrentlyReading.PropTypes = {
    leyendo: PropTypes.array.isRquired
}

export default CurrentlyReading;
