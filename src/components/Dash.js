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
            <div id="dash-container">
                <div className="justify-content">
                    <div id="navigation">
                        <div className="nav-link">
                            <img alt="user"></img>
                            <p>User Name</p>
                        </div>
                        <div className="nav-link" >
                            <img src={ homeLogo } width="50" alt="home"></img>
                        </div>
                        <div className="nav-link" >
                            <img src={ newLogo } width="50" alt="newLogo" ></img>
                        </div>
                    </div>
                    <div id="shut-down" >
                        <img src={ shutDown } width="50" alt="shutDown" ></img>
                    </div>
                </div>
            </div>
         );
    }
}

export default Dash;