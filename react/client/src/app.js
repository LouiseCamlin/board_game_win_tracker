import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <MainContainer />,
    document.getElementById('app')
  );
});
