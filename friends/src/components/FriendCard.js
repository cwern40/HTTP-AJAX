import React from 'react';

const FriendCard = (props) => {
    console.log("Friend Card:", props);
    return (
        <div className="friend-card">
            <h2>{props.friend.name}</h2>
            <p>Email: {props.friend.email}</p>
            <p>Age: {props.friend.age}</p>           
        </div>
    );
};

export default FriendCard;