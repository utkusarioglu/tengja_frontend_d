import {
  IStreak,
  IStreakStats,
  IBoardLayout,
  PlayerId,
  IPosition,
  IMoveSpecs,
} from "./game.types";
import { IGameRules } from "../gamesList/gamesList.types";
import { IMove } from "./game.types";

export function getMove(moves: IMove[], moveId: string): IMove {
  if (moveId === "last") {
    return moves[moves.length - 1];
  } else {
    // !TODO
    throw new Error("getMove by move id has not been implemented yet");
  }
}

export function updateBoardLayout(
  lastMove: IMove,
  position: IPosition,
  playerId: PlayerId
) {
  const lastBoardLayout = lastMove.boardLayout;
  // console.log('last board layout', lastBoardLayout)
  const { row, col } = position;
  lastBoardLayout[row][col] = playerId;
  return lastBoardLayout;
}

export function updateMoves(
  moves: IMove[],
  playerId: PlayerId,
  moveSpecs: IMoveSpecs,
  gameOver: boolean,
  boardLayout: IBoardLayout
): IMove[] {
  return [
    ...moves,
    {
      playerId,
      playerAbandon: false,
      moveSpecs,
      tilePop: false,
      highlightLayout: [],
      gameOver,
      boardLayout,
    },
  ];
}

export function getNextPlayer(
  playerId: PlayerId,
  activePlayers: PlayerId[]
): PlayerId {
  const currentId = activePlayers.indexOf(playerId);
  if (activePlayers.length - 1 <= currentId) {
    return activePlayers[0];
  } else {
    return activePlayers[currentId + 1];
  }
}

export function evaluateBoard(
  boardlayout: IBoardLayout,
  rules: IGameRules
): IStreakStats {
  const streaks: IStreak[] = [];
  let winnerId = 0;
  let gameOver = false;
  const { streakLength, winMode } = rules;
  const streakRange = [...Array(streakLength).keys()];
  for (let row = 0; row < boardlayout.length; row++) {
    for (let col = 0; col < boardlayout[row].length; col++) {
      const horizontal = streakRange
        .map((pos) => {
          try {
            const player = boardlayout[row][col + pos];
            return player;
          } catch (e) {
            return 0;
          }
        })
        .reduce((p, c) => (p === -1 || p === c ? c : 0), -1);
      if (!!horizontal) {
        streaks.push({ row, col, dir: "h", playerId: horizontal });
      }

      const vertical = streakRange
        .map((pos) => {
          try {
            const player = boardlayout[row + pos][col];
            return player;
          } catch (e) {
            return 0;
          }
        })
        .reduce((p, c) => (p === -1 || p === c ? c : 0), -1);
      if (!!vertical) {
        streaks.push({ row, col, dir: "v", playerId: vertical });
      }

      const rightDiag = streakRange
        .map((pos) => {
          try {
            const player = boardlayout[row + pos][col + pos];
            return player;
          } catch (e) {
            return 0;
          }
        })
        .reduce((p, c) => (p === -1 || p === c ? c : 0), -1);
      if (!!rightDiag) {
        streaks.push({ row, col, dir: "rd", playerId: rightDiag });
      }

      const leftDiag = streakRange
        .map((pos) => {
          try {
            const player = boardlayout[row + pos][col - pos + streakLength - 1];
            return player;
          } catch (e) {
            return 0;
          }
        })
        .reduce((p, c) => (p === -1 || p === c ? c : 0), -1);
      if (!!leftDiag) {
        streaks.push({ row, col, dir: "ld", playerId: leftDiag });
      }
    }
  }
  if (streaks.length > 0) {
    switch (winMode) {
      case "firstStreak":
        winnerId = streaks[0].playerId;
        gameOver = true;
        break;
      case "mostStreaks":
        gameOver = true;
        // !TODO
        break;
    }
  }

  const boardFull = boardlayout.every((row) => row.every((tile) => tile !== 0));
  if (boardFull) {
    gameOver = true;
  }

  return {
    winnerId,
    gameOver,
    streaks,
  };
}
