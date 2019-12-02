import React from "react";
import "./style.css";

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <h3 className="score"><span className="textAlignLeft">Current Score: {props.score}</span><span className="textAlignRight">High Score: {props.highscore}</span></h3>
        </div>
    );
}

export default Scoreboard;
