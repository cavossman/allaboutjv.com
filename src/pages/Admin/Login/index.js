import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    //TODO: complete validation - server returning wrong response if password is incorrect.
    handleSubmit(event) {
        event.preventDefault();
        axios
            .get('http://localhost:5000/user/login', {
                params: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(res => {
                console.log(res);
                if (res.status === 200 && res.data) {
                    console.log('good job kid');
                    this.props.updateUser({loggedIn: true, username: res.data.username});
                    this.setState({redirectTo: '/admin'});
                }
            })
            .catch(error => {
                console.warn(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{'pathname': this.state.redirectTo}} />
        } else {
            return (
                <div className="page login-page">
                    <form>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <button type="submit" onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            );
        }
    }
}
export default Login;
