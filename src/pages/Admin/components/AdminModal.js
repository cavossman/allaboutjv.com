import React, { Component } from 'react';
import Modal from '../../../components/Modal';

import axios from 'axios';
import TextEditor from '../../../components/TextEditor';

const modalCSS = {
                    'maxHeight': '90%',
                    'maxWidth': '90%'
                  };

class AdminModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.textEditorChange = this.textEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.type === 'checkbox') {
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  textEditorChange(name, value) {
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/v1/' + this.props.settings.collection, {...this.state})
      .then(res => {
          if (res.status === 200 && res.data) {
              this.props.collapseSection();
              Modal.close('modalAdd'+this.props.settings.collection);
          }
      })
      .catch(error => {
          console.warn(error);
      })
  }

  componentDidMount() {
    this.props.settings.fields.forEach((field) => {
      this.setState({[field.key]: field.type === 'checkbox' ? false : ''})
    });
  }

  renderInputFields(field) {
    if (field.type === 'WYSIWYG') return <TextEditor name={field.key} onChange={this.textEditorChange} />;
    else return <input type={field.type} name={field.key} placeholder={field.name} onChange={this.handleChange} />;

  }

  render() {
    return (
      <Modal id={'modalAdd' + this.props.settings.collection } customCSS={ modalCSS }>
        <div style={{textAlign: 'center', marginTop: '15px'}}>
          <form>
            {
              this.props.settings.fields.map((field, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={field.key}>{field.name}</label>
                    {this.renderInputFields(field)}
                  </div>
                )
              })
            }
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </Modal>
    );
  }
}
export default AdminModal;