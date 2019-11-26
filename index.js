const express = require('express')

const sendMail = require('./mail')

const app = express()
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

const PORT = process.env.PORT || 5000

app.post('/email', (req, res) => {
    // send email here
    const { name, email, subject, message } = req.body
    console.log('Data: ', req.body)

    sendMail(email, subject, message, name, function(err, data){
        if (err) {
            res.status(500).json({ message: 'Internal Error' })
        } else {
            res.json({ message: 'Email sent!' })
        }
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT)