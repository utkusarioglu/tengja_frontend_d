import React, { CSSProperties } from 'react';
import {Link} from "react-router-dom";
import logo from '../svg/logo.svg';

const styles: {[className: string]: CSSProperties} = {
    logo: {
        padding: '10vw',
        width: '80vw',
    }
}

function Welcome() {
    return (
        <>
            <img
              src={logo}
              style={styles.logo}
              alt="website logo"
            />
            <div>
                <Link to="/play/player-create">
                    <button>Play</button>
                </Link>
                <Link to="/watch">
                    <button>Watch</button>
                </Link>
            </div>
        </>
    )
}

export default Welcome;