import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Course from '../Course/Course';
import Users from '../Users/Users';

import  './Layout.css';
class Layout extends React.Component {
    render() {
        return (
            <div className="Layout">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/users">Users</NavLink></li>
                            <li><NavLink to="/courses">Courses</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Switch>
                        <Route path="/users" component={Users} />
                        <Route path="/courses" component={Courses} />
                        <Redirect from="/all-courses" to="/courses" />
                        <Route render={() => <h1>404, page not found</h1>} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Layout;