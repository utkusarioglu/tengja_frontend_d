import React, { CSSProperties } from 'react';

import { useSelector } from 'react-redux';
import { selectWinnerId, selectPlayerSymbols, selectGameOver, selectRules } from '../../features/game/gameSlice';

import Board from './Board';
import Hud from './Hud';
import WinScreen from './WinScreen';

const styles: {[className: string]: CSSProperties} = {
    // feature: {
    //     height: '100%',
    //     width: '100%',
    //     display: 'grid',
    //     gridTemplateAreas: `
    //         ".    "
    //         "Board"
    //         ".    "    
    //     `,
    //     gridTemplateRows: 'auto 100vw auto',
    //     gridTemplateColumns: '1fr 60vw 1fr',
    //     alignItems: 'center',
    //     justifyItems: 'center',
    // },
    game: {
        height: '100vh',
        width: '100vw',
        display: 'grid',
        gridTemplateAreas: `
            ".    "
            "Board"
            ".    "    
        `,
        gridTemplateRows: '1fr 100vw 1fr',
    }
}

function Game() {

    const winnerId = useSelector(selectWinnerId);
    const playerSymbols = useSelector(selectPlayerSymbols);
    const gameOver = useSelector(selectGameOver);
    const { rowCount, colCount } = useSelector(selectRules);
    const winnerDiv = gameOver 
        ? winnerId === 0
            // ? <span style={styles.winner}>No one rules these lands</span> 
            // : <span style={styles.winner}>{playerSymbols[winnerId]} is the lord</span>
            ? <WinScreen winnerSymbol={"No one"} />
            : <WinScreen winnerSymbol={playerSymbols[winnerId]} />
        : "";

    return (
        <div style={styles.game}>
            <span>This is the game</span>
            <Board rows={rowCount} cols={colCount}/>
            <Hud />
            {winnerDiv}
        </div>
    )
}




export default Game;