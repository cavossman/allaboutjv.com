import React, { Component } from 'react';
import Modal from '../../components/Modal';
import Form from '../../components/Form';

import instagram from '../../images/icons/instagram.svg';

const contactModalCSS = {
                          'maxHeight': '800px',
                          'maxWidth': '500px'
                        };

const zapierUrl = "https://hooks.zapier.com/hooks/catch/3768568/qwlqab/";
const presubmitMessage = "";
const postsubmitMessage = "Thanks for contacting me. I will get back to you shortly. Be sure to follow me on Instagram while you're here - link below.";

const social = [
  {
    'title': 'Instagram',
    'link': 'https://www.instagram.com/singingjv/',
    'image': instagram
  }
];


class ContactModal extends Component {
  render() {
    return (
      <Modal id="contact" customCSS={ contactModalCSS }>
        <Form formName={ "Contact Me" } zap={ zapierUrl } presubmit={ presubmitMessage } postsubmit={ postsubmitMessage } />
        <div style={{textAlign: 'center', marginTop: '15px'}}>
          {
            social.map((icon, index) => {
              return (
                <a href={ icon.link } key={ index } target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src={ icon.image } alt="" />
                </a>
              )
            })
          }
        </div>
      </Modal>
    );
  }
}
export default ContactModal;
