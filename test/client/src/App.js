import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MemoryRouter } from "react-router-dom";
import Documentation from './Documentation';
import GSCal from './GSCal';

function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Realizacja zadania nr 2 w ramach laboratorium TCh<br/>
          Autor: Michał Moń<br/>
          <Link to="/gscal">GS Cal</Link>
          <Link to="/documentation">Documentation</Link>
        </header>
        <div>
          <Route path="/gscal" component={GSCal} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </MemoryRouter>
  );
}

export default App;
