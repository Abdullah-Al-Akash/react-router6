import React from 'react';
import './singleFriend.css';

const singleFriend = ({ friend }) => {
        return (
                <div>
                        {/* Display Friend Name and User Name */}
                        <h3>{friend.name}</h3>
                        <button class="btn">{friend.username}</button>
                </div>
        );
};

export default singleFriend;