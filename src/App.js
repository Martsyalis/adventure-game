import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';

class App extends Component {
  state = { 
    playerOne:{ hp:10, action:'' },
    playerTwo:{ hp:10, action:'' },
  }

  changePlayerAction(player, action) {
    const playerState = this.state[player];
    playerState.action = action;
    return this.setState({ [player] : playerState });
  }

  handleAction = ({ key }) => {
    switch(key){
    case 'w':
      this.changePlayerAction('playerOne', 'quick');
      break;
    case 'e':
      this.changePlayerAction('playerOne' , 'heavy');
      break;
    default : break;
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleAction); 
  }

  render() {
    const { playerOne , playerTwo } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Parking Massacre</h1>
        </header>
        <Death hp ={[playerOne.hp, playerTwo.hp]}/>
        <Player player ={playerOne} setAction ={this.setAction}/>
        <Player player ={playerTwo} setAction ={this.setAction}/>
        {playerOne.action}
      </div>
    );
  }
}

export default App;