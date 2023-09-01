import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [msg, setMsg]=useState('')

    const navigate=useNavigate();

    const signup = async() => {
        if (password !== confirmpassword){
            return alert("Passwords do not match");
        }
        try{
            const response = await fetch('http://localhost:4000/api/users/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password })
              })
              const json = await response.json()
              console.log(json)
              if (json){
                setMsg('Your user has been created')
              }
        } catch (err){
            console.log(err)
            setMsg(err.message)
        }
      
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', width:'100vw', flexDirection:'column'}}>
            <h1>Tic Tac Toe</h1>
            <h3>Sign Up</h3>
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

            <input
                type="password"
                placeholder='Confirm Password'
                value={confirmpassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={{marginBottom:10}}
            />

            <button onClick={signup}>Sign Up</button>
            <button onClick={()=>navigate('/')}>Click here to go to Sign in</button>
            <div>{msg}</div>
        </div>
    );
}

export default SignUp;
