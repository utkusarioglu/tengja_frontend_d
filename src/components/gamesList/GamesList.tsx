import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { IGamesList } from '../../features/gamesList/gamesList.types';
import GameListItem from './GamesListItem';

type Props = {
    gamesList: IGamesList
};

function GamesList(props: Props) {
    const match = useRouteMatch();
    const listItems = props.gamesList.items.map((gameListing) =>
        <NavLink 
            to={`${match.path}/${gameListing.gameId}/lobby`}
            key={gameListing.gameId}    
            >
            <GameListItem 
                gameListing={gameListing}/>
        </NavLink> 
    )

    return (
        <div>
            <span>filter</span>
            {listItems}
        </div>
    )
}

export default GamesList;