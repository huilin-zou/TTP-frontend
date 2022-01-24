import React,{useState} from "react";
import "./AddStyle.css";

export default function Add() {
  const [input,setInput]=useState('')
  
  const onSubmitForm=async(e)=>{
    e.preventDefault()
    try {
      console.log(input)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
     

      <p className="add-header">Add Subscriptions</p>

      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "20px",
          paddingLeft: "30px",
        }}
      >
        <input 
        value={input}
        onChange={e=>setInput(e.target.value)}
        className="add-input" placeholder="Enter here"></input>
      </div>

      <div style={{ float: "right", paddingTop: "20px" }}>
        <button 
        onClick={onSubmitForm}
        className="add-submit-btn" style={{ color: "white" }}>
          Add
        </button>
      </div>
    </div>
  );
}

