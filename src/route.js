import React from 'react';
import { Switch, Route } from 'react-router-dom';

//  *** Routes ***
import Auth from './components/Auth';
import Dash from './components/Dash';
import Form from './components/Form';
import Post from './components/Post';

export default ( 
    <Switch>
        <Route exact path="/" component={ Auth } />
        <Route exact path="/dashboard" component={ Dash } />
        <Route exact path="/postid" component={ Post } />
        <Route exact path="/new" component={ Form } />
    </Switch>
 );