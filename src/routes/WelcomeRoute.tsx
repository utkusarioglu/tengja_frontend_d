import React from 'react';
import {Link} from "react-router-dom";

function Welcome() {
    return (
        <>
            <h1>Tenjga</h1>
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