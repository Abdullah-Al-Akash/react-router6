import React, { useEffect, useState } from 'react';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friends = () => {
        const [friends, setFriends] = useState([]);

        // Load Data From Server:
        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/users')
                        .then(res => res.json())
                        .then(data => setFriends(data))
        })
        return (
                <div>
                        <h2>Hello Friends! How are you?</h2>

                        {
                                friends.map(friend => <SingleFriend friend={friend}></SingleFriend>)
                        }
                </div>
        );
};

export default Friends;