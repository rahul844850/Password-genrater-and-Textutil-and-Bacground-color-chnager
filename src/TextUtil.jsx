import React from 'react'
import { useState } from "react";
import './Textutil.css';
const TextUtil = () => {
    const  [text, setText] = useState(" ");
    const [mode,setMode]=useState('white')

    // uppercase function
    const Upercasebtn=()=>{
        let U= text.toUpperCase()
        setText(U)
    }
    // lowercase function
    const Lowercasebtn=()=>{
        let L= text.toLowerCase()
        setText(L)
    }
    // clear/delete function
    const Clrearbtn=()=>{
        let C= ""
        setText(C)
        
    }
    // copy text dunction
    const copybtn=()=>{
        let copy=document.getElementById('textbox');
        copy.select();
        navigator.clipboard.writeText(copy.value);
        alert('sucessfully copied')
        
    }
    // onchange function
        const handelChangebtn=(e)=>{
            setText(e.target.value)
    }

    const toglemode=()=>{
        if(mode==='white'){
            setMode('dark')
            console.log('dark mode one')
            document.body.style.backgroundColor=' grey';
            document.body.style.Color='white';
        }
        else{
            setMode('white')
            console.log('white mode on')
            document.body.style.backgroundColor='white';
            document.body.style.Color='grey';
        }
    }

  
  return (
   <>   
<div className="form-check form-switch ">
  <input className="form-check-input" type="checkbox" role="switch" value={mode} onClick={toglemode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark-mode</label>
</div>

<div className="mb-3 container my-4 ">
<h1>TextUtils App</h1>
  <textarea className="form-control" id="textbox" rows="8" value={text} onChange={handelChangebtn} ></textarea>
  <button type="button" className="btn btn-danger"  onClick={Upercasebtn} >convert to Uppercase</button>
  <button type="button" className="btn btn-danger"  onClick={Lowercasebtn}>convert to LowerCase</button>
  <button type="button" className="btn btn-danger"  onClick={Clrearbtn}>Clear text</button>
  <button type="button" className="btn btn-danger"  onClick={copybtn}>copy text</button>
</div>

<div className='mb-3 container my-4'>
    <p className='p1'>Text Summary</p>
    {text.split(" ").length-1} words and {text.length} character
</div>

<div className='mb-3 container my-4'>
    <p className='p1'>preview section</p>
    <p>{text}</p>
</div>


   </>
  )
}

export default TextUtil
