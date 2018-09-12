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

// 404 PAGE
import NotFound from './pages/NotFound';

// ROUTING FOR ALL PAGES
class Entry extends Component {
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
              <Route component={ NotFound } />
            </Switch>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default Entry;
