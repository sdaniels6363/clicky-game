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
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Rally Car Memory Game</Title>
        {this.state.cars.map(cars => (
          <CarCard
            id={cars.id}
            key={cars.id}
            alt={cars.alt}
            src={cars.src}
          />
        ))};
      </Wrapper>
    );
  }
}

export default App;