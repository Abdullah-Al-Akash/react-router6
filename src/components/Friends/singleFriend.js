import React from 'react';

const singleFriend = ({ friend }) => {
        return (
                <div>
                        <h3>{friend.name}</h3>
                        <button>{friend.username}</button>
                </div>
        );
};

export default singleFriend;