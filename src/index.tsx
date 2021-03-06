import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import "./stylesheets/layout/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
  document.getElementById('root')
);
