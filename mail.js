const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const keys = require('./config/keys')

const auth = {
    auth: {
        api_key: keys.MAILGUN_API_KEY,
        domain: keys.MAILGUN_DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (email, subject, message, name, callback) => {
    const mailOptions = {
        from: email,
        to: keys.OWNER_EMAIL,
        subject,
        text: 'Message from: ' + name + ' Message sent: ' + message,
        html: `
            <p>Message from <b>${name}</b>:</p>
            <p>${message}</p>
        `
    }
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
}

module.exports = sendMail