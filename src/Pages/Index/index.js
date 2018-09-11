import React, { Component } from 'react';
import Fancybox from '../../Components/Fancybox';

import './index.css';

import cds from '../../images/homepage-bg.jpg';

const photos = [cds, cds, cds, cds, cds, cds, cds, cds, cds, cds, cds, cds];

class Index extends Component {
  render() {
    return (
      <div className="page homepage">
        <section className="homepage-background">
          <div className="hero-image tinted"></div>
          <div className="hero-overlay name">
            <h1 className="text-border">All About Jenny Vossman</h1>
          </div>
        </section>
        <section className="container about-section">
          <h3>About</h3>
        </section>
        <section className="container photos-section">
          <h3>Photos</h3>
          {
            photos.map((photo, index) =>
              <Fancybox key={index} image={photo} />
            )
          }
        </section>
        <section className="container life-section">
          <h3>Life</h3>
        </section>
      </div>
    );
  }
}
export default Index;
