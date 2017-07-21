import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState( { books } );
    })
  }

  render() {

    let leyendo = this.state.books.filter( ( book => book.shelf === 'currentlyReading' ))
    let leidos = this.state.books.filter( ( book => book.shelf === 'read' ) )
    let quieroLeer = this.state.books.filter( ( book => book.shelf === 'wantToRead' ) )
    

    return (
      <div className="App">
        <div className="list-books">
          <div className="list-books-title">
            <h1>Mis Lecturas</h1>
          </div>
          <div className="list-books-content">
            <div>
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
               <div className="bookshelf">
                <h2 className="bookshelf-title">Leyendo</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {quieroLeer.map( book => (
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
               <div className="bookshelf">
                <h2 className="bookshelf-title">Leidos</h2>
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
            </div>
          </div>
          <div className="open-search">
              <a>Add a book</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
