//  const contactUsEmail = (email, firstName, lastName, message, phoneNo) => {
//     return `<!DOCTYPE html>
//     <html>

//     <head>
//         <meta charset="UTF-8">
//         <title>Contact Form Confirmation</title>
//         <style>
//             body {
//                 background-color: #ffffff;
//                 font-family: Arial, sans-serif;
//                 font-size: 16px;
//                 line-height: 1.4;
//                 color: #333333;
//                 margin: 0;
//                 padding: 0;
//             }


//             .container {
//                 max-width: 600px;
//                 margin: 0 auto;
//                 padding: 20px;
//                 text-align: center;
//                 background-Color:#9DC4FB
//             }

//             .logo {
//                 max-width: 200px;
//                 margin-bottom: 20px;
//             }

//             .message {
//                 font-size: 18px;
//                 font-weight: bold;
//                 margin-bottom: 20px;
//             }

//             .body {
//                 font-size: 16px;
//                 margin-bottom: 20px;
//             }

//             .cta {
//                 display: inline-block;
//                 padding: 10px 20px;
//                 background-color: #FFD60A;
//                 color: #000000;
//                 text-decoration: none;
//                 border-radius: 5px;
//                 font-size: 16px;
//                 font-weight: bold;
//                 margin-top: 20px;
//             }

//             .support {
//                 font-size: 14px;
//                 color: #999999;
//                 margin-top: 20px;
//             }

//             .highlight {
//                 font-weight: bold;
//             }
//         </style>

//     </head>

//     <body>
//         <div class="container">
//             <a href="https://studyspotindia.com/">
//             <img class="logo"
//                     src="https://res.cloudinary.com/dsm97z5ep/image/upload/v1696703522/studyspotindia/ybtl5rdqtghheztssfvz.jpg" alt="studyspotindia logo"></a>
//             <div class="message">Contact Form Confirmation</div>
//             <div class="body">
//                 <p>Dear ${firstName} ${lastName},</p>
//                 <p>Thank you for contacting us. We have received your message and will respond to you as soon as possible.
//                 </p>
//                 <p>Here are the details you provided:</p>
//                 <p>Name: ${firstName} ${lastName}</p>
//                 <p>Email: ${email}</p>
//                 <p>Phone Number: ${phoneNo}</p>
//                 <p>Message: ${message}</p>
//                 <p>We appreciate your interest and will get back to you shortly. </p>
//             </div>
//             <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
//                 out to us at <a href="mailto:studyspotindia@gmail.com">studyspotindia@gmail.com</a>. We are here to help!</div>
//         </div>
//     </body>

//     </html>`;
//   };


//   module.exports={
//     contactUsEmail
//   }



const contactUsEmail = (email, name,  message, phoneNo) => {

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>

        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        .container {
            /* border: 1px solid red; */
            width: 70%;
            height: auto;
            /* display: flex; */
            /* flex-wrap: wrap; */

        }

        .one {
            width: 100%;
            height: auto;
            /* flex: 50%; */

        }

        .two {
            width: 100%;
            height: 500px;
            /* flex: 50%; */
        }

        .icon button {
            border: none;
            padding: 10px;
            background-color: white;
            border-radius: 10px;
        }

        .icon button img {
            font-size: 26px;
            color: rgb(248, 245, 245);
            transition: color 0.3s ease;
            border-radius: 5px;
            /* Add transition for color change */
        }

       

        .icon button:hover {
            background-color: #064c84;
            /* Change icon color on hover */
        }



        /* form data */

        .formContainer {
            width: 95%;
            height: 100%;
            margin: auto;
            padding-left: 30px;

            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .box-div {
            width: 80%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          

        }

        .box-div-message {
            width: 80%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            overflow-x: scroll;
           
            /* Add a vertical scrollbar if needed */
            max-height: 60px;
            /* Limit the maximum height of the box */

        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            font-weight: bold;
        }



        button {
            background-color: #007BFF;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .logo {
            max-width: 200px;
            margin-bottom: 20px;

        }

        .logo-div {
            margin: auto;
            width: 50%;
        }

        ::-webkit-scrollbar {
           display:none;
     }

        /* Responsive layout - makes a one column-layout instead of a two-column layout */
        @media (max-width: 800px) {
            .container {
                width: 100%;
            }


        }
    </style>
</head>

<body>
    <div class="container">

        <div class="one" style="">
            <div class="formContainer">
                <a href="https://studyspotindia.com/">
                    <img class="logo"
                        src="https://res.cloudinary.com/dsm97z5ep/image/upload/v1696703522/studyspotindia/ybtl5rdqtghheztssfvz.jpg"
                        alt="studyspotindia logo"></a>
                <!-- <div class="message">Contact Form Confirmation</div> -->




                <p>Dear ${name} </p>
                <p>Thank you for contacting us. We have received your message and will respond to you as soon as
                    possible.</p>

                <form action="#" method="post">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <div class="box-div">
                            ${name}                         </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <div class="box-div">${email}</div>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number:</label>
                        <div class="box-div">${phoneNo}</div>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <div class="box-div-message">
                           ${message}
                       
                        </div>
                    </div>
                    <!-- <button type="submit">Submit</button> -->
                </form>

            </div>


        </div>



        <div class="two" style="">
            <div style="width:95%; margin:auto">
                <div style=" width:100%; height:250px;margin-top: 40px;">
                <a href="https://studyspotindia.com/">
                <img src="https://res.cloudinary.com/dsm97z5ep/image/upload/v1696703522/studyspotindia/ybtl5rdqtghheztssfvz.jpg"
                        alt="studyspotindia logo" style="width:100%;height:100%" />
                </a>
                    

                </div>
                <p
                    style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;font-size: 30px;margin-left: 20px;">
                    Welcome to our community</p>
                <div class="icon" style="display:flex; justify-content: space-around; width:80% ;">

                    <button>
                        <!-- <i class="fas fa-envelope"></i> Mail icon -->
                        <a href="mailto:studyspotindia@gmail.com" rel="noreferrer" target="_blank">
                            <img style="width:40px;height:40px"
                            src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"  alt="mail" />
                        </a>
                       

                    </button>
                    
                    <button>
                        <!-- <i class="fas fa-phone"></i> Phone icon -->
                        <a href="tel:+91-8826611071" rel="noreferrer" target="_blank">
                            <img style="width:40px;height:40px"
                            src="https://e7.pngegg.com/pngimages/163/814/png-clipart-dialer-android-mobile-phones-android-blue-telephone-call-thumbnail.png"  alt="call"/>
                        </a>
                       
                    </button>
                    <button>
                        <!-- <i class="fas fa-map-marker-alt"></i> Map icon -->
                        <a href="https://www.google.com/maps/place/STUDYSPOT+%5BHome+Tuition+Services%5D/@28.5864436,77.081902,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1bfecd203135:0x2e6f5526e52acb30!8m2!3d28.5864436!4d77.081902!16s%2Fg%2F11t1mm7fd6?entry=ttu">
                            <img style="width:40px;height:40px"
                            src="https://media.istockphoto.com/id/1190338480/vector/map-pin-icon.jpg?s=612x612&w=0&k=20&c=F4vFyk73simkOEeSmeCpDyvEfdJrQ5__xjtBIbN2NFo="  alt="location"/>
                        </a>

                        
                    </button>
                    <button>
                        <!-- <i class="fab fa-instagram"></i> Instagram icon -->
                        <a href="" rel="noreferrer" target="_blank">
                            <img style="width:40px;height:40px"
                            src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"   alt="instagram"/>
                        </a>
                        

                    </button>
                    <button>
                        <!-- <i class="fab fa-linkedin"></i> LinkedIn icon -->
                        <a href="" rel="noreferrer" target="_blank">
                            <img style="width:40px;height:40px"
                            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"  alt="linkedin"/>
                        </a>
                        

                    </button>
                 
                   
                   
                </div>

            </div>

        </div>
    </div>
</body>

</html>`


}

module.exports = {
    contactUsEmail
}


