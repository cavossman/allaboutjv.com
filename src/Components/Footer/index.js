import React, { Component } from 'react';

import './footer.css';

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

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <ul>
            {
              menuItems.map((item) => {
                return <a href={ item.link }><li>{ item.title }</li></a>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Footer;
