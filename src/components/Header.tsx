import React, { CSSProperties } from 'react';
import logo from '../svg/logo.svg';

import { selectIsConnected } from '../features/app/appSlice';
import { useSelector } from 'react-redux';

const styles: {[className: string]: CSSProperties} = {
    logo: {
        width: '20vw',
    },
    connectionStatus: {
        position: 'fixed',
        top: 0,
        right: 0,
        padding: '0.5em',
    }
}

interface OwnProps {
    pageName: string;
}

type Props = OwnProps;

function Header(props: Props) {

    const connectionStatus = <span style={styles.connectionStatus}
        >{useSelector(selectIsConnected) ? ':)' : ':('}</span>

    return (
        <div>
            <img
              src={logo}
              style={styles.logo}
              alt="website logo"
            />
            {connectionStatus}
            <p>{props.pageName}</p>
        </div>
    )
}

export default Header;