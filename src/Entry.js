import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// GLOBAL STYLESHEET
import './App.css';

// PAGE COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

// PAGE TEMPLATES
import Homepage from './pages/Index';
import Photos from './pages/Photos';
import Music from './pages/Music';
import Life from './pages/Life';
import Poetry from './pages/Poetry';
import Book from './pages/Book';
import Admin from './pages/Admin/Admin';
import Login from './pages/Admin/Login';

// 404 PAGE
import NotFound from './pages/NotFound';

// ROUTING FOR ALL PAGES
class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      loggedIn: false
    }
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(userStatus, name) {
    this.setState({username: name, loggedIn: userStatus});
    console.log('this.state.username: ', this.state.username);
    console.log('this.state.loggedIn: ', this.state.loggedIn);
  }

  render() {
    return (
      <div className="App">
        <Header />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Homepage } />
              <Route exact path="/photos" component={ Photos } />
              <Route exact path="/music" component={ Music } />
              <Route exact path="/life" component={ Life } />
              <Route exact path="/poetry" component={ Poetry } />
              <Route exact path="/book" component={ Book } />
              <Route exact path="/admin" component={ Admin } />

              <Route exact path="/login" render={ (props) => {  return <Login {...props} updateUser={this.updateUser} /> } } />

              <Route component={ NotFound } />
            </Switch>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default Entry;
