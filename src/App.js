import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from'./components/Button'

const famille = {
  membre1:{
      nom: 'Aurel',
      age:35
  },
  membre2:{
      nom: 'Aurélie',
      age: '34'
  },
  membre3:{
nom: 'Charles',
age: '8'
  },
  membre4: {
    nom: 'Marina',
  age: '7'
 }
}


class App extends React.Component{
state = {
  famille
}

handleClick = (num) => {
  const famille = {... this.state.famille}
  famille.membre1.age += num
 this.setState({famille})
}
handleChange = event => {
  const famille = {... this.state.famille}
  const nom = event.target.value
  famille.membre1.nom = nom
 this.setState({famille})
}

render() {
   const {titre} = this.props
   const { famille } = this.state
  return (
    <Fragment>
     <div className="App">
     <h1>{titre}</h1>
      <p className="test">test de ouf</p>
    <input value={famille.membre1.nom} onChange={this.handleChange} type='text'/>
    <Membre
      nom= {famille.membre1.nom}
      age = {this.state.famille.membre1.age}>
      <strong>C'est moi qui code Gros je suis dans le game</strong>
    </Membre>
    <Membre 
      nom={this.state.famille.membre2.nom}
      age = {this.state.famille.membre2.age}/>
    <Membre 
      nom={this.state.famille.membre3.nom}
      age = {this.state.famille.membre3.age}/>
    <Membre 
      nom={this.state.famille.membre4.nom}
      age = {this.state.famille.membre4.age}/>
    <Button 
      vieillir = {() => this.handleClick(2)}></Button>
    </div>
  
    </Fragment>
  )

  }
}

export default App;