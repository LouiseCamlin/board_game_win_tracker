import React from 'react'
import PlayerContainer from './PlayerContainer.jsx'
import GamesContainer from './GamesContainer'
import {Link} from 'react-router-dom'


class MainContainer extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {

      return (
        <div className="main-div">
          <div id="welcome-nav">
          <ul className="nav-bar">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Players">Players</Link></li>
            <li><Link to="/Games">Games</Link></li>
            <li><Link to="/New">Add new Win</Link></li>
          </ul>
        </div>
        <div id="welcome">
        <h3>Welcome to Miss Louise's Boardgame Win Tracker!</h3>
        <p>Here you can add new players, new games and new wins!</p>
        </div>

        </div>
      )

  }

}

export default MainContainer
