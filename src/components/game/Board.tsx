import React, { CSSProperties } from "react";
import Tile from "./Tile";
import { selectBoardLayout } from "../../features/game/gameSlice";
import { useSelector } from "react-redux";

interface OwnProps {
  rows: number;
  cols: number;
}

type Props = OwnProps;

const styles: { [className: string]: CSSProperties } = {
  row: {
    display: "grid",
    gridAutoFlow: "column",
  },
  board: {
    gridArea: "Board",
    display: "grid",
    width: "100vw",
    height: "max-content",
  },
};

function Board(props: Props) {
  const { rows, cols } = props;
  const boardLayout = useSelector(selectBoardLayout);
  // const highlightState = useSelector(selectHighlightState);

  if (rows <= 3) {
    process.env.NODE_ENV === "production" && console.log("hello");
  }

  const tiles = Array.from({ length: rows }, (_, r) => r).map((row) => {
    const rowTiles = Array.from({ length: cols }, (_, c) => c).map((col) => {
      const key = row + ":" + col;
      return (
        <Tile
          key={key}
          row={row}
          col={col}
          playState={boardLayout[row][col]}
          // highlightState={highlightState[row][col]}
        />
      );
    });
    return (
      <div className="Board-row" style={styles.row} key={row}>
        {rowTiles}
      </div>
    );
  });

  return (
    <div className="Board" style={styles.board}>
      {tiles}
    </div>
  );
}

export default Board;
