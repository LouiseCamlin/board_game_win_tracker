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
        <div>
        <h2>Win Tracker</h2>

        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Players">Players</Link></li>
          <li><Link to="/Games">Games</Link></li>
          <li><Link to="/New">Add new Win</Link></li>
        </ul>

        </div>
      )

  }

}

export default MainContainer
