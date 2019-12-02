import React from "react";
import "./style.css"

function CarCard(props) {
    return (
        <div className="img-container">
            <a href="#" onClick={props.toggle} data-clicked={props.clicked}>
                <img
                    alt={props.alt}
                    src={props.src}
                />
            </a>
        </div>
    )
}

export default CarCard;