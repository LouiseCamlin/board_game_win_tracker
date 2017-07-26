import React from 'react'
import PlayerItem from './PlayerItem'


class PlayerList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newPlayer: ""
    }
  }

  submitNewPlayer(event) {
    event.preventDefault()
    this.props.onAddPlayer(this.state.newPlayer)
  }

  playerKeyUp(event){
    this.setState({
      newPlayer: event.target.value
    })
  }

  render() {

    const playerItem = this.props.players.map((player, index) => {
      return (
        <div>
        <PlayerItem key={index} value={index} player={player}
          onDeletePlayer={this.props.onDeletePlayer}
          onEditPlayer={this.props.onEditPlayer}/>

      </div>
      )

    })

    return (


      <div id="player-list">
        <form onSubmit={this.submitNewPlayer.bind(this)}>
          <input id="player-input" type="text" onChange={this.playerKeyUp.bind(this)} value={this.state.newPlayer} placeholder="Enter Player" />
          <input type="submit" name="submit" value="Add New Player!" />
        </form>
        <a>
          {playerItem}
        </a>
      </div>
    );
  }
}

export default PlayerList
