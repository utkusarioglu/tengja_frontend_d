import React, { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMove, selectPlayerSymbols, selectWinnerId } from '../../features/game/gameSlice';

const styles: {[className: string]: CSSProperties} = {
    tile: {
        height: '20vw',
        maxHeight: '100px',
        width: '20vw',
        maxWidth: '100px',
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: 'min(10vw, 70px)',
    }
}

interface OwnProps {
    row: number;
    col: number;
    playState: number;
    // highlightState: number;
}

type Props = OwnProps



function Tile(props: Props) {
    const dispatch = useDispatch();
    const winner = useSelector(selectWinnerId);
    const playerSymbols = useSelector(selectPlayerSymbols)
    // const highlightColors = useSelector(selectHighlightColors);

    const { row, col, playState } = props;
    const mark = playerSymbols[playState];
    // const highlightColor = highlightColors[highlightState];

    const playerOnClick = () => {
        if(mark === playerSymbols[0] && winner === 0) {
            dispatch(addMove({
                // player: 1,
                row: row,
                col: col,
                time: 0 // !TODO
            }));
        }
    }

    const playerOnMouseEnter = () => {
        // console.log('playerOnMouseEnter', row, col);
    }

    const playerOnMouseLeave = () => {
        // console.log('playerOnMouseLeave', row, col);
    }

    return <div style={{
                    ...styles.tile,
                    // background: highlightColor
                }} 
                onClick={() => playerOnClick()} 
                onMouseEnter={() => playerOnMouseEnter()} 
                onMouseLeave={() => playerOnMouseLeave()}
                >
                {mark}
            </div>
}

export default Tile;