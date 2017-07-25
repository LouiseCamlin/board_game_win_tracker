import React from 'react'
import PlayerContainer from './PlayerContainer.jsx'
import GamesContainer from './GamesContainer'
import {Link} from 'react-router-dom'


class MainContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      container: null,
    }
  }



  selectPlayer() {
    this.setState({ container: "player" })
    console.log("player");
  }

  selectGames() {
    this.setState({ container: "games" })
  }

  render() {

    // if (this.state.container === "player") {
    //   return (
    //     <PlayerContainer />
    //
    //   )
    // } else if (this.state.container === "games") {
    //   return (
    //     <GamesContainer />
    //   )
    // } else
      return (
        <div>
        <h2>Win Tracker</h2>

        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Players">Players</Link></li>
          <li><Link to="/Games">Games</Link></li>
        </ul>
          {/* <button id='player' onClick={this.selectPlayer.bind(this)}>Players</button>
          <button id='games' onClick={this.selectGames.bind(this)}>Games</button> */}
        </div>
      )

  }

}

export default MainContainer

// render(){
//    return(
//      <div>
//        <h4> Main App</h4>
//        <ul>
//          <li><Link to="/home">Home</Link></li>
//          <li><Link to="/about">About</Link></li>
//          <li><Link to="/pricing">Pricing</Link></li>
//        </ul>
//      </div>
//    )
//  }
