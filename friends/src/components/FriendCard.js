import React from 'react';
import './FriendCard.css';

const FriendCard = (props) => {
    console.log("Friend Card:", props);
    return (
        <div className="friend-card">
            <h2 className="name">{props.friend.name}</h2>
            <p className="email">Email: {props.friend.email}</p>
            <p className="age">Age: {props.friend.age}</p>           
        </div>
    );
};

export default FriendCard;