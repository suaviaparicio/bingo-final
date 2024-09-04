import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Auth = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const navigate = useNavigate();
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;
    const { updateAuthState } = useContext(AuthContext);

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${endpointUrl}/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: user, password: password })
            });

            if (response.ok) {
                const data = await response.json();
                updateAuthState({ isAuthenticated: true, user: data.user });
                navigate('/home');
            } else {
                setShowErrorAlert(true);
            }
        } catch (error) {
            setShowErrorAlert(true);
        }
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <h1 className="text-center mb-3">¡Bienvenido a nuestro Bingo virtual!</h1>
                <h3 className="text-center mb-5">Inicia sesión para tener una experiencia inolvidable con el juego más divertido.</h3>
            </div>
            <div className="row mt-5">
                <form action="" onSubmit={handleFormSubmit}>
                    {showErrorAlert && (
                        <div className="alert alert-danger" role="alert">
                            Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
                        </div>
                    )}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="InputUser">Usuario</label>
                        <input
                            className="form-control"
                            type="text"
                            id="userInput"
                            aria-describedby="emailHelp"
                            value={user}
                            onChange={handleUserChange}
                        />
                        <div id="emailHelp" className="form-text">*No compartiremos tu email ni tus datos personales con ningún tercero</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="InputPassword">Contraseña</label>
                        <input
                            className="form-control"
                            type="password"
                            id="passwordInput"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="start-button">
                        <button type="submit" className="btn btn-success mt-3">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Auth;
