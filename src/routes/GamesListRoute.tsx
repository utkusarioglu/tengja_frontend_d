import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { send } from '@giantmachines/redux-websocket';

import Header from '../components/Header';
import GamesList from '../components/GamesList';
import { selectGamesList } from '../features/gameList/gamesListSlice';

function GamesListRoute() {

    useDispatch()(send({
        subscribe: ['gamesList']
    }));
    const gamesList = useSelector(selectGamesList);

    return (
        <>
            <Header pageName="Games" />
            <GamesList gamesList={gamesList}/>
        </>
    )
}

export default GamesListRoute;