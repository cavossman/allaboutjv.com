import React, { Component } from 'react';

import './header.css';

import mmenu_button from '../../images/hamburger.svg';

const menuItems = [
                    {
                      'title': 'Photos',
                      'link': '/photos'
                    },
                    {
                      'title': 'Music',
                      'link': '/music'
                    },
                    {
                      'title': 'Life',
                      'link': '/life'
                    },
                    {
                      'title': 'Poetry',
                      'link': '/poetry'
                    },
                    {
                      'title': 'Book',
                      'link': '/book'
                    }
                  ];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mm_open: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({'mm_open': !this.state.mm_open});
  }

  render() {
    return (
      <div className="header">
        <a href="/">
          <div className="website-title">Jenny Vossman</div>
        </a>
        <nav className="header-nav">
          <ul>
            {
              menuItems.map((item) => {
                return <a href={ item.link }><li>{ item.title }</li></a>;
              })
            }
          </ul>
        </nav>
        <nav className="header-nav-mobile">
          <div className="hamburger" onClick={ this.toggleMenu }>
            <img src={ mmenu_button } alt="" />
          </div>
          { this.state.mm_open &&
            <ul>
              {
                menuItems.map((item) => {
                  return <a href={ item.link }><li className="header-nav-mobile-li">{ item.title }</li></a>;
                })
              }
            </ul>
          }
        </nav>
      </div>
    );
  }
}
export default Header;
