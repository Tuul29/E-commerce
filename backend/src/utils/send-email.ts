import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: "tuul.tsegmed29@gmail.com",
      pass: "rhnh tsek mzcp eanp",
    },
  });
  const sendEmail= async(email:string, content:string)
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <tuul.tsegmed29@gmail.com>', // sender address
    to: "tuul.tsegmed0329@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
