import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface OwnProps {
    winnerSymbol: string;
}

type Props = OwnProps

const styles: {[className: string]: CSSProperties} = {
    frame: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'white',
    }
}

function WinScreen(props: Props) {


    return (
        <>
            <div style={styles.frame}>
                <h1>{props.winnerSymbol} wins the game</h1>
                <Link 
                    to={`/game/${Math.random().toString().slice(-5, -1)}`}
                    ><button>Play again</button>
                </Link>
            </div>

        </>
    )
}

export default WinScreen;