import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMove, selectPlayerSymbols, selectWinnerId } from '../../features/game/gameSlice';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

// const styles: {[className: string]: CSSProperties} = {
//     tile: {
//         height: '20vw',
//         maxHeight: '100px',
//         width: '20vw',
//         maxWidth: '100px',
//         display: 'grid',
//         alignContent: 'center',
//         justifyContent: 'center',
//         cursor: 'pointer',
//         fontSize: 'min(10vw, 70px)',
//     }
// }

interface OwnProps {
    row: number;
    col: number;
    playState: number;
    // highlightState: number;
}

type Props = OwnProps


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        // '& $imageBackdrop': {
        //   opacity: 0.15,
        // },
        '& $imageMarked': {
          opacity: 0,
        },
        // '& $imageTitle': {
        //   border: '4px solid currentColor',
        // },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.black,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      // !TODO learn about mui palettes
    //   backgroundColor: theme.palette.common.white,
      backgroundColor: '#eeeeee',
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    // imageMarked: {
    //   height: 3,
    //   width: 18,
    //   backgroundColor: theme.palette.common.white,
    //   position: 'absolute',
    //   bottom: -2,
    //   left: 'calc(50% - 9px)',
    //   transition: theme.transitions.create('opacity'),
    // },
  }),
);



function Tile(props: Props) {
    const classes = useStyles();
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

    // return <div style={{
    //                 ...styles.tile,
    //                 // background: highlightColor
    //             }} 
    //             onClick={() => playerOnClick()} 
    //             onMouseEnter={() => playerOnMouseEnter()} 
    //             onMouseLeave={() => playerOnMouseLeave()}
    //             >
    //             {mark}
    //         </div>
    return (
        <ButtonBase
            focusRipple
            // key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            onClick={playerOnClick} 
            onMouseEnter={playerOnMouseEnter} 
            onMouseLeave={playerOnMouseLeave}
            style={{
              width: '1fr',
              height: '1fr',
            }}
        >
        <span
          className={classes.imageSrc}
        //   style={{
        //     backgroundImage: `url(${image.url})`,
        //   }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="h2"
            color="inherit"
            className={classes.imageTitle}
          >
            {mark}
            {/* <span className={classes.imageMarked} /> */}
          </Typography>
        </span>
      </ButtonBase>
    )
}

export default Tile;