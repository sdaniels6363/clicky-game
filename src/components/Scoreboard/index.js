import React from "react";
import "./style.css";

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <h3 className="score">Current Score: {props.score}</h3>
            <h3 className="score">High Score: {props.highscore}</h3>
        </div>
    );
}

export default Scoreboard;
