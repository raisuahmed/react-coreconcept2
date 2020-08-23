import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['rasel','Kona']
  return (
    <div className="App">
      <Nayok name = {nayoks [0]} food= "Pasta"></Nayok>
       <Nayok name = {nayoks[1]}></Nayok>
       <Nayok name = "Salman Shah"></Nayok>
       <Nayok name = 'Sabnur'></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt ="logo" />
       
      </header>
    </div>
  );
}

function Nayok(props){
  console.log(props.name);
  const NayokStyle = {
    border:'2px solid red',
    margin:'10px',
    width:'300px',
    backgroundColor:'grey'
    
  }
  return (
      <div style= {NayokStyle}>
    <h1>Nayok:{props.name}</h1>
  <h3>Food:{props.food}</h3>
  </div>
  )
}
export default App;
