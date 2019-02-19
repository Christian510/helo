import  React, { Component } from 'react';
import homeLogo from '../assets/home_logo.png';
import newLogo from '../assets/new_logo.png';
import shutDown from '../assets/shut_down.png';

class Dash extends Component {
    constructor(  ) {
        super();
        this.state = {
            posts: [],
            search: "",
            userPosts: true
        };
        // this.getAllPosts = this.getAllPosts.bind(this);
        // this.resetSearch = this.resetSearch.bind(this);
    }

    // getAllPosts(  ) {

    // }

    // resetSearch(  ) {

    // }

    render() {
        return ( 
            <div>
                Dashboard
            </div>
         );
    }
}

export default Dash;