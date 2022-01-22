import React from 'react';
import "./Add.css"

export default function Add() {
  return <div>
     <img src='logo.png'
    style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      width: '334px',
      height: '69px'
      }}></img>

<p className='add-header'>Add Subscriptions</p>

<div style={{paddingTop:"50px",paddingBottom:"20px",paddingLeft:"30px"}}>
  
<input
className='add-input' placeholder='Enter here'></input>
</div>

<div style={{float:"right",paddingTop:"20px"}}><button className='add-submit-btn'
style={{color:"white"}}>Add</button></div>

    
  </div>;
}
