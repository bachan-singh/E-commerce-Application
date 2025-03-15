const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel');
require('dotenv').config()

exports.signup = (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    User.getUserByEmail(email, (err, userExisted) => {

        if(err) return res.status(500).json({error: err.message})
        if(userExisted) return res.status(400).json({error: 'email is already existed'})

        // Hashing Password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if(err) return res.status(500).json({error: err.message})
            
            // Creating a New Account
            User.createUser({username, email, password: hashedPassword}, (err, userId) => {
                if (err) return res.status(500).json({ error: err.message });
                res.status(201).json({message: 'User registered successfully', userId})

            })
        })
    })
    
}

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.getUserByEmail(email, (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        // Compare Password
        bcrypt.compare(password, user.password,
            (err, isMatch) => {
                if (err) return res.status(500).json({ error: err.message });
                if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

                // Generate JsonWebToken 
                const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { expiresIn: '1h' })

                res.json({ message: 'Login successful', token });
            }
        )
    })
}