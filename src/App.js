import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MovieContainer from './Components/MovieContainer/MovieContainer.js'
import Header from './Components/Header/Header.js';

class App extends Component {


  render() {
    return (
      <div className="App">
      <Header />
      <MovieContainer />
      </div>
    );
  }
}

export default App;
