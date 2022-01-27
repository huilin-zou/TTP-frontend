import { use } from "bcrypt/promises";
import React, { useState } from "react";
import { useInRouterContext } from "react-router-dom";
import "./RegisterStyle.css"
export default function Login(){
   

        const [username, setusername] = useState("")
        const [password, setpassword] = useState("")
        const[email,setEmail]=useState("")
        
        async function handlesubmit(e){
             e.preventDefault();
             try {
                //  const response = { description };
                 const response = await fetch("http://localhost:5000/auth/register", {
                 method: "POST",
                 headers: { "Content-Type": "application/json "},
                 body: JSON.stringify({username,email,password})
             });
            console.log(response);
            if (response.ok) {
              window.location="/login"
               
               
              }
              else{alert("credential invalid")}
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
        const handlechangeEmail=(e)=>{
          console.log(e.target.value) 
          setEmail(e.target.value)
          
      };

return(
        <div>

          <p className="header">Register</p>
        <form className='container'
         >
         
          <div>
            <label style={{paddingTop:"80px"}} className="label-signup" htmlFor="username">Username</label>
            <input onChange={handlechangeusername} className="form-control" type="text" name="username" />
          </div>
          <div>
            <label className="label-signup"  htmlFor="email"> Create email</label>
            <input onChange={handlechangeEmail} className="form-control" type="email" name=" create email" />
          </div>
          <div>
            <label className="label-signup" htmlFor="password"> Create Password</label>
            <input onChange={handlechangepassword} className="form-control" type="password" name=" create password" />
          </div>

          <div 
          id="submitBtn"
          class="d-grid gap-2">
            <button
            id="registerBtn"
            onClick={handlesubmit} className="btn btn-block btn-primary" type="Register">Register</button>
          </div>
        </form>
        </div>
    )
} 
