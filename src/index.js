import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" text="Nice post!"/>
            <CommentDetail author="Alex" timeAgo="Today at 2PM" text="Good read!"/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 4PM" text="Very Good"/>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));