import React from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
class Posts extends React.Component {
    state = {
        posts: []
    };
    
    componentDidMount() {
        console.log(this.props);
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
    render() {
        const posts = this.state.posts.map(post => {
            return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postClickHandler(post.id)}/>
        });
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }

}

export default Posts;