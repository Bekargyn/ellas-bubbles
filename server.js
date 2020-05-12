const express = require("express");
const fs = require("fs");
const http = require("http");
const PORT = process.env.PORT || 8080;
const app = express();
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(express.static("build"));

fs.readFile("./build/index.html", function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function (request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  });

  app.post("/sent", (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Full Name: ${req.body.fullName}</li>
      <li>Phone: ${req.body.usersPhone}</li>
      <li>E-mail: ${req.body.email}</li>
      <li>Your Zip: ${req.body.zipcode}</li>
    </ul>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "bekabdrakhmanov@yahoo.com", // generated ethereal user
        pass: "Mersedes85", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });

  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
