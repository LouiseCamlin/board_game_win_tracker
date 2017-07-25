import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer.jsx'
import { HashRouter, Route } from 'react-router-dom'
import PlayerContainer from './containers/PlayerContainer.jsx'
import GamesContainer from './containers/GamesContainer.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <HashRouter>
      <div>
        {/* <Route path="/" component={MainContainer} /> */}
        <Route exact path="/home" component={MainContainer} />
        <Route path="/players" component={PlayerContainer} />
        <Route path="/games" component={GamesContainer} />
      </div>

    </HashRouter>,
  //  <MainContainer />,
    document.getElementById('app')
  );
});
