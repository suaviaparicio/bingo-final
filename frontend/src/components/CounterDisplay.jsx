import React, {useState, useEffect} from "react";
import { useNavigate } from"react-router-dom";


const CounterDisplay = ({websocketUrl}) => {
    const [counter, setCounter ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ws = new WebSocket(websocketUrl);

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'COUNTER') {
                const newCounter = JSON.parse(message.data);
                setCounter(newCounter);

                if (newCounter === 0) {
                    navigate("/home/bingo-game");
                }
            }
        };

        ws.onerror = (error) => {
            console.log('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connetcion closed');
        };

        return () => {
            ws.close();
        };
    }, [websocketUrl, navigate]);

    return (
        <div className="container text-center">
            {counter !== null ? (
                <h1>
                    El juego iniciará en {counter} segundos...
                </h1>
            ) : (
                <h1>Contador iniciando...</h1>
            )}
        </div>
    );
};
export default CounterDisplay;
