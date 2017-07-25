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

  deletePlayer(){
    const url = 'http://localhost:5000/api/players/' + id
    const request = new XMLHttpRequest();
    request.open('DELETE', url);
    request.onload = () => {
      
    }
  }

  editPlayer(){

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
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Games">Games</Link></li>
        <li><Link to="/New">Add New Winner</Link></li>
        <h2>Players</h2>
          <PlayerList onAddPlayer={this.addPlayer.bind(this)} players={this.state.players} playerKeyUp={this.state.playerKeyUp}/>
        </div>
    )
  }

 }

export default PlayerContainer
