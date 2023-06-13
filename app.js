require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const addproduct = require('./routes/productRoute')
const product = require('./routes/showProduct')
const productdata = require('./routes/ProductData')
// const login = require('./routes/loginRoute')
// const userData = require('./routes/userDataRoute')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())


mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage)=> console.log(errorMessage))
db.once('open', ()=>console.log("Connected successfully to the database"))

app.use(express.json())

app.get('/', (request,response)=>{
    response.send(`It's Working`)
})

app.use('/api/v1/addnew', addproduct)
app.use('/api/v1/products',product)
app.use('/api/v1/productdata',product)


// app.use('/api/v1/userdata',userData)

app.listen(PORT, console.log(`Server running at http://localhost:${PORT}`))