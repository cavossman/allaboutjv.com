import React, { Component } from 'react';

import './fancybox.css';

class Fancybox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: false,
      index: this.props.index
    }
    this.openImage = this.openImage.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  openImage() {
    this.setState({'openImage': true});
  }

  handleClickOutside(event) {
    if(event.target.className === 'fancybox-open') {
      this.setState({'openImage': false});
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  getImageCount() {
    return document.getElementsByClassName(this.props.uniqueClass).length;
  }

  /* @param - height      - Height of thumbnail
   * @param - width       - Width of thumbnail
   * @param - index       - Index in set of array of photos - combine with uniqueClass
   * @param - uniqueClass - Unique class name for array of photos - combine with index
   * @param - title       - Title of photo, overlayed over bottom of the image
   *
   */
  render() {
    const { height, width } = this.props;
    const customCSS = {
      height: height ? height : '300px',
      width: width ? width : '300px'
    };
    return (
      <div className={'fancybox ' + this.props.uniqueClass} style={ customCSS } >
        <div className="thumbnail" style={{backgroundImage: 'url(' + this.props.image + ')'}} onClick={ this.openImage } ></div>
        { this.state.openImage &&
          <div className="fancybox-open">
            {
              !isNaN(this.state.index) && this.props.uniqueClass && <div className="count unselectable">{this.state.index + 1} | {this.getImageCount()}</div>
            }
            <div className="fancy-photo">
              <img src={ this.props.image } alt={this.props.alt ? this.props.alt : ''} ref={ this.setWrapperRef } />
              {
                this.props.title && <div class="title-overlay">{ this.props.title }</div>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}
export default Fancybox;
