const User = require("../model/User")
const bcrypt = require("bcryptjs")

const getAllUser = async(req,res,next)=>{
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(404).json({message:"No users found"})
    }

    return res.status(200).json({users})
}

const signup = async(req,res,next)=>{
    console.log(req.body)
    const {name,email,password} = req.body

    //check if user already exists
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(err){
        return console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message:"user already exists! login instead"})
    }

    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password:hashedPassword,
        blogs:[]
    })
    
    try{
        await user.save()
    }catch(err){
        return console.log(err)
    }

    return res.status(201).json({user})
}

const login = async(req,res,next)=>{
    const {email,password} = req.body

    //check if user exist or not
    let existingUser
    try{
        existingUser = await User.findOne({email})
    }catch(err){
        return console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message:"user doesn't exist"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect password"})
    }
    return res.status(200).json({message:"login successful",user:existingUser})
}

module.exports = {
    getAllUser,
    signup,
    login
}