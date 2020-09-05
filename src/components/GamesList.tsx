import React from 'react';
import { IGamesList } from '../features/gameList/gamesList.types';
import GameListing from './GameListing';

type Props = {
    gamesList: IGamesList
};

function GamesList(props: Props) {

    const listItems = props.gamesList.items.map((gameListing) => 
        <GameListing 
            key={gameListing.id}    
            gameListing={gameListing}/>
    )

    return (
        <div>
            <span>f</span>
            {listItems}
        </div>
    )
}

export default GamesList;