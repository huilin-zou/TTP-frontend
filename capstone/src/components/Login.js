import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
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
          window.location="/"
           
           
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

    <h2>Login</h2>
    <form>
        <label>
            username
        </label>
        <input type="text"onChange={handlechangeusername}></input>
        <label>
            Password
        </label>
        <input type="password" onChange={handlechangepassword}/>
    </form>
    <button type="submit" onClick={handlesubmit} className="btn btn-primary btn-block">
        Log in
    </button>
    </>);






}
export default Login
