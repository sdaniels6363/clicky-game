import React, { Component } from "react";
import "./style.css"

class CarCard extends Component {
    state = {
        clicked: false
    }

    toggleClicked = () => {
        this.setState({ clicked: true }, (this.state.clicked) ? alert("already clicked") : alert("good choice"))
    }

    render() {
        return (
            <div className="card">
                <div className="img-container">
                    <a href="#" onClick={this.toggleClicked}>
                        <img 
                            alt={this.props.alt}
                            src={this.props.img}
                        />
                    </a>
                </div>
            </div>
        );
    }
}
export default CarCard;