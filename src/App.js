import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './homepage/homepage';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
