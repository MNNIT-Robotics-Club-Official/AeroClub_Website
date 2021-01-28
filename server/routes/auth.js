const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");
const { forgetPassword, resetPassword, signout, signup, signin, isAdmin, isSignedIn } = require("../middleware/auth");

router.post(
    "/signup",
    [
        check("name", "name should be at least 3 char").isLength({ min: 3 }),
        body("email").custom(email => {
            if (/^[A-Za-z0-9._%+-]+@mnnit.ac.in$/.test(email)) return true
            throw new Error('Email is not valid !')
        }),
        check("password", "password should be at least 3 char").isLength({ min: 3 })
    ],
    signup
);

router.post(
    "/signin",
    [
        check("email", "email is required").isEmail(),
        check("password", "password field is required").isLength({ min: 1 })
    ],
    signin
);

router.post('/forget-password', forgetPassword)
router.post('/reset-password', resetPassword)

router.get("/signout", signout);

router.post('/isAdmin', isSignedIn, isAdmin, (req, res) => {
    return res.json({ msg: "Welcome to Admin Panel" })
})

module.exports = router;
