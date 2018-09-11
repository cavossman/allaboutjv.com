import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// GLOBAL STYLESHEET
import './App.css';

// PAGE COMPONENTS
import Header from './Components/Header';
import Footer from './Components/Footer';

// PAGE TEMPLATES
import Homepage from './Pages/Index';
import Photos from './Pages/Photos';
import Music from './Pages/Music';
import Life from './Pages/Life';
import Poetry from './Pages/Poetry';
import Book from './Pages/Book';

// 404 PAGE
import NotFound from './Pages/NotFound';

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
