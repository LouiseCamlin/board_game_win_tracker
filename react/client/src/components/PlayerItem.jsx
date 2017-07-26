import React from 'react'

class PlayerItem extends React.Component {
  constructor(props){
    super(props)
  }


  deleteSelectedPlayer(event){
    this.props.onDeletePlayer(this.props.player.id)
  }

  editSelectedPlayer(event){
    this.props.onEditPlayer(this.props.player.id)
  }

  mapPlayerGameNodes() {
    const playerGameNodes = this.props.player.wins.map((win, index) => {
    //  var time = win.date.split("").slice(0, -14).join("")
      return <ul key={index}>
        <li>Game: {win.game.title}</li>
      <li> Date Played: {win.date}</li></ul>

    })
    return playerGameNodes
  }



  render(){

    const playerGameNodes = this.mapPlayerGameNodes()


    return(
      <div id="list-item">
        <p className="names">Name: {this.props.player.name}</p>
        <div className="deets">
          {playerGameNodes}
        </div>
        <button className="button" onClick={() => {this.deleteSelectedPlayer(this.props.player.id)}}>Delete</button>
        {/* <button onClick={() => {this.editSelectedPlayer(this.props.player.id)}}>Edit</button> */}
      </div>
    )
  }

}
export default PlayerItem
