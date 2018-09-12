import React, { Component } from 'react';

import './fancybox.css';

class Fancybox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: false
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
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({'openImage': false});
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    const { height, width } = this.props;
    const customCSS = {
      height: height ? height : '300px',
      width: width ? width : '300px'
    };
    return (
      <div className="fancybox" style={ customCSS } >
        <div className="thumbnail" style={{backgroundImage: 'url(' + this.props.image + ')'}} onClick={ this.openImage } ></div>
        { this.state.openImage &&
          <div className="fancybox-open">
            <img src={ this.props.image } alt={this.props.alt ? this.props.alt : ''} ref={ this.setWrapperRef } />
          </div>
        }
      </div>
    );
  }
}
export default Fancybox;
