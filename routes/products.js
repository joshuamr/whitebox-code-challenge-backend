const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/products', (req, res, next) =>{
    axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')
    .then(response=>{
        let products = response.data
        return res.status(200).json({message:'Products successfully retrieved', products})
    })
    .catch(err=>{
        next(err)
    })
})

router.get('/products/:prodId', (req, res, next) =>{
    axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')
    .then(response=>{
        let products = response.data
        let product = products.find(prod=>prod._id === req.params.prodId)
        return res.status(200).json({message: 'Product successfully retrieved', product})
    }).catch(err=>{
        next(err)
    })
})

module.exports = router