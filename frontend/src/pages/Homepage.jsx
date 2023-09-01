import React, {useContext, useEffect} from 'react'
import Leaderboard from '../components/Leaderboard'
import Rooms from '../components/Rooms'
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';


function Homepage() {
  const user=useContext(UserContext)
  const navigate=useNavigate()
  console.log(localStorage)

  useEffect(()=>{
    if (!user.user){
      console.log('here')
      navigate('/')
    }
  },[])


  return (
    <div>
        <h1 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Play Tic-Tac-Toe</h1>
        <h2 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Welcome {user?.user?.username}</h2>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <Leaderboard/>
            <Rooms/>
        </div>
    </div> 
  )
}

export default Homepage