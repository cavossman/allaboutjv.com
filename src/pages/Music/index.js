import React, { Component } from 'react';

import './music.css';

const songs = [
  'https://scontent-ort2-2.cdninstagram.com/vp/f78ed5b1c75be2d064310264e5444cd9/5BA2F206/t50.2886-16/39957953_303062063811331_6027107776612794368_n.mp4?_nc_eui2=AeFaCAr-cCTSUFAtLw8has2eT6HNbjtWmRbdo9hCQnL5NsIWObOY7Y_rm_eHPJxvMkSnBjFDN0mPwrOv8E-AFK83dsUsEkbI8-jHkxMkwWc_1w',
  'https://scontent-ort2-2.cdninstagram.com/vp/db88da8bfd4cc73bc0ba2ecfef8d2766/5BA29159/t50.2886-16/41814210_685730705145666_3505800358536413184_n.mp4?_nc_eui2=AeFNqJlPcbj0KfYYbMBA5MGw0vD0y3px6SsiIFcnaH1yZ2TCugU-COT8YwPjNbfjVWJiJJ1hpD11XQvd6v9lZ0c8TRwm8Z0xnYGSFz0wQMtGpA',
  'https://scontent-ort2-2.cdninstagram.com/vp/87dc4b17ba4a344f86f315c8257a666c/5BA29C13/t50.2886-16/41125740_228274664705308_5259480396491390976_n.mp4?_nc_eui2=AeFN4POXHMFdhyVyBc5U7vcz5TELRcawEUylIpezCBYsld1ztt4D9UIZD1f6gABXP_uPthfI5as1nRkpdwN_FbpKobc8ALB5jmtHD0E-9p6cNw'
];

class Music extends Component {
  render() {
    return (
      <div className="page music-page">
        {
          songs.map((song, index) => {
            return (
              <video controls key={index}>
                <source src={song} type="video/mp4" />
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
