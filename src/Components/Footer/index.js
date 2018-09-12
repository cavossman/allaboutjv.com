import React, { Component } from 'react';

import './footer.css';

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

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <ul>
            {
              menuItems.map((item, index) => {
                return <a href={ item.link } key={ index }><li>{ item.title }</li></a>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Footer;
