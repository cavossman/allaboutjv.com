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
                name: 'Featured',
                key: 'featured',
                type: 'checkbox'
            }
        ]
    }
];

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="page admin-page">
                <div className="container">
                {
                    adminSettings.map((section, i) => {
                        return (
                            <Collection settings={section} key={i} />
                        )
                    })
                }
                </div>
            </div>
        );
    }
}
export default Admin;