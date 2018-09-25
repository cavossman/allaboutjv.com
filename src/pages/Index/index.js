import React, { Component } from 'react';
import axios from 'axios';
import Fancybox from '../../components/Fancybox';

import './index.css';

import lainey from '../../images/photos/lainey-sunflower1.JPG';
import sunflower_sunset from '../../images/photos/sunflower-sunset.JPG';
import jamaica from '../../images/photos/jamaica-beach.jpg';

import cover from '../../images/youngers.png';

const photos = [
                  lainey,
                  sunflower_sunset,
                  jamaica
               ];


class Index extends Component {
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
      <div className="page homepage" style={{paddingTop: '0px'}}>
        <section className="homepage-background">
          <div className="hero-image"></div>
        </section>
        <section className="music-section">
          <div className="container">
            <h3>Music</h3>
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
            <a className="btn" href="https://www.instagram.com/singingjv/" rel="noopener noreferrer">
              Follow me on Instagram
            </a>
          </div>
        </section>
        <section className="photos-section">
          <div className="container">
            <h3>Featured Photos</h3>
            {
              photos.map((photo, index) =>
                <Fancybox uniqueClass={'featured-photos'} key={index} image={photo} height={'300px'} width={'300px'} />
              )
            }
            <br />
            <a className="btn" href="/photos">
              View More
            </a>
          </div>
        </section>
        <section className="book-section">
          <div className="container">
            <h3>Book</h3>
            <img src={cover} alt="The Youngers book cover" style={{maxWidth: '100%'}} />
            <p>{'Currently in the process of being written and edited. -- More updates to follow.'}</p>
          </div>
        </section>
      </div>
    );
  }
}
export default Index;
