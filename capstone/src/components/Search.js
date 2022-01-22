import React from 'react';
import './Search.css'


export default function Search() {
  return <div>

     <img src='logo.png'
    style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      width: '334px',
      height: '69px'
      }}></img>

       <p className='search-header'>Search Subscriptions</p>

        <div style={{paddingTop:"50px",paddingBottom:"20px",paddingLeft:"30px"}}>
          
<input
className='search-input' placeholder='Enter here'></input>
        </div>

        <div style={{float:"right",paddingTop:"20px"}}><button className='search-submit-btn'
style={{color:"white"}}>Search</button></div>

  </div>;
}
