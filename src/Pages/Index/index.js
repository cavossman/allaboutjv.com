import React, { Component } from 'react';
import Fancybox from '../../Components/Fancybox';

import './index.css';

import lainey from '../../images/photos/lainey-sunflower1.jpg';
import sunflower_sunset from '../../images/photos/sunflower-sunset.jpg';
import jamaica from '../../images/photos/jamaica-beach.jpg';

const photos = [
                  lainey,
                  sunflower_sunset,
                  jamaica
               ];

class Index extends Component {
  render() {
    return (
      <div className="page homepage">
        <section className="homepage-background">
          <div className="hero-image"></div>
        </section>
        <section className="music-section">
          <div className="container">
            <h3>Music</h3>
          </div>
        </section>
        <section className="photos-section">
          <div className="container">
            <h3>Featured Photos</h3>
            {
              photos.map((photo, index) =>
                <Fancybox key={index} image={photo} />
              )
            }
          </div>
        </section>
        <section className="book-section">
          <div className="container">
            <h3>Book</h3>
          </div>
        </section>
      </div>
    );
  }
}
export default Index;
