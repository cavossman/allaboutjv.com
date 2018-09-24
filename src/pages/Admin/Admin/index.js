import React, { Component } from 'react';
import Collection from '../components/Collection';

import './admin.css';

const adminSettings = [
    {
        collection: 'poems',
        fields: [
            {
                name: 'Title',
                key: 'title',
                type: 'text'
            },
            {
                name: 'Body',
                key: 'body',
                type: 'WYSIWYG'
            },
            {
                name: 'Featured',
                key: 'featured',
                type: 'checkbox'
            },
            {
                name: 'Date',
                key: 'date',
                type: 'hidden'
            }
        ]
    },
    {
        collection: 'music',
        fields: [
            {
                name: 'Title',
                key: 'title',
                type: 'text'
            },
            {
                name: 'URL',
                key: 'contentUrl',
                type: 'text'
            },
            {
                name: 'Date',
                key: 'date',
                type: 'hidden'
            }
        ]
    }
];

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="page admin-page">
                <div className="container">
                {
                    adminSettings.map((section, i) => {
                        return (
                            <Collection collection={section.collection} key={i} />
                        )
                    })
                }
                </div>
            </div>
        );
    }
}
export default Admin;

/* SAVE FOR FORM

// import axios from 'axios';
// import TextEditor from '../../../components/TextEditor';

    handleChange(event) {
        // need to update this to create and update object in formData
        // this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        // event.preventDefault();
        // axios
        //     .post('http://localhost:5000/api/v1/' + this.state.openCollection, {
        //         // need to loop through keys and values in form.data -- spread operator?
        //         title: this.state.title,
        //         body: this.state.body,
        //         featured: this.state.featured
        //     })
        //     .then(res => {
        //         if (res.status === 200 && res.data) {
        //             console.log('collection saved');
        //         }
        //     })
        //     .catch(error => {
        //         console.warn(error);
        //     })
    }
<form>
    <label htmlFor="title">Title: </label>
    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
    <label htmlFor="body">Body: </label>
    <TextEditor />
    <label htmlFor="featured">Featured: </label>
    <input type="checkbox" name="featured" value={this.state.featured} onChange={this.handleChange} />
    <button type="submit" onClick={this.handleSubmit}>Save</button>
</form> */