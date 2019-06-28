import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = (props) => {
    console.log("Friend Card:", props);
    return (
        <div className="friend-card">
            <div className="icons">
            <Link to={`/edit/${props.friend.id}`} ><i className="far fa-edit"></i></Link>
            <i className="far fa-trash-alt"></i>
            </div>
            <h2 className="name">{props.friend.name}</h2>
            <p className="email">Email: {props.friend.email}</p>
            <p className="age">Age: {props.friend.age}</p>           
        </div>
    );
};

export default FriendCard;