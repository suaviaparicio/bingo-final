import React from "react";
import { useNavigate } from "react-router-dom";

const GameFinished = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }
    return (
        <div className="container">
            <div className="row pt-5 text-center">
                <h1 className="">EL JUEGO HA FINALIZADO</h1>
                <h3 className="mt-5">Un usuario ha ganado la partida, ¡Felicitaciones!</h3>
                <div className="col-6">
                    <button type="button" className="btn btn-success btn-lg position-absolute top-50 start-50 translate-middle" onClick={handleClick}>
                        Regresar al Home
                    </button>
                </div>
            </div>
        </div>
    );
};
export default GameFinished;