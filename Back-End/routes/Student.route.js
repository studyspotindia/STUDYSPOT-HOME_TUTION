const express = require("express")
var jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcrypt")
const { StudentModel } = require("../model/Student.model")
const mongoose = require('mongoose');
const {  mailSender } = require("../utils/mailSender.utils")
const {  contactUsEmail } = require("../template/contactUs")


const studentRoute = express.Router()


//StudentModel
// {
//     "email":"kshivang80@gmail.com",
//     "password":"12345",
//     "name":"Shivang kumar",
//     "profile":"new Profile",
//     "phone":9999999999,
//     "classname":"12th",
//     "location":"delhi",
//     "subject":"JavaScript",
//     "tutiontype":"Home",
//     "fees":1245

//   }


// get all student data ,

studentRoute.get("/", async (req, res) => {
    let queryData = req.query

    try {
        const student = await StudentModel.find(queryData)
        //  res.cookie("papa","Shivang")
        res.status(200).send(student)


    } catch (err) {
        console.log(err)
        console.log({ "Error": "Error is coming While Get data" })
        res.status(400).send({ "Error": "Error is coming While Get data" })

    }
})

// get  student by ID ,



// studentRoute.get("/:id", async (req, res) => {
//     let ID = req.params.id;

//     try {
//         const student = await StudentModel.findById({ _id: ID });
//         res.send(student);
//     } catch (err) {
//         console.log(err);
//         res.send({ Error: "Error Coming While GET BY ID Request" });
//         res.status(404).send(err.message);
//     }
// });

studentRoute.get("/:id", async (req, res) => {
    const ID = req.params.id;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(ID)) {
        return res.status(404).send({ message: "Invalid student ID" });
    }

    try {
        const student = await StudentModel.findById(ID);

        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }

        res.send(student);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
});









// Signup 

studentRoute.post("/signup", async (req, res) => {
    const { email, password, name, profile, phone, classname, location, subject, tutiontype, fees, typeofuser } = req.body
    try {
        const existingUser = await StudentModel.findOne({ email }); // Check if user with the same email exists
        if (existingUser) {
            // User with the same email already exists
            res.status(400).send({ message: "User already exists" });
        } else {

            //for encripting password
            bcrypt.hash(password, 5, async (err, newsecure_password) => {

                // store hash in your database
                if (err) {
                    console.log(err)
                    res.status(400).send({ message: "Error While Register " })
                } else {
                    const user = new StudentModel({ email, password: newsecure_password, name, profile, phone, classname, location, subject, tutiontype, fees, typeofuser })
                    await user.save()
                    res.status(201).send({ message: "You are registered" })
                }
            })

        }



    } catch (err) {
        //res.send({ "message": "Error While Registering" })
        console.log(err)
        res.status(400).send({ message: "Error While Registering" })
    }

})



// LOGIN Section

studentRoute.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await StudentModel.findOne({ email })

        //checking email is valid or not
        if (!user) {
            return res.status(401).send({ "message": "Email is not Valid" });
        }
        const hashed_pass = user.password
        //console.log(user)

        bcrypt.compare(password, hashed_pass, (err, result) => {
            // random payload change to userid
            if (result) {
                const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY);
                // res.cookie("StudentToken", token, {
                //     expires: new Date(Date.now() + 60000),
                //     httpOnly: true
                // })
                res.status(200).send({ "message": "Login Successfully", "token": token, })
            } else {
                res.status(401).send({ "message": "Password is Incorrect" })
            }
        })




    } catch (err) {
        console.log({ "message": "Error While Login", err })
        res.status(401).send(({ "message": "Error While Login" }))
    }
})


// Backend Route to Check Authentication

studentRoute.get('/check-auth/check', async (req, res) => {
    const token = req.cookies.StudentToken;

    if (!token) {
        return res.status(401).send({ isAuthenticated: false });
    }
    else {
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            const userID = decodedToken.userID;

            // Token is valid, return user ID
            return res.status(200).send({ isAuthenticated: true, token: token, userID: userID });
        } catch (error) {
            // Token verification failed
            return res.status(401).send({ isAuthenticated: false });
        }

    }


});


// Logout endpoint
studentRoute.post('/logout', async (req, res) => {
    try {
        // Clear any session data or user-specific information
        // Invalidate or delete tokens (if stored server-side)

        // Clear cookies on the response
        res.clearCookie('StudentAccessToken');
        res.clearCookie('StudentRefreshToken');

        // Respond with a success message
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Logout failed' });
    }
});



//PUT and Patch Request

studentRoute.patch("/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;

    try {
        await StudentModel.findByIdAndUpdate({ _id: ID }, payload);
        res.status(200).send(`The document with id:${ID} has been updated`);
    } catch (err) {
        console.log(err);
        console.log({ Error: "Error coming While Put Request" });
        res.status(404).send(err.message);
    }
});

// DELETE REQUEST

studentRoute.delete("/:id", async (req, res) => {
    const ID = req.params.id;

    try {
        await StudentModel.findByIdAndDelete({ _id: ID });
        res.status(200).send(`The document with id:${ID} has been deleted`);

    } catch (err) {
        console.log(err);
        console.log({ Error: "Error coming While DELETE Request" });
        res.status(404).send(err.message);
    }
});



studentRoute.post('/contactus', async (req, res) => {
    const {email, name,  message, phoneNo} = req.body


    try {
        
      let contactdata=  await mailSender(email,"Email sended Succesfully",contactUsEmail(email, name,  message, phoneNo))
      let contactme=  await mailSender("kshivang80@gmail.com","Student Data is Collected",contactUsEmail(email, name,  message, phoneNo))
       console.log(contactdata,contactme)
     res.status(200).json({ message:contactdata  });
    } catch (error) {
        console.error('error:', error);
        res.status(500).json({ message: ' failed' });
    }
});





module.exports = {
    studentRoute
}