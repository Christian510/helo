import  React, { Component } from 'react';

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
                Post
            </div>
        );        

    }
}

export default Post;