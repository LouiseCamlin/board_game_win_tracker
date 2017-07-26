import React from 'react'
import {Link} from 'react-router-dom'

class NewWinForm extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        players: [],
        wins: [],
        games: [],
        playerIndex: "",
        focusPlayer: null,
        playerId: "",
        gameId:"",
        gameIndex: "",
        dateIndex: "",
        focusGame: null
    }
  }

  getWinList() {
     const url = 'http://localhost:5000/api/wins/'
     const request = new XMLHttpRequest();
     request.open('GET', url);
     request.onload = () => {
       if (request.status === 200) {
         const jsonData = request.responseText;
         const winData = JSON.parse(jsonData);
         this.setState({wins: winData});
       }
     }
     request.send(null);
   }

  getPlayerList() {
     const url = 'http://localhost:5000/api/players/'
     const request = new XMLHttpRequest();
     request.open('GET', url);
     request.onload = () => {
       if (request.status === 200) {
         const jsonData = request.responseText;
         const playerData = JSON.parse(jsonData);
         this.setState({
           players: playerData,
           playerId: playerData[0].id
         });
       }
     }
     request.send(null);
   }

   getGameList() {
      const url = 'http://localhost:5000/api/games/'
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = () => {
        if (request.status === 200) {
          const jsonData = request.responseText;
          const gameData = JSON.parse(jsonData);
          this.setState({
            games: gameData,
            gameId: gameData[0].id
          });
        }
      }
      request.send(null);
    }

   addNewWin(date, playerId, gameId) {
     const url = 'http://localhost:5000/api/wins/'
     const newWin = {win: {date: date, player_id: playerId, game_id: gameId} }
     const request = new XMLHttpRequest();
     request.open('POST', url);
     request.setRequestHeader("Content-Type", "application/json")
     request.send(JSON.stringify(newWin))
   }

   componentDidMount(){
     this.getPlayerList()
     this.getGameList()
   }

   submitNewWinner(event){
     event.preventDefault()
     this.addNewWin(this.state.date, this.state.playerId, this.state.gameId)
   }

   handlePlayerSelect(event){
     const newIndex = event.target.value;
     this.setState({playerId: newIndex})
   }

   handleGameSelect(event){
     const newIndex = event.target.value;
     this.setState({gameId: newIndex})
   }

   handleDate(event){
     const newIndex = event.target.value;
     this.setState({date: newIndex})
   }


   render() {
     console.log(this.state);
    const playerOptions = this.state.players.map((player, index) => {
      return <option value={player.id} key={index}>{player.name}</option>
    })

    const gameOptions = this.state.games.map((game, index) => {
      return <option value={game.id} key={index}>{game.title}</option>
    })

     return (
       <div>
         <ul className="nav-bar"></ul>
         <li><Link to="/Home">Home</Link></li>
         <li><Link to="/Players">Players</Link></li>
         <li><Link to="/Games">Games</Link></li>
         <h2>Add a new winner!</h2>
         <form onSubmit={this.submitNewWinner.bind(this)}>
        <select id= "player-select" name="select_player" onChange={this.handlePlayerSelect.bind(this)}>
          {playerOptions}
        </select>
        <select id="game-select" onChange={this.handleGameSelect.bind(this)}>
          {gameOptions}
        </select>
        <input type="date" onChange={this.handleDate.bind(this)}></input>
        <input type="submit" name="submit" value="Add New Win!" />
        </form>
        </div>
      );
   };
}

export default NewWinForm
