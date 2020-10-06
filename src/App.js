import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'

function App() {
  return (
    <Fragment>
    <div className="App">
      <p className="test">testde ouf</p>
     <input type="text"/>
      <h1>React App</h1>
      <h2>Mon second second titre</h2>
    <Membre/>
    </div>
   
    </Fragment>
  );
}

export default App;