import React from "react";
import "./style.css";

function PlayerMessage(props) {
    return (
        <div className="player-msg">
            <h5 className="message">{props.message}</h5>
        </div>
    );
}

export default PlayerMessage;
