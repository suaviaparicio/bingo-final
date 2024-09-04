import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;

    const handleWaitingRoom = async () => {
        try {
            const response = await fetch(`${endpointUrl}/api/start-counter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                navigate('/home/waiting-room');
            } else {
                console.error('Error starting game');
            }
        } catch (error) {
            console.error('Error during waiting room:', error);
        }
    };

    const handleAddUser = async () => {
        try {
            const response = await fetch(`${endpointUrl}/api/add-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                navigate('/home/waiting-room');
            } else {
                console.error('Error adding a user');
            }
        } catch (error) {
            console.error('Error adding a user:', error);
        }
    }

    return (
        <div className="container">
            <div className="home pt-5 ">
                <h1 className="pb-3 text-center">
                    El super bingo virtual
                </h1>
                <h2 className="pb-2 text-center">
                    ¡Estamos  muy contentos de que nos acompañes!
                </h2>
                <h5 className="fw-light">
                    Antes de iniciar, es importante que leas las instrucciones a continuación:
                    <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item">Al presionar 'iniciar juego', serás dirigido a una sala donde esperarás máximo 1 minuto a que otros jugadores se sumen a la partida</li>
                        <li className="list-group-item">Cuando el juego inicie, leeremos los números uno por uno cada 5 segundos</li>
                        <li className="list-group-item">Si los números coinciden con los de tu tarjetón, debes marcarlos haciendo clic sobre el recuadro del número sobre tu tarjetón.</li>
                        <li className="list-group-item">Ganarás, en caso de que completes alguna de las siguientes opciones: </li>

                        <ul className="list-group mt-4 mb-4">
                            <li className="list-group-item list-group-item-info">Una línea vertical</li>
                            <li className="list-group-item list-group-item-warning">Una línea horizontal</li>
                            <li className="list-group-item list-group-item-success">Una diagonal en cualquier dirección</li>
                            <li className="list-group-item list-group-item-dark">Las cuatro esquinas del tarjetón</li>
                            <li className="list-group-item list-group-item-danger">Todo el tarjetón</li>
                        </ul>

                        <li className="list-group-item">Debes presionar el botón de 'Bingo', para indicar que ganaste y validaremos tus respuestas</li>
                        <li className="list-group-item">¡Cuidado! en caso de que presiones el botón 'Bingo' y no hayas ganado, quedarás descalificado de la partida</li>
                    </ul>
                </h5>
                <div className="start-button d-grid gap-2 col-6 mx-auto pt-4 pb-3">
                    <button type="button" className="btn btn-success btn-lg" onClick={handleWaitingRoom}>Iniciar juego</button>
                </div>
            </div>
        </div>
    );
};
export default Home;