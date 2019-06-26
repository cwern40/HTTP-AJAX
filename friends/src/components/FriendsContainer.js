import React from 'react';
import FriendCard from "./FriendCard"
import FriendForm from './FriendForm';
import './FriendCard.css';

const FriendsList = (props) => {
    console.log("Friends List:", props.friends)
    return (
        <div className="friends-container">
            {props.friends.map((friend) =>(
                <FriendCard key= {friend.id} friend={friend} />
            ))}
            <FriendForm friend={props.friends} />
        </div>
    );
};

export default FriendsList;