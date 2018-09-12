// TODO: make zapier field required so post works
// TODO: improve form validation
import React, { Component } from 'react';
import axios from 'axios';

// CUSTOM COMPONENTS
import Field from './Field';

import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    if (this.validateForm()){
      console.log('submit');
      event.preventDefault();
      axios({
        method: 'post',
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        url: this.props.zap,
        data: this.state
      });
      this.setState({'submitted': true});
    } else {
      console.log('rejected');
    }
    window.scrollTo(0, 0);
  }

  validateForm() {
    return this.checkName() && this.checkEmail() && this.checkMessage();
  }
  checkName() {
    return this.state.name.length >= 3;
  }
  checkEmail() {
    return this.state.email.split('@').length >= 2;
  }
  checkMessage() {
    return this.state.message.length >= 3;
  }

  render() {
    let message;
    if(this.state.submitted) message = this.props.postsubmit ? this.props.postsubmit : 'Thank you for contacting me, I will be in touch with you soon.';
    else message = this.props.presubmit ? this.props.presubmit : 'If you want to get in touch with me, fill out the form below and I will get back to you as soon as I can.';

    return (
      <div className="form">
        <div className="wrapper" style={{textAlign: 'center'}}>
          { this.props.formName && <h2>{ this.props.formName }</h2> }
          <span>{message}</span>
          {this.state.submitted === false &&
            <form onSubmit={this.handleSubmit}>
            {/* Name field */}
            <Field
              label="Name"
              onChange={(event) => this.updateField('name', event.target.value)}
              value={this.state.name}
            />
            {/* Email field */}
            <Field
              label="Email"
              onChange={(event) => this.updateField('email', event.target.value)}
              value={this.state.email}
            />
            {/* Message textarea */}
            <Field
              label="Message"
              onChange={(event) => this.updateField('message', event.target.value)}
              /* This should be written like 'textarea' */
              textarea={true}
              value={this.state.message}
            />
            {/* Submit button */}
            <input type="submit" value="Submit" className="submit-btn" disabled={ !this.validateForm() } />
          </form>}
        </div>
      </div>
    );
  }
}

export default Form;
