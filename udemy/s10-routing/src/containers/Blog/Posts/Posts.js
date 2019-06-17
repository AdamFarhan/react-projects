import React from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

// import { Link } from 'react-router-dom';
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
        this.props.history.push({
            pathname: '/' + id
        });
        //this.props.history.push('/'+id);
    }
    render() {
        const posts = this.state.posts.map(post => {
            return( 
                    // <Link to={'/' + post.id} key={post.id}>
                        <Post 
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postClickHandler(post.id)}/>
                    // </Link>
            )
        });
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" exact component={FullPost} />
            </div>
        )
    }

}

export default Posts;