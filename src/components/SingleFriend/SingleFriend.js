import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleFriend = ({ friend }) => {
        const navigate = useNavigate();
        const showFriend = () => {
                const path = `/friend/${friend.id}`;
                navigate(path)
        }
        return (
                <div>
                        <h3>{friend.name}</h3>
                        <button onClick={showFriend}>{friend.username} : {friend.id}</button>
                </div>
        );
};

export default SingleFriend;