import React, { Component } from 'react';
import axios from 'axios';

import './poetry.css';

class Poetry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.allaboutjv.com/api/v1/poems')
      .then((res) => {
        this.setState({poems: res.data});
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  //TODO: make into slideshow
  render() {
    const poems = this.state.poems;
    return (
      <div className="page poetry-page">
      {
        poems.map((poem, index) => {
          return (
            <div className='poem' key={index}>
              <h3>{poem.title}</h3>
              <div className="poem-body" dangerouslySetInnerHTML={{__html: poem.body}}></div>
              <h3>{'-JV'}</h3>
            </div>
          )
        })
      }
      
      </div>
    );
  }
}
export default Poetry;
