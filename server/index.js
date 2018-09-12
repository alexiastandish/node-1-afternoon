const express = require('express'),
  app = express(),
  port = 3000,
  bodyParser = require('body-parser'),
  messages_controller = require('./controllers/messages_controller')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', messages_controller.readMessages)
app.post('/api/messages', messages_controller.createMessage)
app.put('/api/messages/:id', messages_controller.updateMessage)
app.delete('/api/messages/:id', messages_controller.deleteMessage)

app.listen(port, () => {
  console.log(`marco... polo on port ${port}`)
})
