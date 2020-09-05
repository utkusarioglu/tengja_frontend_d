import React from 'react';
import { IGameListing } from '../features/gameList/gamesList.types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
    gameListing: IGameListing
};

function GameListing(props: Props) {

    const classes = useStyles();

    const {
        gameName,
        rowCount,
        colCount,
        streakLength,
        maxPlayerCount,
        exactPlayerCount,
        timeLimit,
        winMode,
        tilePop
    } = props.gameListing;

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
            {gameName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {winMode}
            </Typography>
            <Typography variant="body2" component="p">
              Dimensions: {rowCount} x {colCount}
            </Typography>
            <Typography variant="body2" component="p">
              Streak: {streakLength}
            </Typography>
            <Typography variant="body2" component="p">
              Players: {exactPlayerCount} of {maxPlayerCount}
            </Typography>
            <Typography variant="body2" component="p">
              Time limit: {timeLimit}
            </Typography>
            <Typography variant="body2" component="p">
              Tile pop: {tilePop ? "on" : "off"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Join</Button>
          </CardActions>
        </Card>
      );
}

export default GameListing