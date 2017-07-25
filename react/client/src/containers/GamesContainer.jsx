import React from 'react'
import GameList from '../components/GameList.jsx'
import {Link} from 'react-router-dom'

class GamesContainer extends React.Component{

  constructor(props){
    super(props)

    this.state ={
      gameId: null,
      games: []
    }
  }

  getGameList() {
     const url = 'http://localhost:5000/api/games/'
     const request = new XMLHttpRequest();
     request.open('GET', url);
     request.onload = () => {
       if (request.status === 200) {
         const jsonData = request.responseText;
         const gameData = JSON.parse(jsonData);
         this.setState({games: gameData});
       }
     }
     request.send(null);
   }



  componentDidMount() {
     this.getGameList();

  }

  render() {
    console.log("games:", this.state.games);

    return(
      <div>
        <li><Link to="/Home">Home</Link></li>
          <h2>Games</h2>
          <GameList games={this.state.games} />
      </div>
    )
  }

 }

export default GamesContainer
