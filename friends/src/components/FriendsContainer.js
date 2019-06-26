import React from 'react';
import FriendCard from "./FriendCard"

const FriendsList = (props) => {
    console.log("Friends List:", props.friends)
    return (
        <div className="friends-container">
            {props.friends.map((friend) =>(
                <FriendCard key= {friend.id} friend={friend} />
            ))}
        </div>
    );
};

export default FriendsList;