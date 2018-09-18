import React, { Component } from 'react';

import './book.css';

import cover from '../../images/youngers.png';

class Book extends Component {
  render() {
    return (
      <div className="page book-page">
        <div className="container text-center">
          <img className="text-center" src={cover} alt="The Youngers book cover" style={{maxWidth: '100%'}}/>
          <p>{'Currently in the process of being written and edited.-- More updates to follow.'}</p>
        </div>
      </div>
    );
  }
}
export default Book;
