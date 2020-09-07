import React, { CSSProperties } from 'react';
import logo from '../../svg/logo.svg';
import { Link } from 'react-router-dom';
import { send } from '@giantmachines/redux-websocket';

import { selectIsConnected, clearSubscriptions } from '../../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';

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
    const dispatch = useDispatch();
    const connectionStatus = <span style={styles.connectionStatus}
        >{useSelector(selectIsConnected) ? ':)' : ':('}</span>;

    const clickClearSubscriptions = () => {
        dispatch(send({
            unsubscribe: true,
        }));
        dispatch(clearSubscriptions())
    }

    const pageName = props.pageName !== ""
        ? <span>{props.pageName}</span>
        : []

    return (
        <div>
            <Link to='/' onClick={clickClearSubscriptions}>
                <img
                    src={logo}
                    style={styles.logo}
                    alt="website logo"
                    />
            </Link>
            {connectionStatus}
            {pageName}
        </div>
    )
}

export default Header;