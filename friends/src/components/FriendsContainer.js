import React from 'react';
import FriendCard from "./FriendCard"
import FriendForm from './FriendForm';
import './FriendCard.css';

const FriendsList = (props) => {
    return (
        <div className="friends-container">
            {props.friends.map((friend) =>(
                <FriendCard key= {friend.id} friend={friend} updateList={props.updateList} />
            ))}
            <FriendForm friend={props.friends} updateList={props.updateList} />
        </div>
    );
};

export default FriendsList;