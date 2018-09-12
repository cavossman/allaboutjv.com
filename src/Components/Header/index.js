import React, { Component } from 'react';

import './header.css';

import mmenu_button from '../../images/hamburger.svg';
import logo from '../../images/logo.png';

import Modal from '../../Components/Modal';
import ContactModal from '../../Components/ContactModal';

const menuItems = [
                    {
                      'title': 'Life',
                      'link': '/life',
                      'color': 'var(--colorPink)'
                    },
                    {
                      'title': 'Photos',
                      'link': '/photos',
                      'color': 'var(--colorYellow)'
                    },
                    {
                      'title': 'Music',
                      'link': '/music',
                      'color': 'var(--colorTeal)'
                    },
                    {
                      'title': 'Poetry',
                      'link': '/poetry',
                      'color': 'var(--colorBlue)'
                    },
                    {
                      'title': 'Book',
                      'link': '/book',
                      'color': 'var(--colorSilver)'
                    },
                    {
                      'title': 'Contact',
                      'color': '#000'
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
          <div className="website-logo">
            <img src={ logo } alt="" />
          </div>
        </a>
        <nav className="header-nav">
          <ul>
            {
              menuItems.map((item, index) => {
                return (
                  <a href={ item.link } key={ index }>
                    <li style={{borderColor: item.color}} onClick={ () => { return !item.link ? Modal.open('contact') : '' } }>
                      { item.title }
                    </li>
                  </a>
                );
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
                menuItems.map((item, index) => {
                  return <a href={ item.link } key={ index }><li className="header-nav-mobile-li">{ item.title }</li></a>;
                })
              }
            </ul>
          }
          <ContactModal />
        </nav>
      </div>
    );
  }
}
export default Header;
