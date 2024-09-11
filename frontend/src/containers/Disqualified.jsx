import React from "react";
import { useNavigate } from "react-router-dom";

const Disqualified = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }
    return (
        <div className="container my-auto min-vh-md-75 min-vh-100">
            <div className="row pt-5 text-center">
                <h1 className="mt-5">Parece que no has ganado</h1>
                <h3 className="mt-1">Quedas descalificado de la partida</h3>
                <div className="col-6">
                    <button type="button" className="btn btn-success position-absolute mt-5 start-50 translate-middle" onClick={handleClick}>
                        Regresar al Home
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Disqualified;