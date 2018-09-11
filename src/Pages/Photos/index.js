import React, { Component } from 'react';

import Fancybox from '../../Components/Fancybox';

import cds from '../../images/homepage-bg.jpg';

const photos = [cds, cds, cds, cds, cds, cds, cds, cds, cds, cds, cds, cds];

class Photos extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          {
            photos.map((photo, index) =>
              <Fancybox key={index} image={photo} />
            )
          }
        </div>
      </div>
    );
  }
}
export default Photos;
