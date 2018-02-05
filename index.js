const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

const mysql = require('mysql2/promise')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'van23ruy',
    database: 'futiba-club'
}).then( conn => {
    console.log(conn)
})

app.listen(3000, err => {
    console.log('Futiba Club server is running...')
})