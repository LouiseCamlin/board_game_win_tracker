import React from 'react'
import GameList from '../components/GameList.jsx'
import {Link} from 'react-router-dom'

class GamesContainer extends React.Component{

  constructor(props){
    super(props)

    this.state ={
      gameId: null,
      games: [],
      gameKeyUp: null
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

   addGame(newGameName){
     const url = 'http://localhost:5000/api/games/'
     const newGame = {game: { title: newGameName} }
     const request = new XMLHttpRequest();
     request.open('POST', url);
     request.setRequestHeader("Content-Type", "application/json")
     request.onload = () => {
       this.getGameList()
     }
     request.send(JSON.stringify(newGame))
   }

   editGame(id, newGameName) {
     const url = 'http://localhost:5000/api/games/' + id
     const updatedGame = {game: {title: newGameName}}
     const request = new XMLHttpRequest();
     request.open('PUT', url)
     request.setRequestHeader("Content-Type", "application/json")
     request.onload = () => {
       this.getGameList()
     }
     request.send(JSON.stringify(updatedGame))
   }

   deleteGame(id){
     const url = 'http://localhost:5000/api/games/' + id
     const request = new XMLHttpRequest();
     request.open('DELETE', url);
     request.onload = () => {
       this.getGameList()
     }
     request.send()
   }



  componentDidMount() {
     this.getGameList();

  }

  render() {
    console.log("games:", this.state.games);

    return(
      <div className="main-div">
        <ul className="nav-bar">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Players">Players</Link></li>
        <li><Link to="/New">Add New Winner</Link></li>
        </ul>
          <h2>Games</h2>
          <GameList onAddGame={this.addGame.bind(this)}
            onDeleteGame={this.deleteGame.bind(this)}
            onEditGame={this.editGame.bind(this)}
            games={this.state.games}
            gameKeyUp={this.state.gameKeyUp}/>

      </div>
    )
  }

 }

export default GamesContainer
