const express = require('express')
const app = express()
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
const session = require('express-session')
const account = require('./account')
const admin = require('./admin')
const groups = require('./groups')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'fullstack-academy',
    resave: true,
    saveUninitialized: true
}))
app.set('view engine', 'ejs')

// Local DB

/* const init = async() => {
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'van23ruy',
        database: 'futibaclub'
    }) */

    const init = async() => {
        const connection = await mysql.createConnection({
            host: 'us-cdbr-iron-east-05.cleardb.net',
            user: 'b6ea0c712ef891',
            password: '9d3a2b9a21b3ddf',
            database: 'heroku_4500ee00b4b4ec5'
        })

    app.use((req, res, next) => {
        if(req.session.user) {
            res.locals.user = req.session.user
        } else {
            res.locals.user = false
        }
        next()
    })

    app.use(account(connection))
    app.use('/admin', admin(connection))
    app.use('/groups', groups(connection))

    app.listen(3000, err => {
        console.log('Futiba Club server is running...')
    })

}
init()

