const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    User.createUser(email, (err, userExisted) => {

        if(err) return res.status(500).json({error: err.message})
        if(userExisted) return res.status(400).json({error: 'email is already existed'})

        // Hashing Password
        bcrypt.hash(password, 10, (err, result) => {
            if(err) return res.status(500).json({error: err.message})
            
            // Creating a New Account
            User.createUser({name, email, password: hashedPassword}, (err, userId) => {
                if (err) return res.status(500).json({ error: err.message });
                res.status(201).json({message: 'User registered successfully', userId})

            })
        })
    })
    
}