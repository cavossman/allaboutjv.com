import React, { Component } from 'react';
import axios from 'axios';

import './music.css';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/v1/music')
      .then((res) => {
        console.log(res.data);
        this.setState({songs: res.data});
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  render() {
    return (
      <div className="page music-page">
        {
          this.state.songs.map((song, index) => {
            return (
              <video controls key={index}>
                <source src={song.contentUrl} type="video/mp4" />
              </video>
            )
          })
        }
        <br />
        <a className="btn" href="https://www.instagram.com/singingjv/" target="_blank" rel="noopener noreferrer">
          Follow me on Instagram
        </a>
      </div>
    );
  }
}
export default Music;
