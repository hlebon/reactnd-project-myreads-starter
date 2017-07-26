import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import Shelf from './Shelf'
import PropTypes from 'prop-types';

class ListBooks extends Component{
    static propTypes = {
        books: PropTypes.array.isRquired
    }
    
    render(){
        const books = this.props.books;

        const leyendo = books.filter( ( book => book.shelf === 'currentlyReading' ))
        const leidos = books.filter( ( book => book.shelf === 'read' ) )
        const quieroLeer = books.filter( ( book => book.shelf === 'wantToRead' ) )
        return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>Mis Lecturas</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf libros={leyendo} title={"Leyendo"}/>
              <Shelf libros={quieroLeer} title={"Quiero Leer"}/>
              <Shelf libros={leidos} title={"Leidos"}/>
            </div>
          </div>
          <div className="open-search">
              <Link to="/search">Add book</Link>
          </div>
        </div>
        )
    }
}

ListBooks.PropTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks;