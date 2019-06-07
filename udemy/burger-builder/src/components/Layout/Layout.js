import React from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component{
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }
    render() {
        return(
        <React.Fragment>
            <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
            <SideDrawer closed={this.sideDrawerClosedHandler} isOpen={this.state.showSideDrawer}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </React.Fragment>
        )
    }
};

export default Layout;