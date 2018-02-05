const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá Futiba Club')
})

app.listen(3000, err => {
    console.log('Futiba Club server is running...')
})