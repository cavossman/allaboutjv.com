import React, { Component } from 'react';

import Fancybox from '../../components/Fancybox';

import jamaica from '../../images/photos/jamaica-beach.jpg';
import jv_jamaica from '../../images/photos/jv-jamaica.JPG';
import lainey_pup from '../../images/photos/lainey-pup.JPG';
import lainey_sunflower from '../../images/photos/lainey-sunflower.JPG';
import lainey_sunflower1 from '../../images/photos/lainey-sunflower1.JPG';
import sunflower_sunset from '../../images/photos/sunflower-sunset.JPG';
import ts_fountain from '../../images/photos/ts-fountain.JPG';
import ts from '../../images/photos/ts.JPG';


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
              <Fancybox uniqueClass={'page-photos'} key={index} index={index} image={photo} />
            )
          }
        </div>
      </div>
    );
  }
}
export default Photos;
