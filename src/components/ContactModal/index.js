import React, { Component } from 'react';
import Modal from '../../components/Modal';
import Form from '../../components/Form';

const contactModalCSS = {
                          'maxHeight': '800px',
                          'maxWidth': '600px'
                        };

const zapierUrl = "https://hooks.zapier.com/hooks/catch/3768568/qwlqab/";
const presubmitMessage = "";
const postsubmitMessage = "";

class ContactModal extends Component {
  render() {
    return (
      <Modal id="contact" customCSS={ contactModalCSS }>
        <Form formName={ "Contact Me" } zap={ zapierUrl } presubmit={ presubmitMessage } postsubmit={ postsubmitMessage } />
      </Modal>
    );
  }
}
export default ContactModal;
