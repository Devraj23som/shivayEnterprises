// @ts-nocheck
import express from "express";
import { sendMail } from "../nodemailer.js";
// import upload from "../middleware/upload";

const router = express.Router();



router.post("/",async function(req,res){

res.send("hello world")
})

// Inside your Express.js routes file
router.post('/send-email', async (req, res) => {
  const {name,service,phone,email, subject } = req.body;

  try {
    await sendMail(name,subject,email,phone, service);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

 


export default router;