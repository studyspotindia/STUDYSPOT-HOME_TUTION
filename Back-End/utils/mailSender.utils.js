const nodemailer = require("nodemailer")
const smtp = require("nodemailer-smtp-transport")
//import smtp from "nodemailer-smtp-transport";
require("dotenv").config()

const mailSender = async (email, title, body) => {
    try {
        const transport = nodemailer.createTransport(
          smtp({
           service: process.env.MAIL_HOST,
            secure: true,
            host: process.env.MAIL_SERVER_PROVIDER,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
          })
        );

        let info = await transport.sendMail(
            {
                from: "studyspotindia || by Gulshan kumar",
                to: `${email}`,
                subject: `${title}`,
                html: body,
            },
            function (error) {
                if (error) {
                    console.log("Error transporter : " + error);
                }
            }
        );

        console.log(info)
        return info;
    } catch (error) {
        console.log("Error in mailSender.js ", error.message);
    }
};

module.exports = {
    mailSender
} 