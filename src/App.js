import React, { Component } from "react";
import CarCard from "./components/CarCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./cars.json";


class App extends Component {
  state = {
    cars
  };

  toggleClicked = id => {
    const cars = this.state.cars.filter(car => car.id !== id);
    this.setState({ cars });
  };

  render() {
    return (
      <Wrapper>
        <Title>Rally Car Memory Game</Title>
        {this.state.cars.map(car => (
          <CarCard
            id={car.id}
            key={car.id}
            alt={car.alt}
            src={car.src}
          />
        ))};
      </Wrapper>
    );
  }
}

export default App;