/*  This form of HOC is best used when you're attaching new logic 
    to the Wrapped Component. The previous method is a better approach
    for simply assigning classes */
import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass;