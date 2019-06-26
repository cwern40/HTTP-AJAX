import React from 'react';

const FriendForm = (props) => {
    console.log("Friend Form:", props);
    return (
        <div className="friend-form">
            <h3>Add a new friend</h3>
            <form>
                <input type="text" placeholder="Enter friend's name..." />
                <input type="text" placeholder="Enter friend's email..." />
                <input type ="text" placeholder="Enter friend's age..." />
            </form>
        </div>
    );
};

export default FriendForm;