const nodemailer = require("nodemailer");

module.exports.sendMail = async (text, email) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const info = await transport.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      text: text,
      subject: "Sending email is easy using node js",
    });

    return info;
  } catch (error) {
    console.log("Email error: " + error);
  }
};
