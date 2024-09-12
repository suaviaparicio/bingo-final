import React, { useState, useEffect } from "react";
// import boardMock from "../data/boardMock.json";

const BingoCard = () => {
    const [bingoData, setBingoData] = useState({});
    const [markedCells, setMarkedCells] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;

    const bingoHeaderColors = ['bg-b-color', 'bg-i-color', 'bg-n-color', 'bg-g-color', 'bg-o-color'];

    useEffect(() => {
        fetch(`${endpointUrl}/api/generate-card`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ /* payload data */ })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setBingoData(data);
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }, []);

    const handleCellClick = (rowIndex, cellIndex) => {
        const newMarkedCells = [...markedCells];
        const cellKey = `${rowIndex}-${cellIndex}`;

        if (newMarkedCells.includes(cellKey)) {
            newMarkedCells.splice(newMarkedCells.indexOf(cellKey), 1);
        } else {
            newMarkedCells.push(cellKey);
        }

        setMarkedCells(newMarkedCells);
    };

    const rows = Object.entries(bingoData).map(([letter, numbers], rowIndex) => (
        <div key={rowIndex} className="bingo-row">
            <div className={`bingo-cell bingo-header-cell ${bingoHeaderColors[rowIndex]}`}>{letter}</div>
            {numbers.map((value, cellIndex) => {
                const cellKey = `${rowIndex}-${cellIndex}`;
                const isMarked = markedCells.includes(cellKey);

                return (
                    <div
                        key={cellIndex}
                        className={`bingo-cell ${isMarked ? 'marked-cell' : ''}`}
                        onClick={() => handleCellClick(rowIndex, cellIndex)}
                    >
                        {value === 'Free' ? (
                            <img src="/star.png" alt="Free Space" className="star-image" />
                        ) : (
                            value
                        )}
                    </div>
                );
            })}
        </div>
    ));

    return <div className="bingo-card">{rows}</div>;
};

export default BingoCard;

