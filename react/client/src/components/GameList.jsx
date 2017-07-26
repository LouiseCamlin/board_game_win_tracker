import React from 'react'
import GameItem from './GameItem'


class GameList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newGame: ""
    }
  }

  gameKeyUp(event) {
    this.setState({
      newGame: event.target.value
    })
  }

  submitNewGame(event){
    event.preventDefault()
    this.props.onAddGame(this.state.newGame)
  }

  render() {

     const gameItem = this.props.games.map((game, index) => {
    return (
      <GameItem key={index} value={index} game={game}
      onDeleteGame={this.props.onDeleteGame}
      onEditGame={this.props.onDeleteGame}/>
      )

    })

     return (

       <div id="game-list">
         <form onSubmit={this.submitNewGame.bind(this)}>
           <input id="game-input" type="text" onChange={this.gameKeyUp.bind(this)} value={this.state.newGame} placeholder="Enter Game" />
           <input type="submit" name="submit" value="Add New Game!" />
         </form>
         <a>
           {gameItem}
         </a>
       </div>
     );
   }

}

export default GameList
