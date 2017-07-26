import React from 'react'
import {Link} from 'react-router-dom'

class NewWinForm extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        wins: [],
        playerIndex: "",
        focusPlayer: null,
        gameIndex: "",
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

   addNewWin(date) {
     const url = 'http://localhost:5000/api/wins/'
     const newWin = {win: {date: date } }
     const request = new XMLHttpRequest();
     request.open('POST', url);
     request.setRequestHeader("Content-Type", "application/json")
     request.onload = () => {
       this.getPlayerList()
     }
     request.send(JSON.stringify(newPlayer))
   }

   componentDidMount(){
     this.getWinList()
   }

   submitNewWinner(event){
     event.preventDefault()
     this.addNewWin(this.state.date)
   }

   handlePlayerSelect(event){
     const newIndex = event.target.value;
     this.setState({playerIndex: newIndex})

     const selectedPlayer = this.wins.players[newIndex]
     this.setFocusPlayer(selectedPlayer)
   }

   setFocusPlayer(player){
     this.setState({focusPlayer: player})
   }

   handleGameSelect(event){
     const newIndex = event.target.value;
     this.setState({gameIndex: newIndex})

     const selectedGame = this.wins.games[newIndex]
     this.setFocusGame(selectedGame)
   }

   setFocusGame(game){
     this.setState({focusGame: game})
   }


   render() {
    const playerOptions = this.state.wins.map((win, index) => {
      return <option value={index} key={index}>{win.player.name}</option>
    })

    const gameOptions = this.state.wins.map((win, index) => {
      return <option value={index} key={index}>{win.game.title}</option>
    })

     console.log(this.state.wins, "wins")

     return (
       <div>
         <li><Link to="/Home">Home</Link></li>
         <li><Link to="/Players">Players</Link></li>
         <li><Link to="/Games">Games</Link></li>
         <h2>Add a new winner!</h2>
         <form onSubmit={this.submitNewWinner}>
        <select id= "player-select" name="select_player">
          {playerOptions}
        </select>
        <select id="game-select">
          {gameOptions}
        </select>
        <input type="date"></input>
        <input type="submit" name="submit" value="Add New Win!" />
        </form>
        </div>
      );
   };
}

export default NewWinForm
