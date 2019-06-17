import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
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
                            {/* NavLinks are used when you want your links to have an active class when you're
                                on that link's route */}
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
            {/* The render method here is mostly used for quick little inserts
                <Route path="/" exact render={() => <h1>Home</h1>} /> */}
            {/* For components, use the component attribute */}
            {/* The Switch component tells React Router to only show the first route
                that matches our url. */}
            <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/" component={Posts} />
            </Switch>
            </div>
        );
    }
}

export default Blog;