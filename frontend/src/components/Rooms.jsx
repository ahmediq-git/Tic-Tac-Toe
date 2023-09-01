import React from 'react';

const serverData = [
  { id: 1, name: 'Server 1' },
  { id: 2, name: 'Server 2' },
  { id: 3, name: 'Server 3' },
  // Add more server data as needed
];

const Rooms = () => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '60%',
    maxWidth: '800px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const cellStyle = {
    padding: '12px',
    textAlign: 'left',
  };

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: '#f2f2f2',
  };

  const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: 400
  };

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Server Name</th>
            <th style={headerCellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {serverData.map(server => (
            <tr key={server.id}>
              <td style={cellStyle}>{server.name}</td>
              <td>
                <button style={buttonStyle}>Join this server</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
