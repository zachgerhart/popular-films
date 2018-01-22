import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MovieContainer from './Components/MovieContainer/MovieContainer.js'

class App extends Component {


  render() {
    return (
      <div className="App">
      <h1> Movies </h1>
      <MovieContainer />
      </div>
    );
  }
}

export default App;
