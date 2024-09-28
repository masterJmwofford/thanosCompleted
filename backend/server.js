const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb')
connectToDb()
const notesController = require('./controllers/notesControllers')
// ------->------->-------> Imports

// ------->------->-------> Middleware
app.use(express.json());
//  data -> json
app.use(cors({
    origin:true,
    credentials: true
  }))
// CORS: CrossOriginResourceSharing

app.use(cookieParser())
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





// ------->------->-------> Server
app.listen(PORT,()=>{
    console.log(`ServerConnectedOn: ${PORT}`)
})
