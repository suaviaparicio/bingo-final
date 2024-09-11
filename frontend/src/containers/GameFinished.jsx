import React from "react";
import { useNavigate } from "react-router-dom";

const GameFinished = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }
    return (
        // <div className="container">
        //     <div className="row pt-5 text-center">
        //         <h1 className="mt-5">EL JUEGO HA FINALIZADO</h1>
        //         <h3 className="mt-2">Un usuario ha ganado la partida, ¡Felicitaciones!</h3>
        //         <div className="col-6">
        //             <button type="button" className="btn btn-success position-absolute mt-5 start-50 translate-middle" onClick={handleClick}>
        //                 Regresar al Home
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div className="container">
            <div className="row pt-5 text-center">
                <h1 className="mt-5">EL JUEGO HA FINALIZADO</h1>
                <h3 className="mt-1">Un usuario ha ganado la partida, ¡Felicitaciones!</h3>
                <div className="col-6">
                    <button type="button" className="btn btn-success position-absolute mt-5 start-50 translate-middle" onClick={handleClick}>
                        Regresar al Home
                    </button>
                </div>
            </div>
        </div>
    );
};
export default GameFinished;