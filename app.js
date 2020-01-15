const express = require('express')

const app = express()

const routes = require('./routes/products')


app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('/', routes)

app.use((error, req, res, next)=>{
    console.log(error)
    const status = error.statusCode 
    const message = error.message
    const data = error.data
    res.status(status).json({message, data})
})

app.listen(8082)