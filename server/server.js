const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const PORT=process.env.PORT || 587;


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5005, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "meredith35@ethereal.email",
//       pass: "fHwRhVJXFUw4nFxxjm",
//     },
//   });
const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: PORT,
  auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASS
   
  }
});
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const subject = req.body.subject; 
    const mail = {
      from: name,
      to: "sainimonti17@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Subject: ${subject}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });
  // 