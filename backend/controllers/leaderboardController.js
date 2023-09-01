const Leaderboard = require('../models/leaderboardModel');
const asyncHandler = require('express-async-handler');

const incrementLeaderboard = asyncHandler(async (req, res) => {
  const { username } = req.body;
  const user = await Leaderboard.findOne({ where: { username } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  await user.increment('points');
  await user.reload();
  res.status(200).json(user);
});

const getTable = asyncHandler(async (req, res) => {
    try {
        const leaderboardData = await Leaderboard.findAll();
        res.status(200).json(leaderboardData);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  });


module.exports = {
  incrementLeaderboard,
  getTable
};
