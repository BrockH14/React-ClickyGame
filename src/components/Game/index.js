import React, { Component } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Wrapper from "../Wrapper";
import Card from "../Card";
import data from "../../avatar.json";

class Game extends Component {
    state = {
      data,
      score: 0,
      highScore: 0
    };
    
    componentDidMount() {
      this.setState({ data: this.shuffleData(this.state.data) });
    }

    handleCorGuess = newData => {
      const { highScore, score } = this.state;
      const newScore = score + 1;
      const newHighScore = Math.max(newScore, highScore);
  
      this.setState({
        data: this.shuffleData(newData),
        score: newScore,
        highScore: newHighScore
      });
    };
  
    handleIncorGuess = data => {
      this.setState({
        data: this.resetData(data),
        score: 0
      });
    };
  
    resetData = data => {
      const resetData = data.map(item => ({ ...item, clicked: false }));
      return this.shuffleData(resetData);
    };
  
    shuffleData = data => {
      let i = data.length - 1;
      while (i > 0) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        i--;
      }
      return data;
    };
  
    handleClick = id => {
      let guessCor = false;
      const newData = this.state.data.map(item => {
        const newItem = { ...item };
        if (newItem.id === id) {
          if (!newItem.clicked) {
            newItem.clicked = true;
            guessCor = true;
          }
        }
        return newItem;
      });
      guessCor
        ? this.handleCorGuess(newData)
        : this.handleIncorGuess(newData);
    };
  
    render() {
      return (
        <div>
          <Navbar score={this.state.score} highScore={this.state.highScore} />
          <Header />
          <Wrapper>
            {this.state.data.map(item => (
              <Card
                key={item.id}
                id={item.id}
                handleClick={this.handleClick}
                image={item.image}
              />
            ))}
          </Wrapper>
        </div>
      );
    }
  }
  
  export default Game;
  