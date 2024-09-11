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
        <div className="container mx-auto my-auto min-vh-md-75 min-vh-100 d-flex flex-column align-items-center justify-content-center pb-5">
            <div className="home pt-5">
                <h1 className="pb-3 text-center">
                    ¡Bienvenido!
                </h1>
                <h2 className="pb-2">
                    Antes de iniciar, es importante que leas las instrucciones a continuación:
                </h2>
                <h5 className="fw-light">
                    <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item">Al presionar el botón de 'iniciar juego', entrarás en una sala donde esperarás 1 minuto mientras que otros jugadores se suman a la partida.</li>
                        <li className="list-group-item">Cuando el juego inicie, podrás ver los números uno por uno.</li>
                        <li className="list-group-item">Si los números coinciden con los de tu tarjetón, deberás marcarlos haciendo clic sobre el recuadro del número en tu tarjetón.</li>
                        <li className="list-group-item">Ganarás, en caso de que completes alguna de las siguientes opciones: </li>

                        <div className="container mt-5 mb-5">
                            <div className="row align-items-start justify-content-center">

                                <div className="col-lg-2 col-sm-12 col-md-6 card-instructions text-center mt-2 mb-2">
                                    <img src="/vertical.png" className="card-img-top" alt="Demostración línea vertical"/>
                                        <div className="card-body">
                                            <p className="card-text fw-bold">Una línea vertical.</p>
                                        </div>
                                </div>
                                <div className="col-lg-2 col-sm-12 col-md-6 card-instructions text-center mt-2 mb-2">
                                    <img src="/horizontal.png" className="card-img-top" alt="Demostración línea horizontal"/>
                                        <div className="card-body">
                                            <p className="card-text fw-bold">Una línea horizontal.</p>
                                        </div>
                                </div>
                                <div className="col-lg-2 col-sm-12 col-md-6 card-instructions text-center mt-2 mb-2">
                                    <img src="/diagonal.png" className="card-img-top" alt="Demostración diagonal en cualquier dirección"/>
                                        <div className="card-body">
                                            <p className="card-text fw-bold">Una diagonal en cualquier dirección.</p>
                                        </div>
                                </div>
                                <div className="col-lg-2 col-sm-12 col-md-6 card-instructions text-center mt-2 mb-2">
                                    <img src="/corners.png" className="card-img-top" alt="Demostración cuatro esquinas del tarjetón"/>
                                        <div className="card-body">
                                            <p className="card-text fw-bold">Las cuatro esquinas del tarjetón.</p>
                                        </div>
                                </div>
                                <div className="col-lg-2 col-sm-12 col-md-6 card-instructions text-center mt-2 mb-2">
                                    <img src="/complete.png" className="card-img-top" alt="Demostración todo el tarjetón"/>
                                        <div className="card-body">
                                            <p className="card-text fw-bold">Todo el tarjetón</p>
                                        </div>
                                </div>
                            </div>
                        </div>


                        <li className="list-group-item">Debes presionar el botón de 'Bingo', para indicar que ganaste y validar tus respuestas.</li>
                        <li className="list-group-item">¡Cuidado! en caso de que presiones el botón 'Bingo' y no hayas ganado, quedarás descalificad@ de la partida.</li>
                    </ul>
                </h5>
                <div className="start-button d-grid gap-2 col-lg-3 col-md-6 mx-auto pt-4 pb-3">
                    <button type="button" className="btn btn-success btn-lg" onClick={handleWaitingRoom}>Iniciar juego</button>
                </div>
            </div>
        </div>
    );
};
export default Home;