import React, { Component } from 'react';
import axios from 'axios';

import './admin.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: '',
          featured: false // Doesn't update properly in handleChange
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/v1/poems', {
                title: this.state.title,
                body: this.state.body,
                featured: this.state.featured
            })
            .then(res => {
                if (res.status === 200 && res.data) {
                    console.log('poem saved');
                }
            })
            .catch(error => {
                console.warn(error);
            })
    }

    // Break into sections for every collection and such. - lots more work to be done.
    render() {
        return (
            <div className="page admin-page">
                <h1>edit poems</h1>
                <form>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    <label htmlFor="body">Body: </label>
                    <input type="textarea" name="body" value={this.state.body} onChange={this.handleChange} />
                    <label htmlFor="featured">Featured: </label>
                    <input type="checkbox" name="featured" value={this.state.featured} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        );
    }
}
export default Admin;
