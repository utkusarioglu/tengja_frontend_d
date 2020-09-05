import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import GamesList from '../components/GamesList';
import { selectGamesList } from '../features/gameList/gamesListSlice';

function GamesListRoute() {

    const gamesList = useSelector(selectGamesList);

    return (
        <>
            <Header pageName="Games" />
            <GamesList gamesList={gamesList}/>
        </>
    )
}

export default GamesListRoute;