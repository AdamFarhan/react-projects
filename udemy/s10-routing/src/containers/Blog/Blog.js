import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {

    render() {
        console.log('[Blog.js] render()');
        
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* instead of a tags, React-Router wants us to use Link tags
                                Links are essentailly the same, but prevent the whole app from reloading (bad!)
                                They require a to prop, which can either be a string, or a javascript object
                                If you send a string, it's just the pathname */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
            {/* The render method here is mostly used for quick little inserts
                <Route path="/" exact render={() => <h1>Home</h1>} /> */}
            {/* For components, use the component attribute */}
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;