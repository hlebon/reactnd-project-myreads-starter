import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'
import PropTypes from 'prop-types';

class ListBooks extends Component{
    static PropTypes = {
        allBooks: PropTypes.array.isRquired,
        onUpdateBook: PropTypes.func.isRequired
    }

    updateBook = (shelf, book) => {
      this.props.onUpdateBook(shelf, book)
    }

    render(){
        const allBooks = this.props.allBooks;

        const leyendo = allBooks.filter( ( book => book.shelf === 'currentlyReading' ))
        const leidos = allBooks.filter( ( book => book.shelf === 'read' ) )
        const quieroLeer = allBooks.filter( ( book => book.shelf === 'wantToRead' ) )

        return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>Mis Lecturas</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf books={leyendo} title={"Leyendo"} onUpdateBook={this.updateBook}/>
              <Shelf books={quieroLeer} title={"Quiero Leer"} onUpdateBook={this.updateBook}/>
              <Shelf books={leidos} title={"Leidos"} onUpdateBook={this.updateBook}/>
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
  allBooks: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default ListBooks;