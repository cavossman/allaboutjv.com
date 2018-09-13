import React, { Component } from 'react';
import axios from 'axios';

import './instagram.css';

const USER = '1462524560';

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: '',
      data: {}
    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="instagram">
        
      </div>
    );
  }
}
export default Instagram;
