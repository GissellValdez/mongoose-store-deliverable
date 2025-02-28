require('dotenv').config()
const express = require('express')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('./models/connection')
const ProductRouter = require('./controllers/products')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/products', ProductRouter)


app.get('/', (req, res) => {
	res.render('index.liquid')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
