// imports
import React, { Component } from "react";
import CarCard from "./components/CarCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./cars.json";
import Scoreboard from "./components/Scoreboard";
import PlayerMessage from "./components/PlayerMessage"

// functions

function randomizeCars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

function fourPerRow(array, start, end) {
  const newRow = []
  for (let i = start; i <= end; i++) {
    newRow.push(array[i])
  }
  return newRow;
}

class App extends Component {
  state = {
    highscore: 0,
    score: 0,
    cars,
    row1: fourPerRow(cars, 0, 3), 
    row2: fourPerRow(cars, 4, 7),
    row3: fourPerRow(cars, 8, 11),
    message: ""
  };

  componentDidMount() {
    randomizeCars(this.state.cars);
    this.setState({cars})
    this.setState({row1: fourPerRow(cars, 0, 3)})
    this.setState({row2: fourPerRow(cars, 4, 7)})
    this.setState({row3: fourPerRow(cars, 8, 11)})
  }


  toggleClicked = event => {
    event.preventDefault();

    // get the clicked car name
    let clickedCar = event.target.alt;

    // find car out of cars array, filter returns array, so have to retrieve index 0
    let filtered = cars.filter(car => car.alt === clickedCar)[0];

    // get index of that car
    let carIdx = cars.indexOf(filtered);
    if (filtered.clicked === false) {
      cars[carIdx].clicked = true;
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
      if (newScore === 12) {
        this.setState({ message: "You Win!" });
        this.setState({ highscore: newScore });
      } else {
        this.setState({ message: "You guessed correctly." });
      }
    } else if (filtered.clicked === true) {
      // if user selects a car they've already chosen, reset all cars to false and start over
      cars.map(car => (car.clicked = false));

      let currScore = this.state.score;
      let currHigh = this.state.highscore;

      if (currScore >= currHigh) {
        // update high score
        this.setState({ highscore: currScore });
        // reset score to 0
        this.setState({ score: 0 });
      } else {
        // reset score to 0
        this.setState({ score: 0 });
      }
      this.setState({ message: "Incorrect guess, you lose." });
    } else {
      // pass silently
    }

    randomizeCars(this.state.cars);
    this.setState({cars})
    this.setState({row1: fourPerRow(cars, 0, 3)})
    this.setState({row2: fourPerRow(cars, 4, 7)})
    this.setState({row3: fourPerRow(cars, 8, 11)})

  };

  render() {
    return (
      <Wrapper>
        <Title>Rally Car Memory Game</Title>
        <Scoreboard highscore={this.state.highscore} score={this.state.score} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {this.state.row1.map(car => (
                  <CarCard
                    id={car.id}
                    key={car.id}
                    alt={car.alt}
                    src={car.src}
                    clicked={car.clicked}
                    toggle={this.toggleClicked}
                  />
                ))}
              </div>
              <div className="row">
                {this.state.row2.map(car => (
                  <CarCard
                    id={car.id}
                    key={car.id}
                    alt={car.alt}
                    src={car.src}
                    clicked={car.clicked}
                    toggle={this.toggleClicked}
                  />
                ))}

              </div>
              <div className="row">
                {this.state.row3.map(car => (
                  <CarCard
                    id={car.id}
                    key={car.id}
                    alt={car.alt}
                    src={car.src}
                    clicked={car.clicked}
                    toggle={this.toggleClicked}
                  />
                ))}

              </div>

            </div>
          </div>
        </div>
        <PlayerMessage message={this.state.message} />
      </Wrapper>
    );
  }
}

export default App;