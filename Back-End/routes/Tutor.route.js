const express = require("express")
var jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcrypt")
const { TutorModel } = require("../model/Tutor.model")
const mongoose = require('mongoose');


const tutorRoute = express.Router()


// {
//     "email":"kraju800@gmail.com",
//     "password":"12345",
//     "name":"Rajesh",
//     "profile":"new Profile raju",
//     "phone":9999999999,
//     "highereducation":"12th",
//     "location":"delhi",
//     "subjecttaught":"JavaScript",
//     "classtaught":"12th",
//     "experience":"18m",
//     "tutiontype":"Home",
//     "fees":8000,
//     "about":"jjjajjsjkdkd"
    
// }



// get all tutor data ,



tutorRoute.get("/", async (req, res) => {
    let queryData = req.query

    try {
        const tutor = await TutorModel.find(queryData)
        res.send(tutor)

    } catch (err) {
        console.log(err)
        console.log({ "error": "Error is coming While Get data" })
        res.status(400).send({ "error": "Error is coming While Get data" })
    }
})

// get  tutor by ID ,



// tutorRoute.get("/:id", async (req, res) => {
//   let ID = req.params.id;

//   try {
//     const tutor = await TutorModel.findById({ _id: ID });
//     res.send(tutor);
//   } catch (err) {
//     console.log(err);
//     res.send({ Error: "Error Coming While GET BY ID Request" });
//     res.status(404).send(err.message);
//   }
// });


tutorRoute.get("/:id", async (req, res) => {
    const ID = req.params.id;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(ID)) {
        return res.status(404).send({ message: "Invalid tutor ID" });
    }

    try {
        const tutor = await TutorModel.findById(ID);

        if (!tutor) {
            return res.status(404).send({ message: "tutor not found" });
        }

        res.status(200).send(tutor);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
});




// Signup 

tutorRoute.post("/signup", async (req, res) => {
    const { email, password, name, profile, phone, highereducation, location, subjecttaught,classtaught,experience, tutiontype, fees, typeofuser,about } = req.body
    try {

        const existingUser = await TutorModel.findOne({ email }); // Check if user with the same email exists
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
                const tutor = new TutorModel({ email, password: newsecure_password, name, profile, phone, highereducation, location, subjecttaught,classtaught,experience, tutiontype, fees, typeofuser,about })
                await tutor.save()
                res.status(201).send({ message: "You are registered" })
            }
        })

        }

        

    } catch (err) {
        //res.send({ "Error": "Error While Registering" })
        console.log(err)
        res.status(400).send({ "Error": "Error While Registering" })

    }

})



// LOGIN Section

tutorRoute.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await TutorModel.findOne({ email })

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


// 

//PUT and Patch Request

// tutorRoute.patch("/update/:id", async (req, res) => {
//     const ID = req.params.id;
//     const payload = req.body;

//     try {
//         console.log(payload)
//        let tutor= await TutorModel.findByIdAndUpdate({ _id: ID }, payload);
//        console.log(tutor)
//         res.status(200).send(`The document with id:${ID} has been updated`);
//     } catch (err) {
//         console.log(err);
//         console.log({ Error: "Error coming While Put Request" });
//         res.status(404).send(err.message);
//     }
// });

tutorRoute.patch('/update/:id', async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
  
    try {
      // Check if the payload contains a new password
      if (payload.password) {
        // Hash the new password using bcrypt
        const hashedPassword = await bcrypt.hash(payload.password, 5); // You can adjust the saltRounds (10 in this example)
  
        // Replace the plain text password in the payload with the hashed password
        payload.password = hashedPassword;
      }
  
      // Update the tutor document with the new payload
      let tutor = await TutorModel.findByIdAndUpdate({ _id: ID }, payload);
       console.log(tutor)
      res.status(200).send(`The document with id:${ID} has been updated`);
      
    } catch (err) {
      console.log(err);
      console.log({ Error: 'Error coming While Put Request' });
      res.status(404).send(err.message);
    }
  });
  

// DELETE REQUEST

tutorRoute.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;

    try {
        await TutorModel.findByIdAndDelete({ _id: ID });
        res.status(200).send(`The document with id:${ID} has been deleted`);
        
    } catch (err) {
        console.log(err);
        console.log({ Error: "Error coming While DELETE Request" });
        res.status(404).send(err.message);
    }
});






module.exports = {
    tutorRoute
}