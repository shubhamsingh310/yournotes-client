
import React from "react";
import { useState } from "react";



function Login() {

  
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  async function registerUser(event){
    event.preventDefault();
    
    const res = await fetch("http://localhost:8800/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({  
            email,
            password

        })
    });
    

    
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={registerUser}>
        
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
 
}

export default Login
