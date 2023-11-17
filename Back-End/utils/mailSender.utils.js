const nodemailer = require("nodemailer")
const smtp = require("nodemailer-smtp-transport")
//import smtp from "nodemailer-smtp-transport";
require("dotenv").config()

const mailSender = async (email, title, body) => {
    try {

        const username = process.env.MAIL_USER || null;
        const password = process.env.MAIL_PASS || null;

        if(!username || !password){
            throw new Error("Please provied username and password")
        }


        const transport = nodemailer.createTransport(
            smtp({
                service: process.env.MAIL_HOST,
                //secure: true,
                // host: process.env.MAIL_SERVER_PROVIDER,
                auth: {
                    user: username,
                    pass: password,
                },
                debug:true
            })
        );

        const mailOptions = {
            from: "studyspotindia || by Gulshan kumar",
            to: `${email}`,
            subject: `${title}`,
            html: body,
        }

        let info = await transport.sendMail(mailOptions,
            function (error) {
                if (error) {
                    console.log("Error transporter : " + error);
                }
            }
        );

        console.log("=> 1",info)
        // return info;
    } catch (error) {
        console.log("Error in mailSender.js ", error.message);
    }
};

module.exports = {
    mailSender
} 
