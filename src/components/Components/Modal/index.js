import React, { Component } from 'react';

import './modal.css';

class Modal extends Component {
  static modals = [];
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static open(id) {
    let modal = Modal.modals.find(x => x.props.id === id);
    modal.setState({isOpen: true});
    document.body.classList.add('modal-open');
  }
  static close(id) {
    let modal = Modal.modals.find(x => x.props.id === id);
    modal.setState({isOpen: false});
    document.body.classList.remove('modal-open');
  }

  componentDidMount() {
    document.body.appendChild(this.element);
    Modal.modals.push(this);
  }

  componentWillUnmount() {
    Modal.modals = Modal.modals.filter(x => x.props.id !== this.props.id);
    this.element.remove();
  }

  handleClick(e) {
    if (e.target.className === 'modal-background') {
      Modal.close(this.props.id);
    }
  }

  render() {
    return (
            <div style={{display: + this.state.isOpen ? '' : 'none'}} onClick={this.handleClick} ref={el => this.element = el}>
              <div className="modal" style={this.props.customCSS}>
                <div className="modal-body">
                  {this.props.children}
                </div>
              </div>
              <div className="modal-background"></div>
            </div>
          );
  }
}
export default Modal;
