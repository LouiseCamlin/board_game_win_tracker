import React from 'react'
import GameItem from './GameItem'


class GameList extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

     const gameItem = this.props.games.map((game, index) => {
       console.log(game.wins)
    return (
      <GameItem key={index} value={index} title={game.title} players={game.wins}/>
      )

    })

     return (

       <div id="game-list">
         {gameItem}
       </div>
     );
   }

}

export default GameList
