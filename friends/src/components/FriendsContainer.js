import React from 'react';

const FriendsList = (props) => {
    console.log("Friends List:", props.friends)
    return (
        <div className="friends-container">
            {props.friends.map((friend) =>(
                <p>{friend.name}</p>
            ))}
        </div>
    );
};

export default FriendsList;