import React from 'react'

class GameItem extends React.Component {
  constructor(props){
    super(props)
  }

  deleteSelectedGame(event){
    this.props.onDeleteGame(this.props.game.id)
  }

  editSelectedGame(event) {
    this.props.onEditGame(this.props.player.id)
  }


  mapGamePlayerNodes() {
    const gamePlayerNodes = this.props.game.wins.map((win, index) => {
      var time = win.date.split("").slice(0, -14).join("")
      return <ul key={index}>
        <li>Winner: {win.player.name}</li>
      <li> Date Played: {time}</li>
    </ul>

    })
    return gamePlayerNodes
  }



  render(){

    const gamePlayerNodes = this.mapGamePlayerNodes()


    return(
      <div id="list-item">
        <p id="winner-names">Name: {this.props.game.title}</p>
        <div id="game-deets">
          {gamePlayerNodes}
        </div>
        <button onClick={() => {this.deleteSelectedGame(this.props.game.id)}} >Delete</button>
        <button onClick={() => {this.editSelectedPlayer(this.props.game.id)}} >Edit</button>
      </div>
    )
  }

}
export default GameItem
