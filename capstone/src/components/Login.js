import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import "./LoginStyle.css"
function Login()
{
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    
    async function handlesubmit(e){
         e.preventDefault();
         try {
            //  const response = { description };
             const response = await fetch("http://localhost:5000/auth/login", {
             method: "POST",
             headers: { "Content-Type": "application/json "},
             body: JSON.stringify({username,password})
         });
         if (response.ok) {
          window.location="/Sub"
           
           
          }
          else{alert("username or password incorrect")}
         } catch (err) {
             console.error(err.message)
         }   
    };
    const handlechangeusername=(e)=>{
        console.log(e.target.value) 
        setusername(e.target.value)
        
    };
    const handlechangepassword=(e)=>{
        console.log(e.target.value) 
        setpassword(e.target.value)
        
    };

    return(<>

    <h2 className="header" style={{paddingLeft:"90px"}}>Login</h2>
    <form className="loginForm" style={{paddingLeft:"90px"}}>
        <label style={{paddingRight:"10px"}}>
            username
        </label>

      
        <input 
        style={{height:"40px"}}
        type="text"onChange={handlechangeusername}></input>
       
        <br></br>
        <label style={{paddingTop:"50px",paddingRight:"10px"}}>
            Password
        </label>
        <input
        style={{height:"40px"}} type="password" onChange={handlechangepassword}/>
    </form>
    <div style={{paddingTop:"30px",paddingLeft:"90px"}}>
    <button id="loginBtn" type="submit" onClick={handlesubmit} className="btn btn-block">
        Log in
    </button>
    </div>
    </>);






}
export default Login
