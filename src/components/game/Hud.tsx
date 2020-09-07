import React, { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPlayerId, selectRoundNo, selectPlayerSymbols, selectGameOver } from '../../features/game/gameSlice';

const styles: {[className: string]: CSSProperties } = {
    hud: {
        display: 'grid',
        gridAutoFlow: 'row',
        width: '100px',
        background: '#eeeeee',
        gridArea: 'Stats',
        alignContent: 'center',
        justifyContent: 'center',
    },
    roundNo: {
        padding: '15px',
        textAlign: 'center',
    },
    activePlayerSymbol: {
        // height: '70px',
        // color: 'red',
        textAlign: 'center',
    }
}

function Hud() {
    const gameOver = useSelector(selectGameOver);
    const playerSymbols = useSelector(selectPlayerSymbols);
    console.log('playerss', playerSymbols)
    const currentPlayerId = useSelector(selectCurrentPlayerId);
    console.log('current player id', currentPlayerId)
    const activePlayerSymbol = !gameOver 
        ? playerSymbols[currentPlayerId] 
        : " ";
    const roundNo = useSelector(selectRoundNo);

    return (
        <div className="Hud" style={styles.hud}>
            <h1 style={styles.activePlayerSymbol}>{activePlayerSymbol}</h1>
            <span style={styles.roundNo}>{roundNo}</span>
        </div>
    )
}

export default Hud;