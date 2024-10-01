const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const path = require("path");
const cookieParser = require('cookie-parser')
const connectToDb = require('./config/connectToDb')
connectToDb()
const notesController = require('./controllers/notesController')
const usersController = require('./controllers/usersController')

// ------->------->-------> Imports
// ------->------->-------> Middleware
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use(express.json());
//  data -> json

app.use(require('./config/checkToken'))
app.use(cors({
    origin:true,
    credentials: true
  }))
// CORS: CrossOriginResourceSharing

// app.use(cookieParser())
// cookieParser: npm i cookie-parser *




// ------->------->-------> Routes
app.get("/notes", notesController.fetchNotes);
// +++++++++++++ {READ} ++++++++++++++

app.get("/notes/:id", notesController.fetchNote);
// +++++++++++++ {READ} ++++++++++++++

app.post("/notes", notesController.createNote);

// +++++++++++++ {CREATE} ++++++++++++++
app.put("/notes/:id", notesController.updateNote);
// +++++++++++++ {UPDATE} ++++++++++++++

app.delete("/notes/:id", notesController.deleteNote);
// +++++++++++++ {DELETE} ++++++++++++++
// -------------------------------------------------------[userRoutes]
app.post('/api/users', usersController.create);
app.post('api/users/login', usersController.login);
app.get('api/users/check-token', ensureLoggedIn, usersController.checkToken)


// ------->------->-------> Server
app.listen(PORT,()=>{
    console.log(`ServerConnectedOn: ${PORT}`)
})
