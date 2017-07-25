import React from 'react'

class PlayerItem extends React.Component {
  constructor(props){
    super(props)
  }


  mapPlayerGameNodes() {
    const playerGameNodes = this.props.games.map((win, index) => {
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
        <p id="player-names">Name: {this.props.name}</p>
        <div id="player-deets">
          {playerGameNodes}
        </div>
      </div>

)
}

}
export default PlayerItem
