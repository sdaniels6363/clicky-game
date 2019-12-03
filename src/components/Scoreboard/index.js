import React from "react";
import "./style.css";

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <h5 className="score">Current Score: {props.score}</h5>
            <h5>High Score: {props.highscore}</h5>
        </div>
    );
}

export default Scoreboard;
