import './BgColor.css';
import { useState } from 'react';

function BgColor() {

  const [color,setColor]=useState('')
  return (
    
    <body className="App" style={{backgroundColor:color}}>
     <button style={{backgroundColor:"red"}} onClick={()=>{setColor('red')}}>Red</button>
     <button style={{backgroundColor:"green"}} onClick={()=>{setColor('green')}}>Green</button>
     <button style={{backgroundColor:"blue"}} onClick={()=>{setColor('blue')}}>blue</button>
     <button style={{backgroundColor:"pink"}} onClick={()=>{setColor('pink')}}>pink</button>
     <button style={{backgroundColor:"orange"}} onClick={()=>{setColor('orange')}}>orange</button>
     <button style={{backgroundColor:"yellow"}} onClick={()=>{setColor('yellow')}}>yelllow</button>
     <button style={{backgroundColor:"purple"}} onClick={()=>{setColor('purple')}}>purple</button>
     <button style={{backgroundColor:"#e9c46a"}} onClick={()=>{setColor('#e9c46a')}}>Skin</button>
 
    </body>
  );
}

export default BgColor;
