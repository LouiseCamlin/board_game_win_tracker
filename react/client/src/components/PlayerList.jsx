import React from 'react'
import PlayerItem from './PlayerItem'


class PlayerList extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

     const playerItem = this.props.players.map((player, index) => {
       console.log(player.wins)
    return (
      <PlayerItem key={index} value={index} name={player.name} games={player.wins}/>
      )

    })

     return (

       <div id="player-list">
         {playerItem}
       </div>
     );
   }

}

export default PlayerList
