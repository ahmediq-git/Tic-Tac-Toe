let state = {
    board: [['','',''],['','',''],['','','']],
    player1symbol: 'X',
    player2symbol:'O',
    player1: '', //name of player 1
    player2: '', //name of player 2
    move: 'player 1', //whose turn
    server: '1'
}

const joinPlayer = (roomId, player) =>{

}

// sends board to an endpoint, and everyone picks up updated board from there
const sendBoard = (req, res) => {
    res.json(board)
}

// Allow player 1 to make the move
const permitPlayer1 =(req,res)=>{
    res.send('player 1')
}

// Allow player 2 to make the move
const permitPlayer2 =(req,res)=>{

}

const receivePlayer1Move = (req, res) => {
    // receive move from player1 of changed board state
    // change board state
    // send Board


}

const receivePlayer2Move = (req, res) => {
    // receive move from player2 of changed board state
    // change board state
    // send Board
}

const calculateWinner = (player) => {
     // Check rows
     for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return player;
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return player;
        }
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return player;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return player;
    }

    return null;
}

const endGame = ()=>{
    // displays ending message
    // cleans up board
    // redirects user to lobby
}