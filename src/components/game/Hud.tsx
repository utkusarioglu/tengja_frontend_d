import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPlayerId, selectRoundNo, selectPlayerSymbols, selectGameOver } from '../../features/game/gameSlice';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// const styles: {[className: string]: CSSProperties } = {
//     hud: {
//         position: 'fixed',
//         bottom: 0,
//         display: 'grid',
//         gridAutoFlow: 'column',
//         width: '100px',
//         background: '#eeeeee',
//         gridArea: 'Stats',
//         alignContent: 'center',
//         justifyContent: 'center',
//     },
//     roundNo: {
//         padding: '15px',
//         textAlign: 'center',
//     },
//     activePlayerSymbol: {
//         // height: '70px',
//         // color: 'red',
//         textAlign: 'center',
//     }
// }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // text: {
    //   padding: theme.spacing(2, 2, 0),
    // },
    // paper: {
    //   paddingBottom: 50,
    // },
    // list: {
    //   marginBottom: theme.spacing(2),
    // },
    // subheader: {
    //   backgroundColor: theme.palette.background.paper,
    // },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    // grow: {
    //   flexGrow: 1,
    // },
    // fabButton: {
    //   position: 'absolute',
    //   zIndex: 1,
    //   top: -30,
    //   left: 0,
    //   right: 0,
    //   margin: '0 auto',
    // },
  }),
);

function Hud() {
    const classes = useStyles();
    const gameOver = useSelector(selectGameOver);
    const playerSymbols = useSelector(selectPlayerSymbols);
    const currentPlayerId = useSelector(selectCurrentPlayerId);
    const activePlayerSymbol = !gameOver 
        ? playerSymbols[currentPlayerId] 
        : "";
    const roundNo = useSelector(selectRoundNo);

    // return (
    //     <div className="Hud" style={styles.hud}>
    //         <h1 style={styles.activePlayerSymbol}>{activePlayerSymbol}</h1>
    //         <span style={styles.roundNo}>{roundNo}</span>
    //     </div>
    // )
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <Typography>{activePlayerSymbol}</Typography>
                <Typography>{roundNo}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Hud;