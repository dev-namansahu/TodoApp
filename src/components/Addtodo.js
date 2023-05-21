import React from "react";
import { useState } from "react";

export default function Addtodo({update}) {
  const [text, settext] = useState("");

  const onchangehandler=(e)=>{
    settext(e.target.value);
    console.log(text)
   
  }

  const onclickhandler=(e)=>{
    e.preventDefault();
    
            
    update(text);
    settext("");

  };
  

  return (
    <>
    <div className="container">
      <hr /><br /><br />
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add Task"
          value={text}
          onChange={onchangehandler}
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2" style={{backgroundColor:"lightgreen"}}
          onClick={onclickhandler}
        >
          Add
        </button>
        
      </div></div>
    </>
  );
}
