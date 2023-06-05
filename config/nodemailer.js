//import nodemailer
const nodemailer = require("nodemailer");
//require ejs for rendering the pages in the templates
const ejs = require('ejs');
const path = require('path')

// setting up the transporter to send the mail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'alchemy.cn18',
        pass: 'codingninjas'
    }
});

// defines whenever i am sending the HTML email & - the file be in views --> mailers folder
let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err, template){// callback 
         if (err){console.log('error in rendering template'); return}
         
         mailHTML = template;
        }
    )

    return mailHTML;
}

// expoting the properties to use in other sections
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}
