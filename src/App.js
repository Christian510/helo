import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to="/" ></Link>
        <Link to="/dashboard" >Dash</Link>
        <Link to="/postid" >Post</Link>
        <Link to="/new" >Form</Link>
        { routes }
      </div>
    );
  }
}

export default App;
