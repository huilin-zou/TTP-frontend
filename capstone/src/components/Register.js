import { use } from "bcrypt/promises";
import React, { useState } from "react";
import { useInRouterContext } from "react-router-dom";
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
              else{alert("user exist")}
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
        <form className='container' >
         
          <div>
            <label htmlFor="username">username</label>
            <input onChange={handlechangeusername} className="form-control" type="text" name="username" />
          </div>
          <div>
            <label htmlFor="email"> Create email</label>
            <input onChange={handlechangeEmail} className="form-control" type="email" name=" create email" />
          </div>
          <div>
            <label htmlFor="password"> Create Password</label>
            <input onChange={handlechangepassword} className="form-control" type="password" name=" create password" />
          </div>

          <div class="d-grid gap-2">
            <button onClick={handlesubmit} className="btn btn-block btn-primary" type="Register">Register</button>
          </div>
        </form>
        </div>
    )
} 
