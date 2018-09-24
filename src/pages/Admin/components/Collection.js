import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

import DownCarrot from '../../../images/down-carrot.svg';
import Add from '../../../images/add.svg';


import '../Admin/admin.css';

const FIELDLIMIT = 5;

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            section: {
                'collection': this.props.collection,
                'data': []
            }
        }
        this.handleAdd = this.handleAdd.bind(this);

        this.displayCollection = this.displayCollection.bind(this);
    }

    handleAdd() {
        console.log('open up modal to add ' + this.state.openCollection);
    }

    displayCollection(collection) {
        axios
            .get('http://localhost:5000/api/v1/' + collection)
            .then(res => {
                if (res.status === 200 && res.data) {
                    this.state.section.data = res.data;
                }
            })
            .catch(error => {
                console.warn(error);
            })
            .then(()=> this.setState({open: (this.state.open === collection ? '' : collection)}));
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const collection = this.state.section.collection;
        return (
            <div className={'admin-section'}>
                <div className="collection-selector" onClick={() => this.displayCollection(collection)}>
                    <h3 className="unselectable">{this.capitalizeFirstLetter(collection)}</h3>
                    <img className={'expand-section ' + (this.state.open ? 'flip' : '')} src={ DownCarrot } alt="expand" />
                </div>
                { this.state.open &&
                    <div className="collection-results">
                    {
                        this.state.section.data.map((item, j) => {
                            return (
                                <div key={j}>
                                {
                                    j === 0 &&
                                    <ul className="field-list">
                                        {
                                            Object.keys(item).map((key, x) => {
                                                if (x < FIELDLIMIT && key !== '_id') 
                                                    return (
                                                        <li className="detail" key={x}>
                                                            {this.capitalizeFirstLetter(key).replace('_', ' ')}
                                                        </li>
                                                    )
                                                return null;
                                            })
                                        }
                                    </ul>
                                }
                                    <Item item={item} collection={collection} />
                                </div>
                            )
                        })
                    }
                    <ul className="row" style={{textAlign:'center'}} onClick={this.handleAdd}>
                        <li className="add"><img src={Add} alt="add" /></li>
                    </ul>
                    </div>
                }
            </div>
        )
    }
}
export default Collection;