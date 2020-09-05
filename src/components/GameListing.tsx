import React from 'react';
import { IGameListing } from '../features/gameList/gamesList.types';

type Props = {gameListing: IGameListing};

function GameListing(props: Props) {
    return (
        <p>{JSON.stringify(props)}</p>
    )
}

export default GameListing