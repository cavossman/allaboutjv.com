import React, { Component } from 'react';
import axios from 'axios';

import Edit from '../../../images/edit.svg';
import Delete from '../../../images/delete.svg';

import '../Admin/admin.css';

const CHARLIMIT = 20;
const DELETEMSG = 'Are you sure you want to delete this item?';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: this.props.collection
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleEdit(item) {
        console.log('open up modal to edit ' + this.state.collection);
        console.log('edit ', item)
    }

    handleDelete(item) {
        if (window.confirm(DELETEMSG))
            axios
                .delete('https://api.allaboutjv.com/api/v1/' + this.state.collection + '/' + item._id) 
                .then(res => {
                    if (res.status === 200 && res.data) {
                        this.props.collapseSection();
                    }
                })
                .catch(error => {
                    console.warn(error);
                })
    }

    displayValue(value) {
        if (Date.parse(value)) value = new Date(value).toLocaleDateString();
        return value.length > CHARLIMIT ? value.substr(0, CHARLIMIT -3 ) + '...' : value.toString()
    }

    render() {
        const item = this.props.item;
        return (
            <ul className="row">
            {
                Object.keys(this.props.item).map((key, y) => {
                    if (key.indexOf('_') !== 0)
                        return (
                            <li className={"detail " + key} key={y}>
                                {this.displayValue(item[key])}
                            </li>
                        )
                    return null;
                })
            }
                <li className="edit"><img src={Edit} alt="edit" onClick={() => this.handleEdit(item)} /></li>
                <li className="delete"><img src={Delete} alt="delete" onClick={() =>this.handleDelete(item)} /></li>
            </ul>
        )
    }
}
export default Item;