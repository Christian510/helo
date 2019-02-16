import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth';
import Nav from './components/Nav';
import Dash from './components/Dash';
import Form from './components/Form';
import Post from './components/Post';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />
        <Auth />
        <Dash />
        <Form />
        <Post />

      </div>
    );
  }
}

export default App;
