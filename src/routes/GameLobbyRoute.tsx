import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGamesList } from '../features/gamesList/gamesListSlice';
import Header from '../components/common/Header';

interface Params {
    gameId: string;
}

function GameLobbyRoute() {
    const match = useRouteMatch();
    // !TODO
    const { gameId } = match.params as Params; 
    const gamesList = useSelector(selectGamesList);
    const gameDataCandidate = gamesList.items.filter((item) => item.gameId === gameId);

    if (gameDataCandidate.length !== 1) {
        throw new Error('game id leads to no or multiple entries')
    }

    const { gameName, playerCount, rules } = gameDataCandidate[0];
    const {
        timeLimit,
        winMode,
        tilePop,
        rowCount,
        colCount,
        streakLength,
        maxPlayerCount,
    } = rules;

    return (
        <>
            <Header pageName={gameName} />
            <p>Board: {rowCount} x {colCount}</p>
            <p>Streak: {streakLength}</p>
            <p>Win mode: {winMode}</p>
            <p>Player count: {playerCount} of {maxPlayerCount}</p>
            <p>Time limit: {timeLimit}</p>
            <p>Tile Pop: {tilePop ? 'On' : 'Off'}</p>
        </>
    )
}

export default GameLobbyRoute;