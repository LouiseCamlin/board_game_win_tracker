import React from 'react'

class PlayerItem extends React.Component {
  constructor(props){
    super(props)
  }


  deleteSelectedPlayer(event){
    this.props.onDeletePlayer(this.props.player.id)
  }

  mapPlayerGameNodes() {
    const playerGameNodes = this.props.player.wins.map((win, index) => {
      var time = win.date.split("").slice(0, -14).join("")
      return <ul key={index}>
        <li>Game: {win.game.title}</li>
      <li> Date Played: {time}</li></ul>

    })


    return playerGameNodes
  }



  render(){

    const playerGameNodes = this.mapPlayerGameNodes()


    return(
      <div id="list-item">
        <p id="player-names">Name: {this.props.player.name}</p>
        <div id="player-deets">
          {playerGameNodes}
        </div>
        <button key={this.props.player.id} onClick={() => {this.deleteSelectedPlayer(this.props.player.id)}}>Delete</button>
      </div>

)
}

}
export default PlayerItem
