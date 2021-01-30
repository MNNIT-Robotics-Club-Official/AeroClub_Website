const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer')
const crypto = require('crypto')

const smtp = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
})

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  crypto.randomBytes(32, (e, buffer) => {
    if (e) console.log(e)
    const token = buffer.toString('hex')
    req.body.verifyToken = token
    smtp.sendMail({
      from: process.env.USER,
      to: req.body.email,
      subject: 'Confirmation@aeroclubmnnit',
      html: `<h2>You requested for password reset</h2>
        <p>Click on this <a href="http://localhost:3000/user/confirm/${token}">link</a> to verify<p>`,
    })
    const user = new User(req.body)
    user.save((err, u) => {
      console.log(err)
      if (err) return res.status(400).json({ error: "Email address already exists !" });
      res.status(400).json({ message: "Signedup success...Verify your email address!" });
    })
  })

};

exports.confirm = (req, res) => {
  const { token } = req.body
  console.log(token)
  User.findOne({ verifyToken: token }, (err, user) => {
    if (err || !user)
      return res.status(400).json({
        error: 'User does not exists'
      });
    user.confirmed = true
    user.verifyToken = undefined

    user.save().then(result => {
      return res.json({
        message: 'User Confirmed successfully !'
      });
    })
  })
}

exports.Adminlogin = (req, res) => {
  const { email, password } = req.body
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email or password do not match !"
      });
    }
    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email or password do not match !"
      });
    }

    res.json({ role: user.role, message: "Admin loggedIn successfully !" })

  })
}

exports.signin = (req, res) => {

  const errors = validationResult(req)
  const { email, password } = req.body

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email or password do not match !"
      });
    }

    if (!user.confirmed) return res.status(400).json({
      error: "You need to verify your email before login !"
    });

    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email or password do not match !"
      });
    }

    // create jwt token
    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // put token in cookie
    res.cookie("token", jwtToken, { expire: new Date() + 9999 });
    res.json({ token: jwtToken, message: 'LoggedIn Successfully !' })
  });
};

exports.forgetPassword = (req, res) => {

  crypto.randomBytes(32, (e, buffer) => {
    if (e) console.log(e)
    const token = buffer.toString('hex')
    User.findOne({ email: req.body.email })
      .then(user => {

        if (!user) return res.status(422).json({ error: "Email is not registered !" })

        user.resetToken = token
        user.expireToken = Date.now() + 3600000
        user.save().then(result => {

          // nodemailer
          smtp.sendMail({
            from: process.env.USER,
            to: req.body.email,
            subject: 'Password-Reset@aeroclubmnnit',
            html: `<h2>You requested for password reset</h2>
          <p>Click on this <a href="http://localhost:3000/user/resetpassword/${token}">link</a> to reset password<p>`,
          }).then(() => {
            res.json({ message: 'Checkout your registered email !' });
          }
          ).catch(e => console.log(e))
        })
      })
  })
}

exports.resetPassword = (req, res) => {

  const newPassword = req.body.password
  const sentToken = req.body.token

  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then(user => {

      if (!user) return res.status(422).json({ error: 'Session has expired...Try Again !' })

      user.password = newPassword
      user.resetToken = undefined
      user.expireToken = undefined

      user.save().then(savedUser => {
        res.json({ message: "Password updated successfully !" })
      }).catch(e => console.log(e))

    }).catch(e => console.log(e))
}

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
};

//custom middlewares
exports.isSignedIn = (req, res, next) => {

  const { authorization } = req.headers

  if (!authorization) return res.status(401).json({ error: "You must be logged in" })

  const token = authorization.replace("Bearer ", "")

  // verifying jwt token
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {

    if (err) return res.status(401).json({ error: "You must be logged in" })
    const { _id } = payload

    // finding the user with the id
    User.findById(_id).then(userData => {
      req.user = userData
      next()
    })
  })
}

exports.isAdmin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.status(403).json({
      error: "You are not ADMIN, Access denied"
    });
  }
  next();
};