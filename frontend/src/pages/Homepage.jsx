import React, {useContext} from 'react'
import Leaderboard from '../components/Leaderboard'
import Rooms from '../components/Rooms'
import { UserContext } from '../App';

function Homepage() {
  const user=useContext(UserContext)
  return (
    <div>
        <h1 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Play Tic-Tac-Toe</h1>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <Leaderboard/>
            <Rooms/>
        </div>
    </div> 
  )
}

export default Homepage