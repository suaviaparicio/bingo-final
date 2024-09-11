import React from "react";
import CounterDisplay from "../components/CounterDisplay";

const wsUrl = process.env.REACT_APP_WS_URL;

const WaitingRoom = () => {
    return (
        <div className="container pt-5">
            <div className="row pt-5 pb-5">
                <CounterDisplay websocketUrl={wsUrl}/>
            </div>
            <div className="row">
                <div className="d-flex justify-content-center gap-2">
                    <div className="spinner-grow text-info" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
                <div className="pt-5">
                    <h3 className="text-center">Estamos esperando a que ingresen más jugadores...</h3>
                    <h3 className="text-center mt-1">En poco, generaremos tu tarjetón.</h3>
                </div>

            </div>
        </div>
    );
};
export default WaitingRoom;