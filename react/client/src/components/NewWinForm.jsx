import React from 'react'
import {Link} from 'react-router-dom'

const NewWinForm = ({ onSubmit, gameKeyUp, dateKeyUp, msg }) => {


  return (
    <div>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/Players">Players</Link></li>
      <li><Link to="/Games">Games</Link></li>
      <form onSubmit={onSubmit}>
        {/* <input type="text" onKeyUp={playerKeyUp} placeholder="Enter Winner" /> */}
        <select id= "player-select" name="select_player">
          <option value={"play"}></option>
        </select>
        {/* <input type="text" onKeyUp={gameKeyUp} placeholder="Enter Game" />
        <input type="date" onKeyUp={dateKeyUp} placeholder="Enter Date" /> */}

        <input type="submit" name="submit" value="Add New Win!" />
    </form>
  </div>
  );
};

export default NewWinForm
