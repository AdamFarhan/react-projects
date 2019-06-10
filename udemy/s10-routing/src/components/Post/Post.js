import React from 'react';
// the withRouter HOC can be used to pass routing props to our children components
// by default, children do NOT have the routing props
// import { withRouter } from 'react-router-dom';
// export default withRouter(post)
import './Post.css';

const post = (props) => {
    console.log(props);
    return(
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
    );
};

export default post;