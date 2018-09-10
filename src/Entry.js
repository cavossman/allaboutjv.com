import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// GLOBAL STYLESHEET
import './App.css';

// PAGE COMPONENTS
import Header from './Components/Header';
import Footer from './Components/Footer';

// PAGE TEMPLATES
import Homepage from './Pages/Index';

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
              <Route component={ NotFound } />
            </Switch>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default Entry;
