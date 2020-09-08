import React, { CSSProperties } from 'react';

import { useSelector } from 'react-redux';
import { selectWinnerId, selectPlayerSymbols, selectGameOver, selectRules } from '../../features/game/gameSlice';

import Board from './Board';
import Hud from './Hud';

const styles: {[className: string]: CSSProperties} = {
    feature: {
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateAreas: `
            ".  .       .    "
            ".  Board   Stats"
            ".  Winner  .    "    
        `,
        gridTemplateRows: '1fr 60vw 1fr',
        gridTemplateColumns: '1fr 60vw 1fr',
        alignItems: 'center',
        justifyItems: 'center',
    },
    winner: {
        gridArea: 'Winner',
        textAlign: 'center',
        alignSelf: 'start',
    },
}

function Game() {

    const winnerId = useSelector(selectWinnerId);
    const playerSymbols = useSelector(selectPlayerSymbols);
    const gameOver = useSelector(selectGameOver);
    const { rowCount, colCount } = useSelector(selectRules);
    const winnerDiv = gameOver 
        ? winnerId === 0
            ? <span style={styles.winner}>No one rules these lands</span> 
            : <span style={styles.winner}>{playerSymbols[winnerId]} is the lord</span> 
        : "";

    return (
        <>
            <span>This is the game</span>
            <Board rows={rowCount} cols={colCount}/>
            {winnerDiv}
            <Hud />
        </>
    )
}




export default Game;