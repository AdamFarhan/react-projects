import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };
    componentDidMount() {
        axios.get('/posts')
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;