const mailgun = require('mailgun-js');

// const DOMAIN = 'sandbox1f53e63d70eb4d79bb4a8704b40a2d86.mailgun.org';
// const API_KEY = '6984440a60d19b9aab02344fb39b9901-4b98b89f-3cb39129';

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

const sendWelcomeEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'ahmed.galbat2001@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'ahmed.galbat2001@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. We hope to see you back soon.`
    })
}



module.exports ={sendWelcomeEmail, sendCancelationEmail}