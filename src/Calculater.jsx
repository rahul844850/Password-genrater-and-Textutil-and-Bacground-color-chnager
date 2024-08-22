import React from 'react'
import { useState } from "react";
import './Calculater.css'

const Calculater = () => {
    const [num, setNum] = useState('');

    const clickedvalue=(e)=>{
        setNum(num+e.target.value)
    }
    const Answer =()=>{
        setNum(eval(num))
    }
  return (
    <>
    <div className="calculator">
    <input type="text" className="display" value={num} readOnly/>
    <div className="keys">
      <button value='1' onClick={clickedvalue}>7</button>
      <button  value='2'onClick={clickedvalue}>8</button>
      <button  value='9' onClick={clickedvalue}>9</button>
      <button  value='/'onClick={clickedvalue}>/</button>
      <button value='4' onClick={clickedvalue}>4</button>
      <button value='5' onClick={clickedvalue}>5</button>
      <button value='6' onClick={clickedvalue}>6</button>
      <button value='*' onClick={clickedvalue}>*</button>
      <button value='1' onClick={clickedvalue}>1</button>
      <button value='2'  onClick={clickedvalue}>2</button>
      <button value='3' onClick={clickedvalue}>3</button>
      <button value='-' onClick={clickedvalue}>-</button>
      <button value='0' onClick={clickedvalue}>0</button>
      <button value='.' onClick={clickedvalue}>.</button>
      <button value='' onClick={clickedvalue}>AC</button>
      <button value='+' onClick={clickedvalue}>+</button>
      <button value='' onClick={Answer}>=</button>
      <button value='<-' onClick={e=>{setNum(num.slice(0,-1))}}> C </button>
      
    </div>
  </div>

    </>
  )
}

export default Calculater
