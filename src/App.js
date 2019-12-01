// imports
import React, { Component } from "react";
import CarCard from "./components/CarCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./cars.json";
import Scoreboard from "./components/Scoreboard";

// functions

function randomizeCars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

// randomize the order of the cars to render.
randomizeCars(cars)

class App extends Component {
  state = {
    cars
  };

  toggleClicked = id => {
    const cars = this.state.cars.filter(car => car.id !== id);
    this.setState({ cars });
    randomizeCars(cars)
  };

  render() {
    return (
      <Wrapper>
        <Title>Rally Car Memory Game</Title>
        <Scoreboard />
        <div className="row">
          <div className="col-md-3">
            {this.state.cars.map(car => (
              <CarCard
                id={car.id}
                key={car.id}
                alt={car.alt}
                src={car.src}
              />
            ))};
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;