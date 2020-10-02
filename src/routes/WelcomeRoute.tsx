import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import logo from "../svg/logo.svg";
import { useSelector } from "react-redux";
import { selectIsConnected } from "../features/app/appSlice";

const styles: {
  [className: string]: CSSProperties;
} = {
  logo: {
    padding: "10vw",
    width: "80vw",
  },
};

function Welcome() {
  const isConnected = useSelector(selectIsConnected);

  return (
    <>
      <img src={logo} style={styles.logo} alt="website logo" />{" "}
      {isConnected ? (
        <div>
          <Link to="/play/player-create">
            <button>Play</button>
          </Link>
          <Link to="/watch">
            <button>Watch</button>
          </Link>
        </div>
      ) : (
        <p>Connecting</p>
      )}{" "}
    </>
  );
}

export default Welcome;
