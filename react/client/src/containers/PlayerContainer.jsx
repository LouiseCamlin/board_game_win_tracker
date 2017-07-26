import React from 'react'
import PlayerList from '../components/PlayerList.jsx'
import {Link} from 'react-router-dom'

class PlayerContainer extends React.Component{

  constructor(props){
    super(props)

    this.state ={
      playerId: null,
      players: [],
      playerKeyUp: null
    }
  }

  addPlayer(newPlayerName){
    const url = 'http://localhost:5000/api/players/'
    const newPlayer = {player: { name: newPlayerName} }
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      this.getPlayerList()
    }
    request.send(JSON.stringify(newPlayer))
  }

  deletePlayer(id){
    const url = 'http://localhost:5000/api/players/' + id
    const request = new XMLHttpRequest();
    request.open('DELETE', url);
    request.onload = () => {
      console.log(request.status);
      this.getPlayerList()
    }
    request.send()
  }

  editPlayer(id, newPlayerName){
    const url = 'http://localhost:5000/api/players/' + id
    const updatedPlayer = {player: { name: newPlayerName} }
    const jsonString = JSON.stringify(updatedPlayer)
    const request = new XMLHttpRequest();
    request.open('PUT', url)
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      this.getPlayerList()
    }
    request.send(jsonString)


  }

  getPlayerList() {
     const url = 'http://localhost:5000/api/players/'
     const request = new XMLHttpRequest();
     request.open('GET', url);
     request.onload = () => {
       if (request.status === 200) {
         const jsonData = request.responseText;
         const playerData = JSON.parse(jsonData);
         this.setState({players: playerData});
       }
     }
     request.send(null);
   }

  componentDidMount() {
     this.getPlayerList();
  }

  render() {
    console.log("players:", this.state.players);

    return(
      <div>
        <ul className="nav-bar">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Games">Games</Link></li>
        <li><Link to="/New">Add New Winner</Link></li>
        </ul>
        <h2>Players</h2>
          <PlayerList onAddPlayer={this.addPlayer.bind(this)}
            onDeletePlayer={this.deletePlayer.bind(this)}
            onEditPlayer={this.editPlayer.bind(this)}
            players={this.state.players}
            playerKeyUp={this.state.playerKeyUp}/>
        </div>
    )
  }

 }

export default PlayerContainer
