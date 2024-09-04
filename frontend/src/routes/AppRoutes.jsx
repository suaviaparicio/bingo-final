import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Auth from '../containers/Auth';
import Home from '../pages/Home';
import WaitingRoom from '../containers/WaitingRoom';
import BingoContainer from '../containers/BingoContainer';
import GameFinished from '../containers/GameFinished';
import Disqualified from '../containers/Disqualified';


const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Auth />} />
        <Route path="/home" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="waiting-room" element={<WaitingRoom />} />
            <Route path="bingo-game" element={<BingoContainer />} />
            <Route path="game-finished" element={<GameFinished />} />
            <Route path="disqualified" element={<Disqualified />} />
        </Route>
    </Routes>
);
export default AppRoutes;