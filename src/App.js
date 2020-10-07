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
  famille,
  isShow: false
}

handleClick = (num) => {
  const famille = {... this.state.famille}
  famille.membre1.age += num
 this.setState({famille})
}
handleChange = (event, id) => {
  const famille = {... this.state.famille}
  const nom = event.target.value
  famille[id].nom = nom
 this.setState({famille})
}

cacherNom = id => {
  const famille = {... this.state.famille}
  famille[id].nom = 'X'
 this.setState({famille})
}

handleShowDescription = () =>{
  const isShow = !this.state.isShow
  this.setState({isShow})
}

render() {
   const {titre} = this.props
   const { famille, isShow } = this.state

let descrition = null

if (isShow) {
 descrition = (
   <strong>C'est moi qui code Gros je suis dans le game</strong>)
}

const list = Object.keys(famille)
    .map( membre => (
    <Membre
      key = {membre}
      handleChange = { event => this.handleChange(event, membre)}
      cacherNom = {() => this.cacherNom(membre)}
      age = {famille[membre].age}
      nom = {famille[membre].nom} />
    ))

  return (
    <Fragment>
     <div className="App">
     <h1>{titre}</h1>
    { list }
    {/* <Membre
      nom= {famille.membre1.nom}
      age = {this.state.famille.membre1.age}>
      {descrition}
        <button onClick = {this.handleShowDescription}>
        {isShow ? 'Cacher' : 'Montrer'}
        </button>
    </Membre> */}
          
    {/* <Button 
      vieillir = {() => this.handleClick(2)}/> */}
    </div>
  
    </Fragment>
  )

  }
}

export default App;