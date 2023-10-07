const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  nodemailer = require("nodemailer"),
  creds = require("./config"),
  cors = require("cors");

  app.use(cors({origin: true, credentials: true}));
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

var transporter = nodemailer.createTransport({
  service: "proton",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully signed into Gmail account");
  }
});

app.post("/send", (req, res) => {
  const { name } = req.body;
  const { message } = req.body;

  var mail = {
    from: name,
    to: "http://paulisturm22@proton.me",
    subject: "Feedback From The Blog",
    html: `${message}` + "<br><br>Kindly,<br>" + `${name}`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: "err" });
    } else {
      res.json({ msg: "suc" });
    }
  });
});