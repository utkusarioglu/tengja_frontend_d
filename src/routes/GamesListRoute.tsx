import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { send } from '@giantmachines/redux-websocket';

import Header from '../components/common/Header';
import GamesList from '../components/gamesList/GamesList';
import { selectGamesList } from '../features/gamesList/gamesListSlice';
import { selectSubscriptions, includeSubscription } from '../features/app/appSlice';

function GamesListRoute() {

    const dispatch = useDispatch();
    const subscription = 'gamesList'
    if (!useSelector(selectSubscriptions).includes(subscription)) {
        dispatch(send({
            subscribe: [subscription]
        }));
        dispatch(includeSubscription(subscription))
    }

    const gamesList = useSelector(selectGamesList);

    return (
        <>
            <Header pageName="Games" />
            <GamesList gamesList={gamesList}/>
        </>
    )
}

export default GamesListRoute;