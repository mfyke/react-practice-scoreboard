import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };

  //player id counter

  prevPlayerid = 4;



  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    
  }

  HandleAddPlayer = (name) => {
    this.setState( prevState => {
        return {
          players: [
            ...prevState.players,
            {
              name: name,
              score: 0,
              id: this.prevPlayerid +=1
            }
          ]
        }
    });
  }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            isHighScore={highScore === player.score}
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()}
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm
          addPlayer = {this.HandleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
