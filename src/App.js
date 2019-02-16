import React, { Component } from 'react';
import './App.css';
import route from './route';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to="/" ></Link>
        <Link to="/dashboard" >Dash</Link>
        <Link to="/postid" >Post</Link>
        <Link to="/new" >Form</Link>
        { route }
      </div>
    );
  }
}

export default App;
