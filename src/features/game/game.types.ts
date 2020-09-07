import { IGameRules } from '../gamesList/gamesList.types';

export type PlayerId = number;

export type IBoardLayout = PlayerId[][]

export interface IHighlight {
    row: number;
    col: number;
}

export type HighlightLayout = IHighlight[]

/**
 * Defines a single move
 */
export interface IMove {
    playerId: PlayerId;
    playerAbandon: boolean;
    moveSpecs: IMoveSpecs,
    tilePop: IPosition | false ,
    boardLayout: IBoardLayout;
    highlightLayout: HighlightLayout;
    gameOver: boolean;
}

export interface IMoveSpecs extends IPosition{
    time: number;
    // duration: number;
}

export interface IPosition {
    row: number;
    col: number;
}

/**
 * Defines the entirety of the game
 */
export interface IGame {
    winnerId: PlayerId;
    players: {
        active: PlayerId[];
        initial: PlayerId[];
    };
    // !TODO
    playerSymbols: {[playerId: number]: string}
    spectators: PlayerId[];
    moves: IMove[];
    rules: IGameRules;
    current: {
        playerId: PlayerId;
        time: number;
    }
    gameOver: boolean;
}


// r, c, direction, playerId
export interface IStreak {
    row: number;
    col: number;
    dir: 'h' | 'v' | 'rd' | 'ld';
    playerId: number;
}
// type Streak = [number, number, , number]
export interface IStreakStats {
    winnerId: number;
    gameOver: boolean;
    streaks: IStreak[];
}