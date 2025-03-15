require('dotenv').config()
const express = require('express');
const cors = require('cors');

const authRoute = require('./routes/authRoute')
const productRoute = require('./routes/productRoute')
const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)

app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`)
})