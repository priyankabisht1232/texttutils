import React,{ useState } from "react";

export default function TextForm(props){
  
  const handleUpClick=()=>{
       console.log("Uppercase was clicked");
       setText("you have clicked on handleupclicked")
  }
  
  const handleonchange=()=>{
       console.log("Uppercase was clicked");
  }
  const [text, setText] =useState('enter text here2')
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control" vlaue={text} onChange={handleonchange}id="myBox" rows="8"></textarea>

      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convet To UpperCase</button>
    </div>
  )

}