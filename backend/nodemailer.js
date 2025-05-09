// mailer.js or inside a route/controller
import nodemailer from 'nodemailer';

export const sendMail = async (name, subject,email,phone, service) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shivayenterprises0209@gmail.com',
      pass: process.env.App_Pass // Use App Password, not Gmail password
    }
  });

  const mailOptions = {
    from: 'shivayenterprises0209@gmail.com',
    to: 'shivayenterprises0209@gmail.com',
    subject: subject,
    html:`<div>
     <h1>Hello User you got message from ${name} </h1>
     
     <h3>Inquery for :${service}</h3>
     <h3>Contact number:${phone}</h3>
     <h3>Email_ID : ${email}</h3>

    </div>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};
