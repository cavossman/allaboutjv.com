import React, { Component } from 'react';
import axios from 'axios';
import TextEditor from '../../../components/TextEditor';

import DownCarrot from '../../../images/down-carrot.svg';
import Edit from '../../../images/edit.svg';
import Delete from '../../../images/delete.svg';
import Add from '../../../images/add.svg';

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
            formData: {},
            openCollection: '',
            cachedData: {
                'music': [
                    {
                        'title': 'music test',
                        'URL': 'rest'
                    },
                    {
                        'title': 'test',
                        'body': 'testing',
                        'featured': 'true'
                    }
                ],
                'poems': [
                    {
                        'title': 'test',
                        'body': 'testing',
                        'featured': 'true'
                    },
                    {
                        'title': 'test',
                        'body': 'testing',
                        'featured': 'true'
                    },
                    {
                        'title': 'test',
                        'body': 'testing',
                        'featured': 'true'
                    },
                    {
                        'title': 'test',
                        'body': 'testing',
                        'featured': 'true'
                    }
                ]
            } // TODO: use to cache existing data when user opens section it makes api call, store that here to prevent hitting api every time.
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.displayCollection = this.displayCollection.bind(this);
    }

    handleChange(event) {
        // need to update this to create and update object in formData
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/v1/' + this.state.openCollection, {
                // need to loop through keys and values in form.data -- spread operator?
                title: this.state.title,
                body: this.state.body,
                featured: this.state.featured
            })
            .then(res => {
                if (res.status === 200 && res.data) {
                    console.log('collection saved');
                }
            })
            .catch(error => {
                console.warn(error);
            })
    }

    displayCollection(collection) {
        this.setState({openCollection: (this.state.openCollection === collection ? '' : collection)});
    }

    render() {
        return (
            <div className="page admin-page">
                <div className="container">
                {
                    adminSettings.map((section, i) => {
                        return (
                            <div className={'admin-section'} key={i}>
                                <div className="collection-selector" onClick={() => this.displayCollection(section.collection)}>
                                    <h3 className="unselectable">{section.collection}</h3>
                                    <img className={'expand-section ' + (this.state.openCollection === section.collection ? 'flip' : '')} src={ DownCarrot } />
                                </div>
                                { this.state.openCollection === section.collection &&
                                    <div className="collection-results">
                                    {
                                        this.state.cachedData[section.collection].map((item, j) => {
                                            return (
                                                <ul className="row" key={j}>
                                                {
                                                    Object.keys(item).map((key, k) => {
                                                        return (
                                                            <li className="detail" key={k}>
                                                                {item[key]}
                                                            </li>
                                                        )
                                                    })
                                                }
                                                <li className="edit"><img src={Edit} alt="" /></li>
                                                <li className="delete"><img src={Delete} alt="" /></li>
                                                </ul>
                                            )
                                        })
                                    }
                                    <ul className="row" style={{textAlign:'center'}}>
                                        <img src={Add} alt="" style={{height:'20px'}} />
                                    </ul>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}
export default Admin;

{/* <form>
    <label htmlFor="title">Title: </label>
    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
    <label htmlFor="body">Body: </label>
    <TextEditor />
    <label htmlFor="featured">Featured: </label>
    <input type="checkbox" name="featured" value={this.state.featured} onChange={this.handleChange} />
    <button type="submit" onClick={this.handleSubmit}>Save</button>
</form> */}