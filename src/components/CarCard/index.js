import React from "react";
import "./style.css"

function CarCard(props) {
    return (
        <div className="img-container">
            <button onClick={props.toggle} data-clicked={props.clicked}>
                <img
                    alt={props.alt}
                    src={props.src}
                />
            </button>
        </div>
    )
}

export default CarCard;