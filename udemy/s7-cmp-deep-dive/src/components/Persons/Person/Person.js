import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.inputElementRef.current);
    this.inputElementRef.current.focus();
    //this.inputElement.focus();
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
        />
      </React.Fragment>
    );
  }
}
/* To use proptypes, run `npm install --save prop-types`
   proptypes are used as definitions for the props that are sent to this component.
   If an incorrect type is sent, an error will be displayed in the js console */
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
