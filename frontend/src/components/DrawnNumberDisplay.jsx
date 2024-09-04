import React, { useState, useEffect } from 'react';

const DrawnNumberDisplay = ({ websocketUrl }) => {
    const [drawnNumber, setDrawnNumber] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(websocketUrl);

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'DRAWN_NUMBER') {
                // setDrawnNumber(JSON.stringify(message.data));
                setDrawnNumber(JSON.parse(message.data));
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            ws.close();
        };
    }, [websocketUrl]);

    return (
        <div className="container">
            <h2>Balota:</h2>
            {drawnNumber !== null ? (
                <h1>{drawnNumber.letter}-{drawnNumber.number}</h1>
            ) : (
                <p>El juego inciará en unos instantes...</p>
            )}
        </div>
    );
};

export default DrawnNumberDisplay;