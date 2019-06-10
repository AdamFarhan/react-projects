import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(response => {
                 const tempPosts = response.data.slice(0,4);
                 const updatedPosts = tempPosts.map(post => {
                     return {...post, author: 'Max'}
                 })
                 this.setState({posts: updatedPosts});
                 //console.log(response);
             })
             .catch(error => {
                 console.log(error);
             });

    }
    postClickHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {
        console.log('[Blog.js] render()');
        const posts = this.state.posts.map(post => {
            return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postClickHandler(post.id)}/>
        });
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Blog;