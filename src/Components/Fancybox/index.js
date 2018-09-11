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
    return (
      <div className="fancybox">
        <img src={ this.props.image } alt="" onClick={ this.openImage } />
        { this.state.openImage &&
          <div className="fancybox-open">
            <img src={ this.props.image } alt="" ref={ this.setWrapperRef } />
          </div>
        }
      </div>
    );
  }
}
export default Fancybox;
