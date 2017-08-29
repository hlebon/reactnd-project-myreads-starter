import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'
import * as BooksAPI from '../common/BooksAPI';

class ListBooks extends Component{

    state = {
      allBooks: []
    }

    componentDidMount(){
      BooksAPI.getAll().then((allBooks) => {
        this.setState( { allBooks: allBooks } );
      });
    }

    updateBook = (shelf, book) => {
      BooksAPI.update(book, shelf);
      this.relocateBook(book);
    }

    relocateBook = (oldBook) => {
      BooksAPI.get(oldBook.id).then((book) => {
        this.state.allBooks.splice(this.state.allBooks.indexOf(oldBook), 1);
        this.setState(state => ({
          allBooks: state.allBooks.concat([book]),
        }));
      })
    }

    render(){
        const allBooks = this.state.allBooks;

        const currentlyReading = allBooks.filter( ( book => book.shelf === 'currentlyReading' ))
        const read = allBooks.filter( ( book => book.shelf === 'read' ) )
        const wantToRead = allBooks.filter( ( book => book.shelf === 'wantToRead' ) )

        return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf books={currentlyReading} title={"Currently reading"} onUpdateBook={this.updateBook}/>
              <Shelf books={wantToRead} title={"Want to read"} onUpdateBook={this.updateBook}/>
              <Shelf books={read} title={"Read"} onUpdateBook={this.updateBook}/>
            </div>
          </div>
          <div className="open-search">
              <Link to="/search">Add book</Link>
          </div>
        </div>
        )
    }
}

export default ListBooks;