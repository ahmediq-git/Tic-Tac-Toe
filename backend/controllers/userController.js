const jwt =require('jsonwebtoken')
const bcrypt= require('bcryptjs')

const User = require('../models/userModel')
const Leaderboard = require('../models/leaderboardModel')

const asyncHandler = require('express-async-handler')


// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }

const signup = asyncHandler(async(req, res)=>{
    const {username, password}=req.body

    if (!username || !password){
        res.status(400)
        throw new Error('please enter all fields')
    }
    ///// where User is used is what needs to be changed when using other tools
    // check if user exists
    const userExists = await User.findOne({
       where: {
        username: username
    },
    }
    )
    //////
    // console.log(userExists)
    if (userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username, 
        password: hashedPassword
    })

    const leader = await Leaderboard.create({
        username,
        points: 0,
    })

    // console.log(user)
    if (user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            token: generateToken(user.id),
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const login = asyncHandler(async(req, res)=>{
    const {username, password}=req.body

    if (!username || !password){
        res.status(400)
        throw new Error('please enter all fields')
    }


    const user = await User.findOne({
            where: {
                username: username
            },
        }
    )
    //bcrypt checks against hash
    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            username:user.username,
            token: generateToken(user.id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const getUser = asyncHandler(async(req, res)=>{
    // res.json({message:'get user'})
    res.status(200).json(req.user)
})

module.exports = {signup, login, getUser}