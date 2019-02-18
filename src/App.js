import React, { Component } from 'react';
import './App.css';
import route from './route';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to="/" ></Link>
        <Link to="/dashboard" ></Link>
        <Link to="/postid" ></Link>
        <Link to="/new" ></Link>
        { route }
      </div>
    );
  }
}

export default App;
