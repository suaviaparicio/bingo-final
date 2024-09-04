import React, { useState, useEffect } from "react";

const RoomPlayers = () => {
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;
    const [ users, setUsers ] = useState([]);

        useEffect( () => {
            const fetchUsers = async () => {
                try {
                    const response = await fetch(`${endpointUrl}/api/active-users`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);
                        if (data.activeUsers && Array.isArray(data.activeUsers)) {
                            setUsers(data.activeUsers);
                        } else {
                            console.error('Invalid data structure: missing or invalid activeUsers property');
                        }
                    } else {
                        console.error('Error getting active users');
                    }
        
                } catch (error) {
                    console.error('Error fetching active users:', error);
                }
            };

            fetchUsers();
        }, [endpointUrl]);

    return (
        <div className="container">
            <div className="row">
                <h2 className="">Jugadores en la sala</h2>
                <ul className="list-group list-group-flush">
                    {users.map((user) => (
                        <li className="list-group-item" key={user}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default RoomPlayers;