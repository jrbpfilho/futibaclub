const express = require('express')
const app = express()
const mysql = require('mysql2/promise')

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

const init = async() => {
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'van23ruy',
        database: 'futibaclub'
})
const [rows, fields] = await connection.execute('select * from users')
console.log(rows)
}
init()

app.listen(3000, err => {
    console.log('Futiba Club server is running...')
})