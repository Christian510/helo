import  React, { Component } from 'react';

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