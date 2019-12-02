import React from "react";
import "./style.css";

function PlayerMessage(props) {
    return (
        <div className="player-msg">
            <h3 className="message">{props.message}</h3>
        </div>
    );
}

export default PlayerMessage;
