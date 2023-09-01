import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const getLeaderboard = async()=>{
    try{
      const response = await fetch('http://localhost:4000/api/leaderboard/', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        const json = await response.json()
        
        if (json){
          setLeaderboardData(json);
        }
  } catch (err){
      console.log(err)
  }
  }

  useEffect(()=>{
    getLeaderboard();
  },[])



  const tableStyle = {
    borderCollapse: 'collapse',
    width: '300px',
    margin: 'auto',
  };

  const thStyle = {
    background: '#f2f2f2',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
  };

  const tdStyle = {
    padding: '8px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div className="leaderboard">
      <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Leaderboard</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={player.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{player.username}</td>
              <td style={tdStyle}>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
