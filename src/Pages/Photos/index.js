import React, { Component } from 'react';

import Fancybox from '../../Components/Fancybox';

import jamaica from '../../images/photos/jamaica-beach.jpg';
import jv_jamaica from '../../images/photos/jv-jamaica.jpg';
import lainey_pup from '../../images/photos/lainey-pup.jpg';
import lainey_sunflower from '../../images/photos/lainey-sunflower.jpg';
import lainey_sunflower1 from '../../images/photos/lainey-sunflower1.jpg';
import sunflower_sunset from '../../images/photos/sunflower-sunset.jpg';
import ts_fountain from '../../images/photos/ts-fountain.jpg';
import ts from '../../images/photos/ts.jpg';


import './photos.css';

const photos = [
                  jamaica,
                  jv_jamaica,
                  lainey_pup,
                  lainey_sunflower,
                  lainey_sunflower1,
                  sunflower_sunset,
                  ts_fountain,
                  ts
                ];

class Photos extends Component {
  render() {
    return (
      <div className="page photos-page">
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
