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

function fourPerRow(array, start, end) {
  const newRow = []
  for (let i = start; i <= end; i++) {
    newRow.push(array[i])
  }
  return newRow;
}


// randomize the order of the cars to render.
randomizeCars(cars)
const row1 = fourPerRow(cars, 0, 3);
const row2 = fourPerRow(cars, 4, 7);
const row3 = fourPerRow(cars, 8, 11);


class App extends Component {
  state = {
    cars,
    highscore: 0,
    score: 0
  };

  toggleClicked = (event) => {
    event.preventDefault()

    // get the clicked car name
    let clickedCar = event.target.alt;

    // filter the cars array for that car
    this.state.cars.filter(car => {
      if (clickedCar === car.alt && car.clicked === false) {

        car.clicked = true
        let newScore = this.state.score + 1
        this.setState({ score: newScore })

      } else if (clickedCar === car.alt && car.clicked === true) {

        let currScore = this.state.score
        let currHigh = this.state.highscore

        if (currScore >= currHigh) {
          // update high score
          this.setState({ highscore: currScore })
          // reset score to 0
          this.setState({ score: 0 })
        } else {
          // reset score to 0
          this.setState({ score: 0 })
        }

      } else {
        // pass silently
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>Rally Car Memory Game</Title>
        <Scoreboard highscore={this.state.highscore} score={this.state.score} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {row1.map(car => (
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
                {row2.map(car => (
                  <CarCard
                    id={car.id}
                    key={car.id}
                    alt={car.alt}
                    src={car.src}
                    clicked={car.clicked}
                    onClick={this.toggleClicked}
                  />
                ))}

              </div>
              <div className="row">
                {row3.map(car => (
                  <CarCard
                    id={car.id}
                    key={car.id}
                    alt={car.alt}
                    src={car.src}
                    clicked={car.clicked}
                    onClick={this.toggleClicked}
                  />
                ))}

              </div>

            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;