const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");
const { forgetPassword, resetPassword, signout, signup, signin, isAdmin, isSignedIn, confirm, Adminlogin } = require("../middleware/auth");

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

router.post('/user/confirm', confirm)
router.post('/forget-password', forgetPassword)
router.post('/reset-password', resetPassword)
router.post("/signout", signout);
router.post('/adminlogin', isSignedIn, isAdmin, Adminlogin)

module.exports = router;
