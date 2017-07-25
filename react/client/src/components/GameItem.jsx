import React from 'react'

class GameItem extends React.Component {
  constructor(props){
    super(props)
  }


  mapGamePlayerNodes() {
    const gamePlayerNodes = this.props.players.map((win, index) => {
      var time = win.player.created_at.split("").slice(0, -14).join("")
      return <ul key={index}>
        <li>Player: {win.player.name}</li>
      <li> Date Played: {time}</li>
    </ul>

    })


    return gamePlayerNodes
  }



  render(){

    const gamePlayerNodes = this.mapGamePlayerNodes()


    return(
      <div id="list-item">
        <p id="winner-names">Name: {this.props.title}</p>
        <div id="game-deets">
          {gamePlayerNodes}
        </div>
      </div>
    )
  }

}
export default GameItem
