const { get } = require('mongoose')
const Users = require('../models/Users.model')


// Create New user
const createUser = async (res,req) =>{
    try{
        const createdUser =await Users.create(req.body)
        res.status(200).json(createdUser)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}

// get User
const getUser = async (res,req) =>{
    try{
        const {id } = req.params
        const user =await Users.findById(id)

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}

const deleteUser = async (res,req)=>{
    try{
        // get id of the user 
        const {id} = req.params
        const user = await Users.findByIdAndDelete(id)

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json({message:"User deleted succesfully"})
    }
    catch(e){
        res.status(400).json({message:e.message})

    }

}


module.exports = {
    createUser,
    getUser,
    deleteUser
}