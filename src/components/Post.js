import  React, { Component } from 'react';
import Dash from '../components/Dash';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            img: "",
            content: "",
            author: "",
            authorPicture: ""
        };
        // this.handlePostInfo = this.handlePostInfo.bind(this);
    }

    // handlePostInfo() {

    // }

    render() {
        return (
            <div>
                Nav
                <Dash />
            </div>
        );        

    }
}

export default Post;