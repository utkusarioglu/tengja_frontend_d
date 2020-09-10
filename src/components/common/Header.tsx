import React, { CSSProperties } from 'react';
import logo from '../../svg/logo.svg';
import { Link } from 'react-router-dom';
import { send } from '@giantmachines/redux-websocket';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface OwnProps {
    pageName: string;
}

type Props = OwnProps;

function Header(props: Props) {
    const classes = useStyles();
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
        ? (
            <Toolbar>
                <Typography>{props.pageName}</Typography>
            </Toolbar>
        )
        : []

    // return (
    //     <div>
    //         <Link to='/' onClick={clickClearSubscriptions}>
    //             <img
    //                 src={logo}
    //                 style={styles.logo}
    //                 alt="website logo"
    //                 />
    //         </Link>
    //         {connectionStatus}
    //         {pageName}
    //     </div>
    // )

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Link to='/' onClick={clickClearSubscriptions}>
                    <img
                        src={logo}
                        style={styles.logo}
                        alt="website logo"
                        />
                </Link>
                <Button color="inherit">{connectionStatus}</Button>
            </Toolbar>
            {pageName}
        </AppBar>
    )
}

export default Header;