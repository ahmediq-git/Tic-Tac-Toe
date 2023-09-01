const express = require('express');
const router = express.Router();
const {getTable, incrementLeaderboard} = require('../controllers/leaderboardController')

router.get('/', getTable)

router.post('/increment', incrementLeaderboard)


module.exports=router;