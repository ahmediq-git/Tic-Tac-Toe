import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const user=useContext(UserContext)
    const navigate= useNavigate();

    const login = async() => {
        try{
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password })
              })
              const json = await response.json()
              
              if (json){
                user.setUser(json)
                localStorage.setItem('user', JSON.stringify(json))
                navigate('/homepage')

              }
        } catch (err){
            console.log(err)
        }
      
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', width:'100vw', flexDirection:'column'}}>
            <h1>Tic-Tac-Toe</h1>
            <h3>Log In</h3>
            <input
                type="text"
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={{marginBottom:10}}
            />
            <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{marginBottom:10}}
            />

            <button onClick={login}>Login</button>
            <button onClick={()=>navigate('/sign-up')}>Click here to go to Sign up</button>
        </div>
    );
}

export default Login;
