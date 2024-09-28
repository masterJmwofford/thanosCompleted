const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb')
connectToDb()
// ------->------->-------> Imports

// ------->------->-------> Middleware


// ------->------->-------> Routes
app.get('/notes',(req,res)=>{
    console.log(first)
})
app.get('/notes/:id',(req,res)=>{
    console.log(first)
})
app.post('/notes',(req,res)=>{
    console.log(first)
})
app.put('/notes/:id',(req,res)=>{
    console.log(first)
})
app.delete('/notes/:id',(req,res)=>{
    console.log(first)
})




// ------->------->-------> Server
app.listen(PORT,()=>{
    console.log(`ServerConnectedOn: ${PORT}`)
})
