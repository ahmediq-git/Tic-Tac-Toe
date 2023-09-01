import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../App'
import Board from '../components/Board'
import { useNavigate } from 'react-router-dom'

function Gamepage() {
  const user=useContext(UserContext)

  const [server, setServer]=useState('')
  const [player1, setPlayer1]=useState('')
  const [player2, setPlayer2]=useState('not joined')
  const [message, setMessage]=useState('')

  const getBoard=()=>{

  }

  const getMessage=()=>{

  }

  const navigate=useNavigate()



  useEffect(()=>{
    if (!user.user){
      navigate('/')
    }
  },[])


  return (
    <div>
        <h1 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Game Room {server}</h1>
        <h2>{message}</h2>

        <div style={{display:'flex', justifyContent:'center'}}>
            <div>
                Player {player1} vs Player {player2}
            </div>
        </div>
        <div style={{marginTop:60}}></div>
        <Board/>
    </div> 
  )
}

export default Gamepage