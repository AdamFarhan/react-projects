import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state = {
        auth: true
    }
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
                {/* If a route is conditional, you CANNOT access that url, unless the condition is true */}
                {this.state.auth && <Route path="/new-post" component={AsyncNewPost} />}
                <Route path="/posts" component={Posts} />
                <Redirect from="/" to="/posts" />
                {/* Not providing a path for Route means it will handle any other case that's not currently handled
                    (404 errors) */}
                {/* <Route render={() => <h1>404 error</h1>} /> */}
            </Switch>
            </div>
        );
    }
}

export default Blog;