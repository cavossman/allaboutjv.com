import React, { Component } from 'react';

import './life.css';

const posts = [
  {
    'title': 'Welcome!',
    'body': 'Welcome to my website.  Currently the website is still being built out but I will be posting to this website regularly with new pictures, music, poetry and eventually updates on the book that I\'m writing.  Take a look around and come back soon for more updates.',
    'date': 'September 18th, 2018'
  }
];

class Life extends Component {
  render() {
    return (
      <div className="page life-page">
        {
          posts.map((post, index) => {
            return (
              <div className="post" key={index}>
                <h3>{post.title}</h3>
                <span>{post.date}</span>
                <div className="post-body" dangerouslySetInnerHTML={{__html: post.body}}></div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default Life;
