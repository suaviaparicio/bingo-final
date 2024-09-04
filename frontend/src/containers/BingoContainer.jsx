import React, { useEffect, useContext } from "react";
import BingoCard from "../components/BingoCard";
import DrawnNumberDisplay from "../components/DrawnNumberDisplay";
import RoomPlayers from "../components/RoomPlayers";
import { useNavigate } from "react-router-dom";

const wsUrl = process.env.REACT_APP_WS_URL;

const BingoContainer = () => {
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;
    const navigate = useNavigate();

    const handleCheckWin = async () => {
        try {
            const response = await fetch(`${endpointUrl}/api/check-win`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.winner === false) {
                    navigate('/home/disqualified')
                } else {
                    navigate('/home/game-finished');
                }
            } else {
                console.log('Error finishing game')
            }
        } catch (error) {
            console.error('Error finishing game:', error);
        }
    };
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-9 md-7">
                    <div className="row">
                        <DrawnNumberDisplay websocketUrl={wsUrl} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <BingoCard />
                        </div>
                    </div>
                </div>
                <div className="col-1 mt-md-5">
                    <button type="button" className="btn btn-warning btn-lg position-absolute top-50 start-50" onClick={handleCheckWin}>
                        ¡BINGO!
                    </button>
                </div>
                <div className="col-2 md-4 md-mt-5">
                    <div className="position-relative">
                        <RoomPlayers />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BingoContainer;