const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

// sgmail.send({
//     to : 'nithishkumar277@gmail.com',
//     from : 'nithishkumar277@gmail.com',
//     subject : 'This is my first creation',
//     text : 'I hope this one actually get to you'
// })

const sendWelcomeEmail = (email,name) => {
    sgmail.send({
        to : email,
        from : 'nithishkumar277@gmail.com',
        subject : 'Thanks for Joining In',
        text : `Welcome to the app,${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail = (email,name) => {
    sgmail.send({
        to : email,
        from : 'nithishkumar277@gmail.com',
        subject : 'Good Bye',
        text : `Heyy ,${name}. Can we know why you deleted Your account`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}