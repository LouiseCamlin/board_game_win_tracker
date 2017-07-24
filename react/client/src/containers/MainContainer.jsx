import React from 'react'
import PlayerList from '../components/PlayerList.jsx'

class MainContainer extends React.Component{

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

  //  getGameList() {
  //
  //   const url = 'http://localhost:5000/api/games/'
  //   const request = new XMLHttpRequest();
  //   request.open('GET', url);
  //   request.onload = () => {
  //     if (request.status === 200) {
  //       const jsonData = request.responseText;
  //       const gameData = JSON.parse(jsonData);
  //       const gameList = gameData.results;
  //       gameList.forEach((game, index) => {
  //         game.id = index;
  //       });
  //       this.setState({gameList: gameList});
  //     }
  //   }
  //   request.send(null);
  // }


  componentDidMount() {
     this.getPlayerList();

  }

  render() {
    console.log("players:", this.state.players);
    
    return(
      <PlayerList players={this.state.players} />
    )
  }

 }

export default MainContainer
