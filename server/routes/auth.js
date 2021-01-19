const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const brypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/admin/login', (req, res) => {

    const { username, password } = req.body

    User.findOne({ username: username }).then(savedUser => {
        if (!savedUser) return res.status(422).json({ error: "Wrong username or password !" })

        brypt.compare(password, savedUser.password).then(doMatch => {
            if (doMatch) {
                const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET)
                return res.json({ token, role: savedUser.role })
            }
            res.status(422).json({ error: "Wrong username or password !" })
        })
    })

})

// router.post('/signup', (req, res) => {
//     const { username, password } = req.body
//     brypt.hash(password, 12).then(hashedPassword => {
//         const user = new User({
//             password: hashedPassword,
//             username,
//             name: 'Admin'
//         })
//         user.save().then(user => {
//             res.json({ msg: 'Saved Succesfully!' })
//         })
//             .catch(e => console.log(e))
//     })
// })

module.exports = router