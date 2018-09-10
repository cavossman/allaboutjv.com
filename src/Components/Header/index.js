import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mm_open: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({'mm_open': !this.state.mm_open});
  }

  render() {
    return (
      <div className="header">
        <div className="website-title">Jenny Vossman</div>
        <nav className="header-nav">
          <ul>
            <li>Photos</li>
            <li>Music</li>
            <li>Life</li>
            <li>Poetry</li>
            <li>Book</li>
          </ul>
        </nav>
        <nav className="header-nav-mobile">
          <div className="hamburger" onClick={ this.toggleMenu }>|||</div>
          { this.state.mm_open && <span>testing</span> }
          <ul>
            <li>Photos</li>
            <li>Music</li>
            <li>Life</li>
            <li>Poetry</li>
            <li>Book</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
