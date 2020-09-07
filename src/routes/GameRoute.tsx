import React from 'react';
import Header from '../components/common/Header';

import Game from '../components/game/Game';

function GameRoute() {
    return (
        <>
            <Header pageName="The Game" />
            <Game />
        </>
    )
}

export default GameRoute;