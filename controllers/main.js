const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login = async (req,res) =>{
    const {username,password} = req.body
    
    //mongoose validation
    //join
    //check in the controller

    if (!username || ! password){
        throw new BadRequestError('please provide email and password')
    }
    //just for demo , normally provide by db!!!!!
    const id = new Date().getDate()

    //try to keep payload small,better experience for user
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg: 'user created',token})
}


const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({msg:`Hello, ${req.user.username}`, secret: `This is your authorize data,your lucky number is ${luckyNumber}`})
   
}


module.exports = {
    login, dashboard
}