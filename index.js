
const express = require('express')
const app = express()


let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can excute only Javascript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP portocol",
    important: true
  }
]

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find(note => note.id === id)
  response.json(note)
}) 

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
