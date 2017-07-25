import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer.jsx'
import { HashRouter, Route } from 'react-router-dom'
import PlayerContainer from './containers/PlayerContainer.jsx'
import GamesContainer from './containers/GamesContainer.jsx'
import NewWinForm from './components/NewWinForm.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <HashRouter>
      <div>
        {/* <Route path="/" component={MainContainer} /> */}
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/home" component={MainContainer} />
        <Route path="/players" component={PlayerContainer} />
        <Route path="/games" component={GamesContainer} />
        <Route path="/new" component={NewWinForm} />
      </div>

    </HashRouter>,
  //  <MainContainer />,
    document.getElementById('app')
  );
});
