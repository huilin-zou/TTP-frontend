import React,{useState} from 'react';
import './SearchStyle.css'


export default function Search() {
  const [searchTerm,setSearchTerm]=useState('')

  const onSubmitForm=async(e)=>{
    e.preventDefault();
    try {
      console.log("search term:",searchTerm)
    } catch (error) {
      console.log(error.message)
    }
  }
  return <div>

    
       <p className='search-header'>Search Subscriptions</p>

        <div style={{paddingTop:"50px",paddingBottom:"20px",paddingLeft:"30px"}}>
          
<input
value={searchTerm}
onChange={e=>setSearchTerm(e.target.value)}
className='search-input' placeholder='Enter here'></input>
        </div>

        <div style={{float:"right",paddingTop:"20px"}}><button 
        onClick={onSubmitForm}
        className='search-submit-btn'
style={{color:"white"}}>Search</button></div>

  </div>;
}
