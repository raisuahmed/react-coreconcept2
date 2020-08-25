import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //data load kora No:5
  const [Nayoks,setNayoks]= useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  console.log(Nayoks);
 // No:1
  // const nayoks =['rasel','Kona']
  // NO:4
  // const Nayoks = [{name:'Jasim', age:56},{name:"Alomgir", age:56},{name:'Salman Shah', age:32}]
  return (
    <div className="App">
      {/* <Nayok nk = {Nayoks[0]}></Nayok> */}
{Nayoks.map(nk =><Nayok name = {nk.name}email ={nk.email} key={nk.id} city ={nk.city}></Nayok>)}
      {/* No:2 */}
      <MovieCounter></MovieCounter>

      {/* No:1 */}
      {/* <Nayok name = {nayoks [0]} food= "Pasta" age= "56"></Nayok>
       <Nayok name = {nayoks[1]}></Nayok>
       <Nayok name = "Salman Shah"></Nayok>
       <Nayok name = 'Sabnur'></Nayok>
        */}
       
      <header className="App-header">
      
      </header>
    </div>
  );
}

// No:1
// function Nayok(props){
//   console.log(props.name);
//   const NayokStyle = {
//     border:'2px solid red',
//     margin:'10px',
//     width:'300px',
//     backgroundColor:'grey'
    
//   }
//   return (
//       <div style= {NayokStyle}>
//     <h1>Nayok:{props.name}</h1>
//   <h3>Food:{props.food}</h3>
//   <h2>I have done{props.age || 30 } Years  </h2>
//   </div>
//   )
// }
// NO:2
function MovieCounter(){
  const[count, setCount] = useState(0)
  const handleClick = () => setCount(count +1)
 
  //console.log(MovieCounter, setCount);

 //const result = useState(0);
 //console.log(result);
 //const result = ["abc","def"];
 //console.log(result[0], result[1]);
  return(
   <div>
     <button  onClick={handleClick}>Add Movie</button>
  <h3>Number of Movie:{count}</h3>
  <MovieDisplay movies = {count}></MovieDisplay>
  <MovieDisplay movies = {count + 5}></MovieDisplay>
   </div> 
   
  )
} 
// No:3
function MovieDisplay(props) {
  return(
  <div>
    <h4>Movies I have Tried:{props.movies}</h4>
  </div>
  )
}
// No:4, 5
function Nayok(props){
  const NayokStyle ={
    color:"red",
    border:'2px solid green',
    margin :'12px'
  }
  return(
    <div style= {NayokStyle}>
      <h1>{props.name}</h1>
  <h2>{props.email}</h2>
  <h5>{props.city}</h5>
  <h3>I love This </h3>
    </div>
  )
}
export default App;
