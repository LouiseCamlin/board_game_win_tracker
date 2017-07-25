import React from 'react'
import PlayerList from '../components/PlayerList.jsx'

class PlayerContainer extends React.Component{

  constructor(props){
    super(props)

    this.state ={
      playerId: null,
      players: []
    }
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
        <h2>Players</h2>
          <PlayerList players={this.state.players} />
        </div>
    )
  }

 }

export default PlayerContainer
