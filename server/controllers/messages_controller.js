let messages = [
  // {
  //   text: 'fake message',
  //   time: '9',
  //   id: 0,
  // },
]
let id = 0

module.exports = {
  readMessages(req, res) {
    return res.status(200).send(messages)
  },

  createMessage(req, res) {
    console.log(req.body)
    const { text, time } = req.body
    // console.log(text)
    // console.log(time)
    messages.push({ text: text, time: time, id: id })
    id++
    console.log(messages)
    console.log(req.body)
    return res.status(200).send(messages)
  },

  updateMessage(req, res) {
    const { text } = req.body
    const updateId = req.params.id
    const messageIndex = messages.findIndex(message => message.id == updateId)

    messages[messageIndex].text = text

    console.log(messages)

    return res.status(200).send(messages)
  },

  deleteMessage(req, res) {
    const deleteID = req.params.id
    messageIndex = messages.findIndex(message => message.id === deleteID)
    messages.splice(messageIndex, 1)

    res.status(200).send(messages)
  },
}
